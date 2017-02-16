# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Beer.destroy_all
Brewery.destroy_all

user = User.create(username: 'Guest', password: 'password', email: 'email@email.com')

an = Brewery.create!(name: 'Anhauser-Busch', city: 'St. Loius', state: 'MO', country: 'USA')
tr = Brewery.create!(name: 'Treehouse', city: 'Monson', state: 'MA', country: 'USA')

Beer.create!(name: 'Budweiser', brewery_id: an.id, style: "Light ale", ABV: 5.4, IBU: 67)
Beer.create!(name: 'Miller High Life', brewery_id: an.id, style: "Light ale", ABV: 6.7, IBU: 43)
Beer.create!(name: 'Julius', brewery_id: tr.id, style: "India pale ale", ABV: 4.1, IBU: 99)
