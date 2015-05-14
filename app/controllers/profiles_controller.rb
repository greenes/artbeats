class ProfilesController < ApplicationController


  def index
    @profiles = Profile.all

    respond_to do |format|
      format.html { render :index }
      format.json { render json: @artists }
    end
  end

  def edit
    @artist = current_artist
    @profile = @artist.profile
    @galleries = @artist.galleries
  end

  def show
    @profile = Profile.find(params[:id])
    @artist = @profile.artist_id
    @galleries = Gallery.where(artist_id: @artist )
  end

  def new
    @artist = Artist.find(params[:artist_id])
    @profile = Profile.new
  end

  def create
    @profiles = Profile.all
    @artist = Artist.find(params[:artist_id])
    @profile = Profile.find_or_create_by(profile_params)
      if @profile.save
        redirect_to profiles_url
      else
       render :new
     end
  end

  def update
      @profile = Profile.find( params[:id] )
      @artist = Artist.find(@profile.artist_id)
    if @profile.update( profile_params )
      redirect_to artist_profile_url
    else
      render :edit
    end

  end

  def destroy
    @profiles = Profile.all
    @profile = Profile.find(params[:id])
    @profile.destroy
    redirect_to @profiles
  end

private
  def profile_params
    params.require(:profile).permit(:id, :artist_id, :name, :profile)
  end


end
