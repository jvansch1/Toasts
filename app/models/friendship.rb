class Friendship < ActiveRecord::Base
  validates :requester_id, :requested_id, presence: true
  validates_uniqueness_of :requester_id, scope: :requested_id

  belongs_to :user
end
