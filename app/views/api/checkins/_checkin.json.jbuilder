json.user_id checkin.user_id
json.beer_id checkin.beer_id
json.description checkin.description
json.rating checkin.rating
json.created_at time_ago_in_words(checkin.created_at)
json.user do
  json.partial! 'api/users/user', user: checkin.user
end