class PiecesController < ApplicationController

  protect_from_forgery with: :null_session

  def index
    @pieces = Piece.all


    respond_to do |format|
      format.html { render :index }
      format.json { render json: @pieces }
    end
  end

  def show
    @piece = Piece.find(params[:id])
    @gallery = @piece.gallery
    @artist = @gallery.artist
    @profile = @artist.profile

    respond_to do |format|
      format.html { render :show }
      format.json { render json: @piece }
    end
  end

  def new
    @piece = Piece.new
    @gallery = Gallery.find(params[:gallery_id])
    @artist = Artist.find(params[:artist_id])
  end

  def create
    @piece = Piece.new(piece_params)
      if @piece.save
        @artist = current_artist
        @profile = Profile.find(@artist.profile.id)
        redirect_to artist_profile_path(@artist, @profile)
      else
       render :new
     end
  end

  def update
      @piece = Piece.find( params[:id] )
    if @piece.update( piece_params )
      @gallery = @piece.gallery
      @artist = @gallery.artist
        respond_to do |format|
          format.html {redirect_to artist_gallery_piece_path(@artist, @gallery, @piece)}
          format.json {render json: @piece}
        end
    else
      render :edit
    end

  end

  def destroy
    @pieces = Piece.all
    @piece = Piece.find(params[:id])
    @piece.destroy
    redirect_to @pieces
  end

private
  def piece_params
    params.require(:piece).permit(:gallery_id, :stars, :piece_name, :piece_description, :picture)
  end


end
