# json.extract! brewery, :name, :city, :state, :country, :id
json.name brewery.name
json.city brewery.city
json.state brewery.state
json.country brewery.country
json.id brewery.id
json.checkins brewery.checkins, partial: 'api/checkins/checkin', as: :checkin
json.image_url asset_path(brewery.image.url)
