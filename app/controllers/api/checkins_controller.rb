class CheckinsController < ApplicationController
  def index

  end

  def show

  end

  def create
    @checkin = Checkin.new(checkin_params)

    if @checkin.save
      render 'api/checkins/show'
    else
      render json: @checkin.errors, status: 422
  end

  def destroy

  end

  def update

  end

  private

  def checkin_params
    params.require(:checkin).permit(:rating, :description)
  end
end
