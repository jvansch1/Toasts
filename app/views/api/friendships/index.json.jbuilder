@friendships.each do |friendship|
  json.set! friendship.id do
    json.partial! 'friendship', friendship: friendship
  end
end
