class Message < ActiveRecord::Base
  belongs_to :conversation
  belongs_to :user

  validates :body, :conversation, :user, presence: true
end
