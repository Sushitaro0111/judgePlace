class Side {

  /**
   * 
   * @param {Object} vertices 一辺を構成する2つの頂点情報
   * vertices = [[0, 0], [3, 3]];
   */
  constructor(vertices) {

    // 線分を構成する2つの頂点
    this.vertices = vertices;

    // 線分の一次関数式(交差判定しやすいようにy-ax-bの形式で持っておく) 
    this.slope = this.getSlope(vertices);
    this.slice = this.getSlice(vertices[0], this.slope);
  }
  
  /**
   * 対象の線分と交差しているかを判定する関数
   * @param {Side} targetSide 対象の線分
   * @returns true: 対象の線分と交差している, false: 対象の線分と交差していない
   * targetSide = [ [0, 0], [3, 3] ];
   */
  isCross(targetSide) {
    // 位置情報の線分を通る直線が対象の線分を構成する二頂点と交差し、
    // かつ対象の線分を通る直線が位置情報を構成する二頂点と交差するとき、二つの線分は交差する
    let cnt = 0;
    targetSide.vertices.forEach(vertice => {
      // y-ax-bにtargetSideの頂点情報を代入し、0より大きければカウントアップ、0より小さければカウントダウン
      vertice[1] - ( this.slope * vertice[0] ) - this.slice > 0 ? cnt++ : cnt--; 
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