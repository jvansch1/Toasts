# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

require 'faker'
I18n.reload!


Beer.destroy_all
Brewery.destroy_all
User.destroy_all
Checkin.destroy_all
Like.destroy_all


user = User.create(username: 'Guest', password: 'password')
user_images = [
  'https://s3.amazonaws.com/untappd-dev/users/guy1.jpeg',
  'https://s3.amazonaws.com/untappd-dev/users/guy10.jpeg',
  'https://s3.amazonaws.com/untappd-dev/users/guy11.jpeg',
  'https://s3.amazonaws.com/untappd-dev/users/guy12.jpeg',
  'https://s3.amazonaws.com/untappd-dev/users/guy13.jpeg',
  'https://s3.amazonaws.com/untappd-dev/users/guy14.jpeg',
  'https://s3.amazonaws.com/untappd-dev/users/guy15.jpeg',
  'https://s3.amazonaws.com/untappd-dev/users/guy16.jpeg',
  'https://s3.amazonaws.com/untappd-dev/users/guy17.jpeg',
  'https://s3.amazonaws.com/untappd-dev/users/guy18.jpeg',
  'https://s3.amazonaws.com/untappd-dev/users/guy19.jpeg',
  'https://s3.amazonaws.com/untappd-dev/users/guy2.jpeg',
  'https://s3.amazonaws.com/untappd-dev/users/guy3.jpeg',
  'https://s3.amazonaws.com/untappd-dev/users/guy4.jpeg',
  'https://s3.amazonaws.com/untappd-dev/users/guy5.jpeg',
  'https://s3.amazonaws.com/untappd-dev/users/guy6.jpeg',
  'https://s3.amazonaws.com/untappd-dev/users/guy7.jpeg',
  'https://s3.amazonaws.com/untappd-dev/users/guy8.jpeg',
  'https://s3.amazonaws.com/untappd-dev/users/guy9.jpeg',
  'https://s3.amazonaws.com/untappd-dev/users/woman1.jpeg'
]


5.times do |i|
  User.create!(username: Faker::Internet.user_name, password: 'password', image: user_images[i])
end


an = Brewery.create!(name: 'Anheuser-Busch', city: 'St. Loius', state: 'MO', country: 'USA', image: 'https://s3.amazonaws.com/untappd-dev/breweries/anheuser.jpeg')
tr = Brewery.create!(name: 'Treehouse', city: 'Monson', state: 'MA', country: 'USA', image: 'https://s3.amazonaws.com/untappd-dev/breweries/treehouse.jpeg')
# miller = Brewery.create(name: "Miller Brewing Company", city: "Milwaukee", state: "WI", country: 'USA', image: 'https://s3.amazonaws.com/untappd-dev/breweries/brewery-millerBrewing.jpg')
goose_island = Brewery.create!(name: "Goose Island", city: "Chicago", state: "Illinois", country: "USA", image: 'https://s3.amazonaws.com/untappd-dev/breweries/goose_island.jpeg')
# cigar_city = Brewery.create!(name: "Cigar City Brewing", city: 'Tampa', state: 'FL', country: 'USA', image: 'https://s3.amazonaws.com/untappd-dev/breweries/brewery-379_e6ae7.jpeg')
# bottle_logic = Brewery.create!(name: "Bottle Logic Brewing", city: "Anaheim", state: "CA", country: "USA", image: 'https://s3.amazonaws.com/untappd-dev/breweries/bottle_logic.jpeg')
# founders = Brewery.create!(name: "Founders Brewing Co.", city: "Grand Rapids", state: "MI", country: "USA", image: 'https://s3.amazonaws.com/untappd-dev/breweries/brewery-foundersbrewingcompany_549.jpeg')
#
Beer.create!(name: 'Budweiser', brewery_id: an.id, style: "Light ale", ABV: 5.0, IBU: 12, image: 'https://s3.amazonaws.com/untappd-dev/beers/budweiser.jpeg')
# Beer.create!(name: 'Bud Light', brewery_id: an.id, style: "Light ale", ABV: 4.2, IBU: 27, image: 'https://s3.amazonaws.com/untappd-dev/beers/budlight.jpeg')
# Beer.create!(name: 'Miller High Life', brewery_id: miller.id, style: "Light ale", ABV: 4.6, IBU: 0, image: 'https://s3.amazonaws.com/untappd-dev/beers/miller_high_life.jpeg')
# Beer.create!(name: 'Julius', brewery_id: tr.id, style: "India pale ale", ABV: 6.8, IBU: 72, image: 'https://s3.amazonaws.com/untappd-dev/beers/julius.jpeg')
# Beer.create!(name: 'King JJJuliusss', brewery_id: tr.id, style: "India pale ale", ABV: 8.4, IBU: 0, image: 'https://s3.amazonaws.com/untappd-dev/beers/king_jjjuliusss.jpeg')
kj = Beer.create!(name: 'King Julius', brewery_id: tr.id, style: "India pale ale", ABV: 8.2, IBU: 85, image: 'https://s3.amazonaws.com/untappd-dev/beers/king_julius.jpeg')
green = Beer.create!(name: 'Very Green', brewery_id: tr.id, style: "India pale ale", ABV: 8.2, IBU: 0, image: 'https://s3.amazonaws.com/untappd-dev/beers/+very_green.jpeg')
# Beer.create!(name: 'Very Hazy', brewery_id: tr.id, style: "India pale ale", ABV: 8.6, IBU: 80, image: 'https://s3.amazonaws.com/untappd-dev/beers/+very_hazy.jpeg')
# Beer.create!(name: 'Bright', brewery_id: tr.id, style: "India pale ale", ABV: 7.8, IBU: 75, image: 'https://s3.amazonaws.com/untappd-dev/beers/bright.jpeg')
# Beer.create!(name: 'Good Morning', brewery_id: tr.id, style: "Stout", ABV: 8.4, IBU: 65, image: 'https://s3.amazonaws.com/untappd-dev/beers/good_morning.jpeg')
# Beer.create!(name: 'Bourbon County Rare 2010', brewery_id: goose_island.id, style: "Stout", ABV: 13, IBU: 60, image: 'https://s3.amazonaws.com/untappd-dev/beers/rare_2010.jpeg')
rare_2015 = Beer.create!(name: 'Bourbon County Rare 2015', brewery_id: goose_island.id, style: "Stout", ABV: 14.8, IBU: 60, image: 'https://s3.amazonaws.com/untappd-dev/beers/rare_2015.jpeg')
# Beer.create!(name: 'Proprietors Bourbon County 2014', brewery_id: goose_island.id, style: "Stout", ABV: 13.2, IBU: 0, image: 'https://s3.amazonaws.com/untappd-dev/beers/prop.jpeg')
# Beer.create!(name: 'Proprietors Bourbon County 2013', brewery_id: goose_island.id, style: "Stout", ABV: 14.1, IBU: 0, image: 'https://s3.amazonaws.com/untappd-dev/beers/prop.jpeg')
# Beer.create!(name: 'Bourbon County Vanilla Rye 2014', brewery_id: goose_island.id, style: "Stout", ABV: 13.6, IBU: 35, image: 'https://s3.amazonaws.com/untappd-dev/beers/vailla_rye.jpeg')
# Beer.create!(name: 'Double Barrel Hunahpus', brewery_id: cigar_city.id, style: "Stout", ABV: 11.5, IBU: 0, image: 'https://s3.amazonaws.com/untappd-dev/beers/dbh.jpeg')
# Beer.create!(name: 'Fundamental Observation', brewery_id: bottle_logic.id, style: "Stout", ABV: 14.1, IBU: 0, image: 'https://s3.amazonaws.com/untappd-dev/beers/fundamental_observation.jpeg')
# Beer.create!(name: 'Canadian Breakfast Stout', brewery_id: founders.id, style: "Stout", ABV: 10.6, IBU: 0, image: 'https://s3.amazonaws.com/untappd-dev/beers/cbs.jpeg')

