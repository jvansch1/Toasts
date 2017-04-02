class Friendship < ActiveRecord::Base
  validates :requester_id, :requested_id, :accepted, presence: true
end
