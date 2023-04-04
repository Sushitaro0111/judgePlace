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
  x: 5,
  y: 10
}
const peopleLocation = new PeopleLocation(locationInformation);
const poligon = new Poligon(poligonPeaks)
let cnt = 0;

poligon.sides.forEach(side => {
// 位置情報の二頂点を通る直線が辺の線分を構成する二頂点と交差し、
// かつ辺の線分を通る直線が位置情報を構成する二頂点と交差するとき、二つの線分は交差する
  if (side.isCross(peopleLocation.lineSegment) && peopleLocation.lineSegment.isCross(side)) {
    cnt++;
  } 
});

if (cnt % 2 === 0 ){
  console.log('out');
} else {
  console.log('in');
}