users = User.all
beers = Beer.all
checkins = Checkin.all
ratings = [0,0.25,0.50,0.75,1,1.25,1.50,1.75,2, 2.25,2.50, 2.75, 3, 3.25, 3.50, 3.75, 4, 4.25, 4.5, 4.75, 5]

# 100.times do
#   Checkin.create(user_id: users.sample.id, beer_id: beers.sample.id, rating: ratings.sample, description: Faker::Hipster.sentence, image: user_images.sample)
# end

green_images = [
  'https://s3.amazonaws.com/untappd-dev/checkins/green/0ca43a50d562c2655cbf0c3ba8128558_640x640.jpg',
  'https://s3.amazonaws.com/untappd-dev/checkins/green/aec7f0d16038e5c83c0892bf49f40a46_640x640.jpg',
  'https://s3.amazonaws.com/untappd-dev/checkins/green/f754cc3b3fb2e6e28385a882331901c3_640x640.jpg',
  'https://s3.amazonaws.com/untappd-dev/checkins/green/f890019be5a7ace38e685d990d01f151_640x640.jpg',
]

rare_2015_images = [
  'https://s3.amazonaws.com/untappd-dev/checkins/rare_2015/10a191d6c6cfaf06dc0b894c11a802ad_640x640.jpg',
  'https://s3.amazonaws.com/untappd-dev/checkins/rare_2015/10ecf13ff3530148b82ff57bee9475c5_640x640.jpg',
  'https://s3.amazonaws.com/untappd-dev/checkins/rare_2015/cfc8beddede978c2213a4816cef63c15_640x640.jpeg'
]

green_images.each_with_index do |url, index|
  Checkin.create(user_id: users.sample.id, beer_id: green.id, rating: ratings.sample, description: Faker::Hipster.sentence, image: green_images[index])
end

rare_2015_images.each_with_index do |url, index|
  Checkin.create(user_id: users.sample.id, beer_id: rare_2015.id, rating: ratings.sample, description: Faker::Hipster.sentence, image: rare_2015_images[index])
end
#
# 100.times do
#   Like.create(user_id: users.sample.id, checkin_id: checkins.sample.id)
# end
