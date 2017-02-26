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
Comment.destroy_all


user = User.create(username: 'Guest', password: 'password', image: 'https://s3.amazonaws.com/untappd-dev/users/download.jpeg')
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
miller = Brewery.create(name: "Miller Brewing Company", city: "Milwaukee", state: "WI", country: 'USA', image: 'https://s3.amazonaws.com/untappd-dev/breweries/brewery-millerBrewing.jpg')
goose_island = Brewery.create!(name: "Goose Island", city: "Chicago", state: "Illinois", country: "USA", image: 'https://s3.amazonaws.com/untappd-dev/breweries/goose_island.jpeg')
cigar_city = Brewery.create!(name: "Cigar City Brewing", city: 'Tampa', state: 'FL', country: 'USA', image: 'https://s3.amazonaws.com/untappd-dev/breweries/brewery-379_e6ae7.jpeg')
bottle_logic = Brewery.create!(name: "Bottle Logic Brewing", city: "Anaheim", state: "CA", country: "USA", image: 'https://s3.amazonaws.com/untappd-dev/breweries/bottle_logic.jpeg')
founders = Brewery.create!(name: "Founders Brewing Co.", city: "Grand Rapids", state: "MI", country: "USA", image: 'https://s3.amazonaws.com/untappd-dev/breweries/brewery-foundersbrewingcompany_549.jpeg')
#
bud = Beer.create!(name: 'Budweiser', brewery_id: an.id, style: "Light ale", ABV: 5.0, IBU: 12, image: 'https://s3.amazonaws.com/untappd-dev/beers/budweiser.jpeg')
bud_light = Beer.create!(name: 'Bud Light', brewery_id: an.id, style: "Light ale", ABV: 4.2, IBU: 27, image: 'https://s3.amazonaws.com/untappd-dev/beers/budlight.jpeg')
# Beer.create!(name: 'Miller High Life', brewery_id: miller.id, style: "Light ale", ABV: 4.6, IBU: 0, image: 'https://s3.amazonaws.com/untappd-dev/beers/miller_high_life.jpeg')
# Beer.create!(name: 'Julius', brewery_id: tr.id, style: "India pale ale", ABV: 6.8, IBU: 72, image: 'https://s3.amazonaws.com/untappd-dev/beers/julius.jpeg')
# Beer.create!(name: 'King JJJuliusss', brewery_id: tr.id, style: "India pale ale", ABV: 8.4, IBU: 0, image: 'https://s3.amazonaws.com/untappd-dev/beers/king_jjjuliusss.jpeg')
kj = Beer.create!(name: 'King Julius', brewery_id: tr.id, style: "India pale ale", ABV: 8.2, IBU: 85, image: 'https://s3.amazonaws.com/untappd-dev/beers/king_julius.jpeg')
green = Beer.create!(name: 'Very Green', brewery_id: tr.id, style: "India pale ale", ABV: 8.2, IBU: 0, image: 'https://s3.amazonaws.com/untappd-dev/beers/+very_green.jpeg')
vh = Beer.create!(name: 'Very Hazy', brewery_id: tr.id, style: "India pale ale", ABV: 8.6, IBU: 80, image: 'https://s3.amazonaws.com/untappd-dev/beers/+very_hazy.jpeg')
# Beer.create!(name: 'Bright', brewery_id: tr.id, style: "India pale ale", ABV: 7.8, IBU: 75, image: 'https://s3.amazonaws.com/untappd-dev/beers/bright.jpeg')
# Beer.create!(name: 'Good Morning', brewery_id: tr.id, style: "Stout", ABV: 8.4, IBU: 65, image: 'https://s3.amazonaws.com/untappd-dev/beers/good_morning.jpeg')
# Beer.create!(name: 'Bourbon County Rare 2010', brewery_id: goose_island.id, style: "Stout", ABV: 13, IBU: 60, image: 'https://s3.amazonaws.com/untappd-dev/beers/rare_2010.jpeg')
rare_2015 = Beer.create!(name: 'Bourbon County Rare 2015', brewery_id: goose_island.id, style: "Stout", ABV: 14.8, IBU: 60, image: 'https://s3.amazonaws.com/untappd-dev/beers/rare_2015.jpeg')
# Beer.create!(name: 'Proprietors Bourbon County 2014', brewery_id: goose_island.id, style: "Stout", ABV: 13.2, IBU: 0, image: 'https://s3.amazonaws.com/untappd-dev/beers/prop.jpeg')
# Beer.create!(name: 'Proprietors Bourbon County 2013', brewery_id: goose_island.id, style: "Stout", ABV: 14.1, IBU: 0, image: 'https://s3.amazonaws.com/untappd-dev/beers/prop.jpeg')
# Beer.create!(name: 'Bourbon County Vanilla Rye 2014', brewery_id: goose_island.id, style: "Stout", ABV: 13.6, IBU: 35, image: 'https://s3.amazonaws.com/untappd-dev/beers/vailla_rye.jpeg')
# Beer.create!(name: 'Double Barrel Hunahpus', brewery_id: cigar_city.id, style: "Stout", ABV: 11.5, IBU: 0, image: 'https://s3.amazonaws.com/untappd-dev/beers/dbh.jpeg')
# Beer.create!(name: 'Fundamental Observation', brewery_id: bottle_logic.id, style: "Stout", ABV: 14.1, IBU: 0, image: 'https://s3.amazonaws.com/untappd-dev/beers/fundamental_observation.jpeg')
cbs = Beer.create!(name: 'Canadian Breakfast Stout', brewery_id: founders.id, style: "Stout", ABV: 10.6, IBU: 0, image: 'https://s3.amazonaws.com/untappd-dev/beers/cbs.jpeg')

