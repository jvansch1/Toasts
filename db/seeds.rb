# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Beer.destroy_all

Beer.create!(name: 'beer', brewery_id: 5, style: "Bitter", ABV: 5.4, IBU: 67)
Beer.create!(name: 'beer2', brewery_id: 52, style: "Bitter", ABV: 6.7, IBU: 43)
Beer.create!(name: 'beer3', brewery_id: 6, style: "Bitter", ABV: 4.1, IBU: 99)
