
json.name beer.name
json.id beer.id
json.style beer.style
json.brewery_id beer.brewery_id
json.brewery beer.brewery, partial: 'api/breweries/brewery', as: :brewery
json.ABV beer.ABV
json.IBU beer.IBU
json.created_at beer.created_at
json.created_at beer.created_at
json.image_url asset_path(beer.image.url)
