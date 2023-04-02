// class Place {
//   constructor() {
//     // 各辺の傾きと切片
//     this.sides = [
//       {
//         a: 1,
//         b: 0
//       },
//       {
//         a: -1,
//         b: 6
//       },
//       {
//         a: 0,
//         b: 0
//       },
//     ];
//   }

//   /**
//    * y-ax-bに頂点を代入して0より大きければその点は辺より上にいる。0より小さければその辺より下にいる
//    * 二つの点が両方とも辺より上もしくは下にいれば、二点と辺は交差しない
//    * 逆に一方の点が上に、もう一方が下にいれば、二点と線分は交差していることになる。
//    * 人の座標の内外判定処理
//    * @param {Object} locationInformation 人の座標情報
//    * @returns out: 人の座標は空間の外にいる状態, in: 人の座標は空間の内にいる状態
//    */
//   getIsOutOrIn(locationInformation) {
//     // 
//     // 
//     // 
//     // 
//     // 
//     // 
//     let counter = 0;
//     const placeOfX = locationInformation.x;
//     const placeOfY = locationInformation.y;
//     for(let x = placeOfX; x <= this.maxX; x++) {
//       // 人のX座標が四角形のX軸の最大になるまでループ
//       this.sides.forEach(side => {
//           // 各辺に対してy=ax+bのxにx座標の数値を代入してyが人のy座標と一致すればカウントをインクリメント
//           let y = side.a * x + side.b;
//           if (y === placeOfY){ 
//             counter++;
//           }
//         });
//     }
//     // 辺に重なった回数が偶数であれば座標は空間の外、奇数なら空間の中にいる
//     return counter%2 == 0 ? 'out' : 'in';
//   }
  
// }

// const place = new Place();
// const locationInformation = {
//   x: 3,
//   y: 2
// }
// const isOutOrIn = place.getIsOutOrIn(locationInformation);
// console.log(isOutOrIn);