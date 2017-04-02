class Friendship < ActiveRecord::Base
  validates :requester_id, :requested_id, presence: true
end
