class PeopleLocation extends Coodinate{
  /**
   * @param {Object} locationInformation 人の座標情報 
   * const locationInformation = {
        x: 3,
        y: 2
      }
   */
  constructor(locationInformation) {
    super(locationInformation);
    // x座標が0,y座標が人の位置情報のy座標 と　人の位置情報の二点で構成する線分情報
    this.lineSegment = new Side(this.getPeopleCoodinates(locationInformation));
  }

  /**
   * x座標が0,y座標が人の位置情報のy座標 と　人の位置情報の二点で構成される頂点情報
   * @param {Object} locationInformation 人の位置情報
   * @returns {Array} x座標が0、y座標が人の位置情報のy座標である配列情報
   * [ [0, locationInformation.y] , [locationInformation.x, locationInformation.y]]
   */
  getPeopleCoodinates(locationInformation) {
    let peopleCoordinates = [];
    peopleCoordinates.push([0, locationInformation.y]);
    peopleCoordinates.push([locationInformation.x, locationInformation.y]);
    return peopleCoordinates;
  }

}