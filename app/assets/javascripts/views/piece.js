var PieceView = function(piece){
  this.model = piece;
  $('body').on('click', '#heartbeats', this.addHeart.bind(this));
}

PieceView.prototype = {

  addHeart: function(){
      this.model.get();
      this.model.heart();
      this.model.update();
      $('#num-of-artbeats').text(this.model.hearts);
  }
}
