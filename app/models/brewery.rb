class Brewery < ActiveRecord::Base
  validates :name, :city, :state, :country, presence: true
  has_many :beers
  has_attached_file :image, default_url: "default_beer_Image.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/


  has_many :checkins, through: :beers

  BREWERIES = Brewery.all
end
