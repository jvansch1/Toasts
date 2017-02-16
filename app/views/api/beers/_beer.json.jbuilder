# json.extract! beer, :name, :style, :brewery_id, :ABV, :IBU, :created_at

json.name beer.name
json.style beer.style
json.brewery_id beer.brewery_id
json.ABV beer.ABV
json.IBU beer.IBU
json.created_at beer.created_at
json.created_at beer.created_at
json.image_url asset_path(beer.image.url)
