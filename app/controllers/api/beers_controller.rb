class Api::BeersController < ApplicationController
  def index
    @beers = Beer.all
  end

  def create
    @beer = Beer.new(beer_params)

    if @beer.save
      render 'api/beers/show'
    else
      render json: @beer.errors, status: 422
    end
  end

  def update

  end

  def destroy

  end

  private

  def beer_params
    params.require(:beer).permit(:name, :style, :brewery_id)
  end
end
