class Brewery < ActiveRecord::Base
  validates :name, :city, :state, :country, presence: true
  has_many :beers
  BREWERIES = Brewery.all
end
