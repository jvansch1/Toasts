class Brewery < ActiveRecord::Base
  validates :name, :city, :state, :country, presence: true
end
