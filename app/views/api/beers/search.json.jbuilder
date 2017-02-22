json.array!(@beers) do |beer|
  json.partial! 'search_helper', beer: beer
end
