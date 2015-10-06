Game.prototype.restart = function () {
  this.clearLocalStorage();
  this.timer = setTimeout(function() {
    this.clearBoard();
  }, 0);
};