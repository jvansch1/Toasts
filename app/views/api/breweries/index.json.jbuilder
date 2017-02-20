@breweries.each do |brewery|
  json.set! brewery.id do
    json.partial! 'brewery_index_helper', brewery: brewery
  end
end
