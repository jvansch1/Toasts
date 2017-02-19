# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# require 'Faker'
# I18n.reload!


Beer.destroy_all
Brewery.destroy_all
User.destroy_all

user = User.create(username: 'Guest', password: 'password')

20.times do
  User.create!(username: Faker::Internet.user_name, password: 'password')
end


an = Brewery.create!(name: 'Anheuser-Busch', city: 'St. Loius', state: 'MO', country: 'USA')
tr = Brewery.create!(name: 'Treehouse', city: 'Monson', state: 'MA', country: 'USA')
miller = Brewery.create(name: "Miller Brewing Company", city: "Milwaukee", state: "WI", country: 'USA')
goose_island = Brewery.create!(name: "Goose Island", city: "Chicago", state: "Illinois", country: "USA")
cigar_city = Brewery.create!(name: "Cigar City Brewing", city: 'Tampa', state: 'FL', country: 'USA')
bottle_logic = Brewery.create!(name: "Bottle Logic Brewing", city: "Anaheim", state: "CA", country: "USA")
founders = Brewery.create!(name: "Founders Brewing Co.", city: "Grand Rapids", state: "MI", country: "USA")

Beer.create!(name: 'Budweiser', brewery_id: an.id, style: "Light ale", ABV: 5.0, IBU: 12, image: 'https://s3.amazonaws.com/untappd-dev/beers/budweiser.jpeg')
Beer.create!(name: 'Bud Light', brewery_id: an.id, style: "Light ale", ABV: 4.2, IBU: 27, image: 'https://s3.amazonaws.com/untappd-dev/beers/budlight.jpeg')
Beer.create!(name: 'Miller High Life', brewery_id: miller.id, style: "Light ale", ABV: 4.6, IBU: 0, image: 'https://s3.amazonaws.com/untappd-dev/beers/miller_high_life.jpeg')
Beer.create!(name: 'Julius', brewery_id: tr.id, style: "India pale ale", ABV: 6.8, IBU: 72, image: 'https://s3.amazonaws.com/untappd-dev/beers/julius.jpeg')
Beer.create!(name: 'King JJJuliusss', brewery_id: tr.id, style: "India pale ale", ABV: 8.4, IBU: 0, image: 'https://s3.amazonaws.com/untappd-dev/beers/king_jjjuliusss.jpeg')
Beer.create!(name: 'King Julius', brewery_id: tr.id, style: "India pale ale", ABV: 8.2, IBU: 85, image: 'https://s3.amazonaws.com/untappd-dev/beers/king_julius.jpeg')
Beer.create!(name: 'Very Green', brewery_id: tr.id, style: "India pale ale", ABV: 8.2, IBU: 0, image: 'https://s3.amazonaws.com/untappd-dev/beers/+very_green.jpeg')
Beer.create!(name: 'Very Hazy', brewery_id: tr.id, style: "India pale ale", ABV: 8.6, IBU: 80, image: 'https://s3.amazonaws.com/untappd-dev/beers/+very_hazy.jpeg')
Beer.create!(name: 'Bright', brewery_id: tr.id, style: "India pale ale", ABV: 7.8, IBU: 75, image: 'https://s3.amazonaws.com/untappd-dev/beers/bright.jpeg')
Beer.create!(name: 'Good Morning', brewery_id: tr.id, style: "Stout", ABV: 8.4, IBU: 65, image: 'https://s3.amazonaws.com/untappd-dev/beers/good_morning.jpeg')
Beer.create!(name: 'Bourbon County Rare 2010', brewery_id: goose_island.id, style: "Stout", ABV: 13, IBU: 60, image: 'https://s3.amazonaws.com/untappd-dev/beers/rare_2010.jpeg')
Beer.create!(name: 'Bourbon County Rare 2015', brewery_id: goose_island.id, style: "Stout", ABV: 14.8, IBU: 60, image: 'https://s3.amazonaws.com/untappd-dev/beers/rare_2015.jpeg')
Beer.create!(name: 'Proprietors Bourbon County 2014', brewery_id: goose_island.id, style: "Stout", ABV: 13.2, IBU: 0, image: 'https://s3.amazonaws.com/untappd-dev/beers/prop.jpeg')
Beer.create!(name: 'Proprietors Bourbon County 2013', brewery_id: goose_island.id, style: "Stout", ABV: 14.1, IBU: 0, image: 'https://s3.amazonaws.com/untappd-dev/beers/prop.jpeg')
Beer.create!(name: 'Bourbon County Vanilla Rye 2014', brewery_id: goose_island.id, style: "Stout", ABV: 13.6, IBU: 35, image: 'https://s3.amazonaws.com/untappd-dev/beers/vailla_rye.jpeg')
Beer.create!(name: 'Double Barrel Hunahpus', brewery_id: cigar_city.id, style: "Stout", ABV: 11.5, IBU: 0, image: 'https://s3.amazonaws.com/untappd-dev/beers/dbh.jpeg')
Beer.create!(name: 'Fundamental Observation', brewery_id: bottle_logic.id, style: "Stout", ABV: 14.1, IBU: 0, image: 'https://s3.amazonaws.com/untappd-dev/beers/fundamental_observation.jpeg')
Beer.create!(name: 'Canadian Breakfast Stout', brewery_id: founders.id, style: "Stout", ABV: 10.6, IBU: 0, image: 'https://s3.amazonaws.com/untappd-dev/beers/cbs.jpeg')

users = User.all
beers = Beer.all
ratings = [0,0.25,0.50,0.75,1,1.25,1.50,1.75,2, 2.25,2.50, 2.75, 3, 3.25, 3.50, 3.75, 4, 4.25, 4.5, 4.75, 5]

100.times do
  Checkin.create(user_id: users.sample.id, beer_id: beers.sample.id, rating: ratings.sample, description: Faker::Hipster.sentence)
end
