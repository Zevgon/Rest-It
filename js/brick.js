class Brick {
  constructor () {
    this.className = 'brick';
    this.coords = [[-1, 4], [-1, 5], [0, 4], [0, 5]]
  }

  rotateLeftCoords () {
    return this.coords;
  }

  rotateRightCoords () {
    return this.coords;
  }

  executeRotationLeft () {}

  executeRotationRight () {}
}

export default Brick;
