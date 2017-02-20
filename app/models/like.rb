class Like < ActiveRecord::Base
  validates :user_id, :checkin_id, presence: true

  belongs_to :user
  belongs_to :checkin

  validates :user_id, uniqueness: { scope: :checkin_id }
end
