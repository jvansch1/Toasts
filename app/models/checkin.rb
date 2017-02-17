class Checkin < ActiveRecord::Base
  validates :user_id, :beer_id, presence: true

  belongs_to :beer
  belongs_to :user
end
