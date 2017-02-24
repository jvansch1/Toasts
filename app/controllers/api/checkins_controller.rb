class Api::CheckinsController < ApplicationController
  def index
    @checkins = Checkin.order("created_at DESC").limit(params[:limit]).offset(params[:offset])
  end

  def show
    @checkin = Checkin.where(id: params[:id]).includes(:likes).first
  end

  def create
    @checkin = Checkin.new(checkin_params)
    @checkin.user_id = current_user.id

    if @checkin.save
      @beer = @checkin.beer
      render '/api/beers/show'
    else
      render json: @checkin.errors, status: 422
    end
  end

  def destroy

  end

  def update

  end

  private

  def checkin_params
    params.require(:checkin).permit(:beer_id,:rating, :description, :image, :limit, :offset)
  end
end
