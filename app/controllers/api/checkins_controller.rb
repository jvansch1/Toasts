class Api::CheckinsController < ApplicationController
  def index

  end

  def show
    @checkin = Checkin.find(params[:id])
  end

  def create
    @checkin = Checkin.new(checkin_params)
    @checkin.user_id = current_user.id

    if @checkin.save
      render 'api/checkins/show'
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
    params.require(:checkin).permit(:beer_id,:rating, :description)
  end
end
