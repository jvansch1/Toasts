class Api::BreweriesController < ApplicationController
  def index
    @breweries = Brewery.all.includes(:checkins)
  end

  def create
    @brewery = Brewery.new(brewery_params)

    if @brewery.save
      render 'api/breweries/show'
    else
      render json: @brewery.errors, status: 422
    end
  end

  def show
    @brewery = Brewery.find(params[:id]);
  end

  private

  def brewery_params
    params.require(:brewery).permit(:name, :city, :state, :country, :image)
  end
end
