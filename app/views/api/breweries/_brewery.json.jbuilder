# json.extract! brewery, :name, :city, :state, :country, :id
json.name brewery.name
json.city brewery.city
json.state brewery.state
json.country brewery.country
json.id brewery.id
json.checkins brewery.checkins, partial: 'api/checkins/brewery_show_helper', as: :checkin
json.image_url asset_path(brewery.image.url)
json.beers brewery.beers.length
json.unique_checkins brewery.unique_checkins.length
