var Artist = function(id, name, bio, prof_pic, contact_info){
  this.galleries =[];
  this.id = id;
  this.name = name;
  this.bio = bio;
  this.prof_pic = prof_pic;
  this.contact_info = contact_info;
}

Artist.prototype = {

  fetchArtistInfo: function(){
    $.ajax({
      type:'GET',
      dataType: 'json',
      url: 'http://localhost:3000/artists' + this.id
    }).done(function(response){

    })
  },

  fetchGalleries: function(){
    $.ajax({
      type: 'GET',
      dataType: 'json',
      url: 'http://localhost:3000/artists/' + this.id + '/galleries'
    }).done(function(response){
      userModel.loadGalleries(response);
      userView.render();
    }).fail(function(){
      console.log('js failed to load')
    })
  },

  loadGalleries: function(response){
    this.galleries = [];
      for(var i = 0; i < response.length; i++){
        var gallery = new Gallery(response[i].id, response[i].artist_id, response[i].gallery_name, response[i].gallery_description);
        this.galleries.push(gallery);
      }
  }
}
