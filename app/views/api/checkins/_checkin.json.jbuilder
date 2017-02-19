json.user_id checkin.user_id
json.beer_id checkin.beer_id
json.id checkin.id
json.beer Beer.find(checkin.beer_id)
json.brewery checkin.beer.brewery
json.description checkin.description
json.rating checkin.rating
json.image_url asset_path(checkin.image.url);
json.created_at time_ago_in_words(checkin.created_at)
json.user do
  json.partial! 'api/users/user', user: checkin.user
end
