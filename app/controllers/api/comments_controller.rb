class Api::CommentsController < ApplicationController
  def index
    debugger
    @index = Comment.order("created_at DESC")
  end

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      render 'api/comments/show'
    else
      render json: @comment.errors, status: 422
    end
  end

  def show
    @comment = Comment.find_by(id: params[:id])
  end

  def destroy

  end

  def update

  end



  private

  def comment_params
    params.require(:comment).permit(:user_id, :checkin_id, :content)
  end
end
