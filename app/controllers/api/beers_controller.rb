 class Api::BeersController < ApplicationController
  def index
    @beers = Beer.all.includes(:brewery)

  end

  def create
    @beer = Beer.new(beer_params)

    if @beer.save
      render 'api/beers/beer_show'
    else
      render json: @beer.errors, status: 422
    end
  end

  def show

    @beer = Beer.where(id: params[:id]).includes(brewery: [:checkins], checkins: [:user]).first
  end

  def update

  end

  def top
    top_beers = Beer.joins(:checkins).group("beers.id, breweries.id").order("COUNT(checkins.id) desc").limit(10)
    render 'api/beers/index'
  end

  def destroy

  end

  def search
    if params[:query].present?
     @beers = Beer.where("lower(name) ~ lower(?)", params[:query])
   else
     @beers = Beer.none
   end
  end

  private

  def beer_params
    params.require(:beer).permit(:name, :style, :brewery_id, :ABV, :IBU, :image, :query)
  end
end
