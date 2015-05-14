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
      url: 'http://localhost:3000/artists/' + this.artist + '/galleries/' + this.gallery + '/pieces/' + this.id
    }).done(function(response){
      this.hearts = response.stars;
      this.gallery = response.gallery_id;
      this.id = response.id;
      console.log(response);
    }).fail(function(response){
    });
  },

  save: function(){
    $.ajax({
      type: 'POST',
      data: { piece: {gallery_id: this.gallery, piece_name: this.piece_name, picture: this.picture, piece_description: this.piece_description}},
      dataType: 'json',
      url: 'http://localhost:3000/galleries/' + this.gallery + '/pieces'
    }).done(function(response) {
      console.log("ajax request complete, piece saved?");
    }).fail(function(){
      console.log("failed to save");
    })
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
      url: 'http://localhost:3000/artists/' + this.artist + '/galleries/' + this.gallery + '/pieces/' + this.id
    }).done(function(response) {
      console.log("ajax request complete");
      console.log(response);
    }).fail(function(response){
      console.log("failed to save", response.responseText);
    })
  }
}
