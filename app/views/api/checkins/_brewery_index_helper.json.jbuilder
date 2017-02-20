json.user do
  json.partial! 'api/users/user', user: checkin.user
end
json.checkins brewery.checkins, partial: 'api/checkins/brewery_show_helper', as: :checkin
