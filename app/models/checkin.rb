class Checkin < ActiveRecord::Base
  validates :user_id, :beer_id, presence: true

  belongs_to :beer
  belongs_to :user
  has_many :likes
  has_many :checkins


  has_attached_file :image, default_url: "default_beer_Image.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
end
