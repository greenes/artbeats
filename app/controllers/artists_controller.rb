class ArtistsController < ApplicationController

  def index
    @artists = Artist.all

    respond_to do |format|
      format.html { render :index }
      format.json { render json: @artists }
    end
  end

  def show
    @artist = Artist.find(params[:id])
    @galleries = @artist.galleries.all

  end

  def update
    @artist = Artist.find(params[:id])
    if @artist.update( artist_params )
      redirect_to @artist
    else
      render :edit
    end
  end

  def destroy
    @artists = Artist.all
    @artist = Artist.find(params[:id])
    @artist.destroy
    redirect_to @artists
  end

private
  def artist_params
    params.require(:artist).permit(:name, :bio, :prof_pic, :contact_info)
  end

end
