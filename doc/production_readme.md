[Toasts live](https://untapped-clone.herokuapp.com/)

##Beers

Beers are stored in a database table called beers with columns id, style, ABV, IBU, brewery_id and name. An API call is made whenever a beer show page is accessed that will retrieve all information for that beer. This beer object will be held in the state of the front end until a new beer is requested. A beer belongs_to a brewery and also has_many checkins.

On the front end, beer is rendered in the BeerShow component.

![beer](wireframes/BeerShow.png)


##Brewery

Breweries follow a pattern similar to beers. They exist in a brewery table with the columns name, city, state, and country. A brewery has a has_many association with beers. There is also a has_many_through association with checkins through beers.

On the front end, when a beer show page is accessed an API call will be made that will retrieve that brewery object. This object will persist in the state until a new beer is requested. A brewery will be rendered in the BreweryShow container.

![beer](wireframes/BreweryShow.png)




##Features to be implemented

###Friends

I plan to implement friends with a join table on the back end with the columns requested_id, requester_id, accepted. The front end will have access to the if of the current users friends in order to determine wether or not another user can be requested or if certain actions are forbidden.
