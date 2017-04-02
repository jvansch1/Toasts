class Api::FriendshipsController < ApplicationController

  def index
    @friendships = Friendship.all
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
