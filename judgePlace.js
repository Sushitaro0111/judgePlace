const poligonPeaks = [
  {
    x: 0,
    y: 0
  },
  {
    x: 5,
    y: 12
  },
  {
    x: 15,
    y: 8
  },
  {
    x: 15,
    y: 1
  }
];

const locationInformation = {
  x: 16,
  y: 2
}
const peopleLocation = new PeopleLocation(locationInformation);
const poligon = new Poligon(poligonPeaks)
let cnt = 0;

poligon.sides.forEach(side => {
  if (side.isCross(peopleLocation.lineSegment) && peopleLocation.lineSegment.isCross(side)) {
    cnt++;
  } 
});

if (cnt % 2 === 0 ){
  console.log('out');
} else {
  console.log('in');
}

// /**
//  * 図形の全ての頂点情報から全ての辺の情報を取得する
//  * @param {Object} peaks 図形の持つ全ての頂点情報
//  * @returns {Array} 対象となる図形の全ての辺の情報
//  * this.sides = [
//     {
//       peak1: [0, 0],
//       peak2: [3, 3]
//     },
//     {
//       peak1: [3, 3],
//       peak2: [6, 0]
//     },
//     {
//       peak1: [6, 0],
//       peak2: [0, 0]
//     }

//   ];
//   */
//   function getSides(peaks) {
//     // 図形の頂点情報から一辺を構成する二つの頂点情報を取得する
//     const sides = [];
//     for (let i = 0; i<peaks.length; i++) {
//       const vertices = {
//         peak1: [],
//         peak2: [],
//       };
//       vertices.peak1.push(peaks[i].x);
//       vertices.peak1.push(peaks[i].y);
//       if (i+1 === peaks.length) {
//         // 最後の頂点の場合は、二つ目の頂点情報は一つ目の頂点情報になる
//         vertices.peak2.push(peaks[0].x);
//         vertices.peak2.push(peaks[0].y);
//       } else {
//         vertices.peak2.push(peaks[i+1].x);
//         vertices.peak2.push(peaks[i+1].y);
//       }
//       sides.push(new Side(vertices));
//     }
//     return sides;
//   }