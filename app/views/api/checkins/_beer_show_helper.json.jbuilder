
json.user_id checkin.user_id
json.beer_id checkin.beer_id
json.user_name checkin.user.username
json.likes checkin.likes
# json.liked_by_current_user
json.id checkin.id
json.beer checkin.beer
json.beer_image_url asset_path(checkin.beer.image.url(:thumb))
# json.brewery checkin.beer.brewery
json.description checkin.description
json.rating checkin.rating
json.image_url asset_path(checkin.image.url);
json.created_at time_ago_in_words(checkin.created_at)
json.top_beers Beer.top_beers
# json.user do
#   json.partial! 'api/users/user', user: checkin.user
# end
