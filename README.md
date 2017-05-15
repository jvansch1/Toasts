# Toasts

Toasts is a social media platform for craft-beer enthusiasts. It allows users to checkin to beers that thy are drinking, provide a rating and short review, and track the activity of other users. It is built using Ruby on Rails, Jbuilder, and a PostgreSQL database on the backend. The Front is handled by React.js and Redux(Flux).

[Toasts live](http://www.toasts.top/)

## Technologies used

* Ruby
* Rails
* Javascript
* React
* Redux
* PostgreSQL
* Amazon Web Services
* Gems/supplemental
  * paperclip
  * Bcrypt
  * figaro
  * jbuilder

## Features

* Session authentication on backend
* Creation of beers and breweries.
* Checkin to beers
  * Provide rating and short review
* Like and comment on users checkins
* See all checkins associated with a particular beer / brewery as well as average score


To view the code behind Toasts in more detail, please visit the following folders:

[Models](https://github.com/jvansch1/full-stack-proposal/tree/master/app/models)

[Controllers](https://github.com/jvansch1/full-stack-proposal/tree/master/app/controllers)

[Components](https://github.com/jvansch1/full-stack-proposal/tree/master/frontend/components)

[Schema](https://github.com/jvansch1/full-stack-proposal/blob/master/db/schema.rb)

[ApiUtil](https://github.com/jvansch1/full-stack-proposal/tree/master/frontend/util)





## Major Components

### Beers

Beers are stored in a database table called beers with columns id, style, ABV, IBU, brewery_id and name. An API call is made whenever a beer show page is accessed that will retrieve all information for that beer. This beer object will be held in the state of the front end until a new beer is requested. A beer belongs_to a brewery and also has_many checkins.

The Beer model implements a top beers method. This method uses a custom ActiveRecord query which continually provides a list of the most popular beers that is rendered on the front end

```
def self.top_beers
  top_beers = Beer.joins(:checkins)
    .group("beers.id").limit(10)
    .order("COUNT (checkins.id) DESC")
    .count("checkins.id")
  beer_array = []
  top_beers.each do |k,v|
    beer = Beer.find(k)
    beer_array.push([beer, beer.image.url, beer.brewery])
  end
  beer_array
end
```

On the front end, beer is rendered in the BeerShow component.

Beer show will also load all checkins associated with that beer.

### Brewery

Breweries follow a pattern similar to beers. They exist in a brewery table with the columns name, city, state, and country. A brewery has a has_many association with beers. There is also a has_many_through association with checkins through beers.

On the front end, when a beer show page is accessed an API call will be made that will retrieve that brewery object. This object will persist in the state until a new beer is requested. A brewery will be rendered in the BreweryShow container.

Brewery show page will also load all checkins associated with that brewery.


### Checkins

A checkin is an event created by a user in which they can publicly post that they are drinking a certain beer, as well as give it rating and optional description. A checkin will be stored in the checkins table which will have the columns user_id, beer_id, rating, and description.

When an individual checkin is accessed, it will be rendered through the CheckinShow component. This checkin will be stored in state until a new checkin is accessed.

## Custom Pagination

I implemented using a custom pagination feature using ActiveRecord and data sent from the front end. In the checkinIndex component I am keeping track of a limit and offset which I can use to modify my active record query.

```
class CheckinIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      limit: 4,
      offset: 0
    }
  }
```

Upon hitting the next or previous button, this offset is adjusted and the database is queried for new checkins.


```
def index
  @checkins = Checkin.order("created_at DESC").limit(params[:limit]).offset(params[:offset])
end
```

```
export const fetchCheckins = (limit, offset) => {
  return $.ajax({
    type: 'GET',
    url: 'api/checkins',
    data: { limit, offset }
  })
}
```

Since not all checkins are being loaded at one time, this increases performance and enhances the user experience

## Site layout

Upon sign-in, the user will be directed to a home page which lists recent checkins for all users globally. When friends are implemented, this page will be replaced by activity limited to only friends.

![home](doc/screenshots/Home.png)

The user can also see more specific checkins by visiting a beer or brewery show page. These pages will contain checkins specific only that item. These can either be accessed by clicking a link found in a checkin, the list of top beers or the search feature.

![BeerShow](doc/screenshots/BeerShow.png)

Users can checkin to a beer by visiting the show page and clicking the checkin button. The user can provide a rating as well as a short description of the beer to let other users know what they think.

![CheckinForm](doc/screenshots/CheckinForm.png)

Users can visit a show page for each individual checkin to leave likes and comments.

![CheckinShow](doc/screenshots/CheckinShow.png)

## Features to be implemented

### Friends

I plan to implement friends with a join table on the back end with the columns requested_id, requester_id, accepted. The front end will have access to the id of each of the current users friends in order to determine wether or not another user can be requested or if certain actions are forbidden.
