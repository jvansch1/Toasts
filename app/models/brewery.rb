class Brewery < ActiveRecord::Base
  validates :name, :city, :state, :country, presence: true
  has_many :beers
  has_attached_file :image, default_url: "default_beer_Image.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/


  has_many :checkins, through: :beers

  BREWERIES = Brewery.all

  def unique_checkins
    self.checkins.select(:user_id).distinct
  end

  def brewery_beers
    beers = self.beers
    beer_array = []
    beers.each do |beer|
      beer_array.push([beer, beer.image.url])
    end
    beer_array
  end
end
