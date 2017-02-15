##Navbar Will be rendered in all components

##AuthForm
    SignUpContainer:
    - pass props forms(formType, action)
      - signup
      - signin

##Home(Phase 1)
    **All this will be rendered inside Home Component**
    **Initially will list an index of all beers**

      -will be displayed on every page  
      -link to global feedpage and top rated beers
      -searchbar
    - BeerIndex
      -takes in beers as props from state
      -will render each as a beerIndexItem
    -BeerIndexItem
      -renders an LI of that beers info

##Home(after profile is made)

      -will be displayed on every page  
      -link to global feedpage and top rated beers
      -searchbar
    -FriendFeed/Userfeed
      -will take is as props users/friends and render an unordered list
      of FriendFeedItems
    -FriendFeedItem
      -renders information on check-in

##BeerShow
    -Container for all information regarding beer

    -BeerInfoContainer
      -basic information about beer
        -label, name, brewery, ABV, IBU, Ratings, checkins

    -Pictures
      -container which is an ul of all pictures taken of beer

    -CheckInIndex
      -lists all check-ins for beer

      -CheckInIndexItem
        -contains all information for single check-in

    -Drinkers
      -ul of all people who have checked into this beer

    TopBeers
      -Lists top beers by brewery


    -Check-in Container
      -Check in
        -display user_image, username, beername, breweryname, rating, comment, image

##BreweryShow
    **Basically the same as Beer Show. BeerInfo Container will be replaced with BreweryInfoContainer**

##CheckInForm
    **pop-up box which will display over beer show page**

    -asks user for rating, description, optional image

##CheckInShow
    -show user who checked-in
    -check-in info
      -rating, description, etc,
    -if user is a friend, can comment or toast

##Feed
    -Global Feed of all users

    -CheckInIndex
      -will render as <ul> recent check-ins across all users

      -CheckInIndexItem
        -will render each check-in as a li

    -TopBeer
      -<ul> of top beers

##userShow

    -UserInfoContainer
      -renders user picture, check-in count, unique check ins

    -UserCheckInPictures
      -<ul> list of all recent pictures taken by user

    -CheckInIndex
      <ul> of all check-ins by user

      -CheckInIndexItem
        -renders each check-in as a list item

    -TopBeers
      -<ul> of top beers for user
