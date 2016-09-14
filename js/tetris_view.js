import Board from './board';

class TetrisView {
  constructor (tetris) {
    this.tetris = tetris;
    this.board = new Board;
    this.render();
    this.startEventListeners();
  }

  startEventListeners () {
    document.addEventListener('keydown', event => {
      switch (event.key) {
        case 's':
          if (!this.timerId) {
            this.play();
          }
          break;
        case 'p':
          window.clearInterval(this.timerId);
          this.timerId = undefined;
          break;
        case 'ArrowLeft':
          this.board.moveLeft();
          this.board.update();
          this.render();
          break;
        case 'ArrowRight':
          this.board.moveRight();
          this.board.update();
          this.render();
          break;
        case 'z':
          this.board.rotateLeft();
          this.board.update();
          this.render();
          break;
        case 'x':
          this.board.rotateRight();
          this.board.update();
          this.render();
          break;
        default:
          return;
      }
    });
  }

  play () {
    this.timerId = window.setInterval(() => {
      this.board.fall();
      if (this.board.gameOver()) {
        window.clearInterval(this.timerId);
        let GOMessage = document.getElementById('game-over');
        GOMessage.setAttribute('class', 'show');
      }
      this.board.update();
      this.render();
    }, 100);
  }

  render () {
    this.tetris.innerHTML = this.board.toString();
  }
}

export default TetrisView;