users = User.all
beers = Beer.all
checkins = Checkin.all
ratings = [0,0.25,0.50,0.75,1,1.25,1.50,1.75,2, 2.25,2.50, 2.75, 3, 3.25, 3.50, 3.75, 4, 4.25, 4.5, 4.75, 5]

# 100.times do
#   Checkin.create(user_id: users.sample.id, beer_id: beers.sample.id, rating: ratings.sample, description: Faker::Hipster.sentence, image: user_images.sample)
# end
budlight_images = [
  'https://s3.amazonaws.com/untappd-dev/checkins/bud_light/3f71fac0df9c77897e4490ac95fb2a39_640x640.jpg',
  'https://s3.amazonaws.com/untappd-dev/checkins/bud_light/701cb709ec6587f93583b8f253122dfd_640x640.jpeg'
]

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

king_julius_images = [
  'https://s3.amazonaws.com/untappd-dev/checkins/king_julius/42530b95d347624a089612133d8c9a46_640x640.jpg',
  'https://s3.amazonaws.com/untappd-dev/checkins/king_julius/42530b95d347624a089612133d8c9a46_640x640.jpg'
]


budweiser_images = [
  'https://s3.amazonaws.com/untappd-dev/checkins/budwieser/0caef4eb563732735b0777b5fd0b8411_640x640.jpeg',
  'https://s3.amazonaws.com/untappd-dev/checkins/budwieser/2fca081006fefcef14761cc032600e75_640x640.jpg'
]

cbs_images = [
  'https://s3.amazonaws.com/untappd-dev/checkins/cbs/002ba57afffb86686133029d2361f81e_640x640.jpg',
  'https://s3.amazonaws.com/untappd-dev/checkins/cbs/3fb3d2fad4633dadcd2a1d452b27b11a_640x640.jpg'
]

very_hazy_images = [
  'https://s3.amazonaws.com/untappd-dev/checkins/very_hazy/418f1eda1258f1cc5a7ef96c54f3fd1b_640x640.jpg',
  'https://s3.amazonaws.com/untappd-dev/checkins/very_hazy/bf962e1e850f052bf2984f7a9fc6aeee_640x640.jpg'
]


  Checkin.create(user_id: users.sample.id, beer_id: green.id, rating: 4.5, description: "Delicious! Great tropical fruit notes", image: green_images[0])
  Checkin.create(user_id: users.sample.id, beer_id: green.id, rating: 5, description: "Amazing", image: green_images[1])
  Checkin.create(user_id: users.sample.id, beer_id: green.id, rating: 4.5, description: "Really good!", image: green_images[2])
  Checkin.create(user_id: users.sample.id, beer_id: green.id, rating: 4, description: "Great", image: green_images[3])


  Checkin.create(user_id: users.sample.id, beer_id: rare_2015.id, rating: 5, description: "One of my favorites", image: rare_2015_images[0])
  Checkin.create(user_id: users.sample.id, beer_id: rare_2015.id, rating: 5, description: "Nothing else like it. If you can get your hands on it you need to try it!", image: rare_2015_images[1])
  Checkin.create(user_id: users.sample.id, beer_id: rare_2015.id, rating: 5, description: "Love it", image: rare_2015_images[2])



  Checkin.create(user_id: users.sample.id, beer_id: kj.id, rating: 5, description: "Treehouse has done it again. Delicious", image: king_julius_images[0])
  Checkin.create(user_id: users.sample.id, beer_id: kj.id, rating: 5, description: "Complex fruit flavors tha you cannot get anywhere else", image: king_julius_images[1])



  Checkin.create(user_id: users.sample.id, beer_id: bud.id, rating: 3.5, description: "Great for a summer BBQ", image: budweiser_images[0])
  Checkin.create(user_id: users.sample.id, beer_id: bud.id, rating: 3.5, description: "The King of Beers. Nothing else needs to be said", image: budweiser_images[1])



  Checkin.create(user_id: users.sample.id, beer_id: bud_light.id, rating: 2, description: "Doesnt taste as good as it did back in college", image: budlight_images[0])
  Checkin.create(user_id: users.sample.id, beer_id: bud_light.id, rating: 3, description: "Decent for the price", image: budlight_images[1])


  Checkin.create(user_id: users.sample.id, beer_id: cbs.id, rating: 4.5, description: "One of the best stouts I've had", image: cbs_images[0])
  Checkin.create(user_id: users.sample.id, beer_id: cbs.id, rating: 5, description: "Phenomenal!", image: cbs_images[1])


  Checkin.create(user_id: users.sample.id, beer_id: vh.id, rating: 5, description: "Explosion of flavor! Fantastic", image: very_hazy_images[0])
  Checkin.create(user_id: users.sample.id, beer_id: vh.id, rating: 5, description: "Complexities...so good", image: very_hazy_images[1])

#
100.times do
  Like.create(user_id: users.sample.id, checkin_id: checkins.sample.id)
end

comment_content = [
  'One of my favorites!',
  'I love this beer!',
  "So good!",
  "Not a huge fan of this one.",
  "Its ok but I like #{Beer.all.sample.name} more",
  "If you like this you should try some of #{Brewery.all.sample.name}'s beers",
  "I agree!",
  "I disagree but I respect your opinion",
  "You really know your beer!",
  "One of the best beers I've had",
  "Phenomenal!",
  "Im blown away!",
  "I dont know why anyone would like this beer.",
  "This one is gross!",
  "Not great but not terrible",
  "Nothing to write home about",
  "Great taste, we should grab a beer sometime!",
  "Its so-so",
  "Fantastic",
  "Reminds me why I love beer. Incredible!"
]


50.times do
  Comment.create(user_id: users.sample.id, checkin_id: checkins.sample.id, content: comment_content.sample)
end
