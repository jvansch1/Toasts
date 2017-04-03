class Api::FriendshipsController < ApplicationController

  def index
    @friendships = Friendship.all
  end

  def find
    debugger
    @friendship = Friendship.find_by(requester_id: params[:friendship][:requester_id], requested_id: params[:friendship][:requested_id])
    if @friendship
      render 'api/friendships/show'
    else
      render json: 'none found'
    end
  end

  def create
    @friendship = Friendship.new(friendship_params)
    if @friendship.save
      render 'api/friendships/show'
    else
      render json: @friendship.errors, status: 422
    end
  end

  def destroy

  end

  private

  def friendship_params
    params.require(:friendship).permit(:requested_id, :requester_id, :accepted)
  end

end
