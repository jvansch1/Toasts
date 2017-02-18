
json.name beer.name
json.id beer.id
json.style beer.style
json.brewery_id beer.brewery_id
json.brewery beer.brewery, partial: 'api/breweries/brewery', as: :brewery
json.checkins beer.checkins, partial: 'api/checkins/checkin', as: :checkin
json.ABV beer.ABV
json.IBU beer.IBU
json.created_at time_ago_in_words(beer.created_at)
json.updated_at time_ago_in_words(beer.updated_at)
json.image_url asset_path(beer.image.url(:thumb))
