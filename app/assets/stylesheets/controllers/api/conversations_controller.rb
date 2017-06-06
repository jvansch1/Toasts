class Api::ConversationsController < ApplicationController
  def index
    @conversations = Conversation.all
  end

  def create
    @conversation = Conversation.new(conversation)

    if @conversation.save
      render 'api/conversations/show'
    else
      render json: @conversation.errors, status: 422
    end
  end

  private

  def conversation_params
    params.require(:conversation).permit(:body)
  end
end
