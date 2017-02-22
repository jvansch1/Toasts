class Comment < ActiveRecord::Base
  validates :user_id, :checkin_id, :content, presence: true
  validates :content, length: { maximum: 140 }

  belongs_to :user
  belongs_to :checkin
end
