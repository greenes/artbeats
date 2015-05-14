var ArtBeatView = function(artBeat) {
  var viewArtistsButton = document.querySelector('#artists');
  var viewGalleriesButton = document.querySelector('#galleries');
  var viewPiecesButton = document.querySelector('#pieces');
  var homeButton = document.querySelector('#art-beat')
  this.welcomeGallery = document.querySelector('#welcome-gallery');
  this.model= artBeat;
  homeButton.addEventListener('click', this.renderHome.bind(this));


}

ArtBeatView.prototype = {

  renderGalleries: function() {
    console.log('rendering galleries');
    var viewArea = document.getElementById('welcome-gallery');
    viewArea.innerHTML = '';
    for (var i = 0; i < this.model.allGalleries.length; i++) {
        var subdiv = document.createElement("div");
        console.dir(this.model);
        subdiv.appendChild(document.createTextNode(''+ this.model.allGalleries[i].gallery_name + ' : ' + this.model.allGalleries[i].description + ''));
        viewArea.appendChild(subdiv);
    }

  },

  renderPieces: function() {
    console.log('rendering pieces');
    var viewArea = document.getElementById('welcome-gallery');
    viewArea.innerHTML = '';
    for (var i = 0; i < this.model.allPieces.length; i++) {
        var subdiv = document.createElement("div");
        subdiv.appendChild(document.createTextNode(this.model.allPieces[i].piece_name));
        viewArea.appendChild(subdiv);
    }

  },

  renderArtists: function() {
    console.log('rendering Artists');
    var viewArea = document.getElementById('welcome-gallery');
    viewArea.innerHTML = '';
    for (var i = 0; i < this.model.allArtists.length; i++) {
        var subdiv = document.createElement("div");
        subdiv.appendChild(document.createTextNode(this.model.allArtists[i].id));
        viewArea.appendChild(subdiv);
    }

  },

  renderHome: function(){
    console.log('rendering home');
    var viewArea = document.getElementById('welcome-gallery');

  }

}
