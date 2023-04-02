class Poligon {
  /**
   * @param {Array} poligonPeaks x,yをキーに持つオブジェクトから構成される全ての頂点情報 
   * poligonPeaks = [
        {
          x: 0,
          y: 0
        },
        {
          x: 3,
          y: 3
        },
        {
          x: 6,
          y: 0
        }
      ];
   */
  constructor(poligonPeaks) {
    // 全ての頂点の情報を順番に格納する
    this.peaks = poligonPeaks;
    // x軸,y軸の最大値、最小値
    this.maxX = this.getMax('x');
    this.maxY = this.getMax('y');
    this.minX = this.getMin('x');
    this.minY = this.getMin('y');
    
    this.sides = this.getSides(this.peaks);
  }

  /**
   * 図形の全ての頂点情報から全ての辺の情報を取得するｇ
   * @param {Object} poligonPeaks x,yをキーに持つオブジェクトから構成される全ての頂点情報
   * @returns {Array} 対象となる図形の全ての辺の情報
   * this.sides = [
      {
        peak1: [0, 0],
        peak2: [3, 3]
      },
      {
        peak1: [3, 3],
        peak2: [6, 0]
      },
      {
        peak1: [6, 0],
        peak2: [0, 0]
      }

    ];
   */
  getSides(poligonPeaks) {
    // 図形の頂点情報から一辺を構成する二つの頂点情報を取得する
    const sides = [];
    for (let i = 0; i<poligonPeaks.length; i++) {
      const vertices = [];
      vertices.push([poligonPeaks[i].x, poligonPeaks[i].y]);
      if (i+1 === poligonPeaks.length) {
        // 最後の頂点の場合は、二つ目の頂点情報は一つ目の頂点情報になる
        vertices.push([poligonPeaks[0].x, poligonPeaks[0].y]);
      } else {
        vertices.push([poligonPeaks[i+1].x, poligonPeaks[i+1].y]);
      }
      sides.push(new Side(vertices));
    }
    return sides;
  }

  /**
   * 指定されたオブジェクトの最大値を取得する
   * @param {String} item 最大値を取得する対象となるオブジェクトのキー
   * @returns {Number} オブジェクトの最大値
   */
  getMax(item) {
    return Math.max(...this.peaks.map(peak => peak[item]));
  }

  /**
   * 指定されたオブジェクトの最小値を取得する
   * @param {String} item 最小値を取得する対象となるオブジェクトのキー
   * @returns {Number} オブジェクトの最小値
   */
  getMin(item) {
    return Math.min(...this.peaks.map(peak => peak[item]));
  }
  
}