
class GalleriesController < ApplicationController

  before_action :authenticate_artist!, :only => [:new, :create, :update, :destroy]

  def index
    @galleries = Gallery.all

    respond_to do |format|
      format.html { render :index }
      format.json { render json: @galleries }
    end
  end

  def show
    @gallery = Gallery.find(params[:id])
    artistid = @gallery.artist_id
    @artist = Artist.find(artistid)
    @profile = Profile.find(@artist.profile)
    @pieces = @gallery.pieces.all
    @piece = Piece.new
  end

  def new
    @gallery = Gallery.new
    @artist = Artist.find(params[:artist_id])
  end

  def create
    @gallery = Gallery.new(gallery_params)
      if @gallery.save
        @profile = Artist.find(@gallery.artist.id).profile
        redirect_to artist_profile_path(@profile.artist, @profile)
      else
       render :new
     end
  end

  def update
      @gallery = Gallery.find( params[:id] )
      @piece = Piece.create(piece_params)
    if @gallery.update( gallery_params )
      redirect_to @gallery
    else
      render :edit
    end

  end

  def destroy
    @galleries = Gallery.all
    @gallery = Gallery.find(params[:id])
    @profile = Artist.find(@gallery.artist.id).profile
    @gallery.destroy
    redirect_to artist_profile_path(@profile.artist, @profile)
  end

private
  def gallery_params
    params.require(:gallery).permit(:artist_id, :gallery_name, :description)
  end

  def piece_params
    params.require(:piece).permit(:gallery_id, :piece_name, :piece_date, :piece_description, :image)
  end

end
