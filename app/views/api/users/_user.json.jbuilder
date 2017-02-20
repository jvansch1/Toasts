# json.extract! user, :username, :email, :errors

json.username user.username
json.email user.email
json.errors user.errors
json.image_url asset_path(user.image.url)
json.id user.id
