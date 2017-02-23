class Api::LikesController < ApplicationController

  def index
    @likes = Like.all
  end

  def create
    @like = Like.new(like_params)
    if @like.save
      @checkin = @like.checkin
      render '/api/checkins/show'
    else
      render json: @like.errors, status: 422
    end
  end

  def show
    @like = Like.find(params[:id])
  end

  def find
    if params[:user_id].present?
      Like.find_by(user_id: params[:user_id], checkin_id: params[:checkin_id])
    end
  end

  def destroy
    @like = Like.find_by(id: params[:id])
    @like.destroy!
    @checkin = @like.checkin
    render '/api/checkins/show'
  end

  private

  def like_params
    params.require(:like).permit(:user_id, :checkin_id)
  end
end
