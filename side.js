class Side {

  /**
   * 
   * @param {Object} vertices 一辺を構成する2つの頂点情報
   * vertices = [[0, 0], [3, 3]];
   */
  constructor(vertices) {

    // 線分を構成する2つの頂点情報
    this.vertices = vertices;
    // 辺の傾き
    this.slope = this.getSlope(vertices);
    // 辺の切片
    this.slice = this.getSlice(vertices[0], this.slope);
  }
  
  /**
   * 対象の線分と交差しているかを判定する関数
   * @param {Side} targetSide 対象の線分
   * @returns true: 対象の線分と交差している, false: 対象の線分と交差していない
   * targetSide = [ [0, 0], [3, 3] ];
   */
  isCross(targetSide) {
    let cnt = 0;
    targetSide.vertices.forEach(vertice => {
      if (!isFinite(this.slope) || !isFinite(this.slice)) {
        // 傾きもしくは切片のいずれかがInfiniteだった場合、対象のx座標が辺を構成するx座標よりも大きければカウントアップ、
        // 対象のx座標が辺を構成するx座標よりも小さければカウントダウン
        vertice[0] - this.vertices[0][0] > 0 ? cnt++ : cnt--;
      } else {
        // y-ax-bにtargetSideの頂点情報を代入し、0より大きければカウントアップ、0より小さければカウントダウン
        vertice[1] - ( this.slope * vertice[0] ) - this.slice > 0 ? cnt++ : cnt--; 
      }
    });
    // 最終的にカウントが0ならば交差している
    return cnt === 0 ? true : false;
  }

  /**
   * 二つの頂点情報から傾きを取得する
   * @param {Array} vertices 
   * @returns {Number} 傾きの情報(無限小数になる可能性あり)
   */
  getSlope(vertices) {
    let x1 = undefined;
    let y1 = undefined;
    let x2 = undefined;
    let y2 = undefined;
    vertices.forEach(function(vertice, index) {
      if(index == 0) {
        x1 = vertice[0];
        y1 = vertice[1];
      } else {
        x2 = vertice[0];
        y2 = vertice[1];
      }
    });
    return (y2 - y1) / (x2 - x1);
  }

  /**
   * 二つの頂点情報から傾きを取得する
   * @param {Array} vertice 一つの座標情報 
   * @param {Number} slope 傾き 
   * @returns {Number} 切片情報(無限小数になる可能性あり)
   */
  getSlice(vertice, slope) {
    return vertice[1] - ( slope * vertice[0] );
  }
}