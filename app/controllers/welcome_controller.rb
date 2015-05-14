class WelcomeController < ApplicationController

  def index
    @pieces = Piece.all
    @galleries = Gallery.all
  end


end
