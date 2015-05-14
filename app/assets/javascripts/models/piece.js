var Piece = function(){
  this.hearts = $('#piece-hearts').val();
  this.gallery = $('#piece-gallery').val();
  this.artist = $('#piece-artist').val();
  this.id = $('#piece-id').val();
}

Piece.prototype = {

  heart: function(){
    this.hearts = parseInt(this.hearts) + 1;
  },

  get: function(){
    $.ajax({
      type:'GET',
      dataType: 'json',
      url: '/artists/' + this.artist + '/galleries/' + this.gallery + '/pieces/' + this.id
    }).done(function(response){
      this.hearts = response.stars;
      this.gallery = response.gallery_id;
      this.id = response.id;
      console.log(response);
    }).fail(function(response){
    });
  },

  update: function(){
    $.ajax({
      type: 'PATCH',
      data: { piece:
        {
          id: this.id,
          gallery_id: this.gallery,
          stars: this.hearts
        }
      },
      dataType: 'json',
      url: '/artists/' + this.artist + '/galleries/' + this.gallery + '/pieces/' + this.id
    }).done(function(response) {
      console.log("ajax request complete");
      console.log(response);
    }).fail(function(response){
      console.log("failed to save", response.responseText);
    })
  }
}
