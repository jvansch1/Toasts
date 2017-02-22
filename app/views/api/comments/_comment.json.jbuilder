json.content comment.content
json.user_id comment.user_id
json.user comment.user
json.user_image_url asset_path(comment.user.image.url)
json.checkin_id comment.checkin_id
json.created_at time_ago_in_words(comment.created_at)
