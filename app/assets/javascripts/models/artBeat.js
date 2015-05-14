var ArtBeat = function() {
  this.allGalleries = [];
  this.allPieces = [];
  this.allArtists = [];
}

ArtBeat.prototype = {

  getAllGalleries: function() {
    console.log('getting all galleries')
    $.ajax({
      type: 'GET',
      dataType: 'json',
      url: 'http://localhost:3000/galleries'
    }).done(function(response) {
      artBeatModel.loadAllGalleries(response);
      artBeatView.renderGalleries();
    }).fail(function(response) {
      console.log('js failed to load')
    })
  },

  getAllPieces: function() {
    console.log('getting all pieces')
    $.ajax({
      type: 'GET',
      dataType: 'json',
      url: 'http://localhost:3000/pieces'
    }).done(function(response) {
      artBeatModel.loadAllPieces(response);
      artBeatView.renderPieces();
    }).fail(function(response) {
      console.log('js failed to load')
    })
  },

  getAllArtists: function() {
    console.log('getting all artists')
    $.ajax({
      type: 'GET',
      dataType: 'json',
      url: 'http://localhost:3000/artists'
    }).done(function(response) {
      artBeatModel.loadAllArtists(response);
      artBeatView.renderArtists();
    }).fail(function(response) {
      console.log('js failed to load')
    })
  },

  loadAllGalleries: function(response) {
    console.log('loading all galleries')
    this.allGalleries = [];
    for(var i = 0; i <response.length; i++) {
      console.dir(response)
      var gallery = new Gallery(response[i].id, response[i].user_id, response[i].gallery_name, response[i].gallery_description);
      this.allGalleries.push(gallery);
    }
  },

  loadAllPieces: function(response) {
    console.log('loading all pieces')
    this.allPieces = [];
    for(var i = 0; i <response.length; i++) {
      var gallery = new Piece(response[i].id, response[i].user_id, response[i].gallery_name, response[i].gallery_description);
      this.allPieces.push(gallery);
    }
  },

  loadAllArtists: function(response) {
    console.log(response);
    this.allArtists = [];
    for(var i = 0; i <response.length; i++) {
      var artist = new Artist(response[i].id, response[i].name, response[i].bio, response[i].prof_pic, response[i].contact_info);
      this.allArtists.push(artist);
    }
  },

}
