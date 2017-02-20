@beers.each do |beer|
  json.set! beer.id do
    json.partial! 'beer_index', beer: beer
  end
end
