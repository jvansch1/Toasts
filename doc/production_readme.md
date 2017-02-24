[Toasts live](https://untapped-clone.herokuapp.com/)

##Beer Creation

Beers are stored in a database table called beers with columns id, style, ABV, IBU, and name. An API call is made whenever a beer show page is accessed that will retrieve all information for that beer. This beer object will be held in the state of the front end until a new beer is requested. A beer belongs_to a brewery and also has_many checkins.

On the front end, beer is rendered in the BeerShow component.

![beer](wireframes/BeerShow.png)


##Features to be implemented

###friends

I plan to implement friends with a join table on the back end with the columns requested_id, requester_id, accepted. The front end will have access to the if of the current users friends in order to determine wether or not another user can be requested or if certain actions are forbidden.
