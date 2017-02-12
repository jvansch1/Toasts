

AuthForm
  SignUpContainer:
  - pass props forms(formType, action)
    - signup
    - signin

Home
  - Navbar **dont think this needs a container, will just be links**
    -will be displayed on every page  
    -link to global feedpage and top rated beers
    -searchbar
  - FriendFeed
    -display recent check-ins by friends
    -renders check-in components but only for checkins made by friends
  -userStats
    -displays checkins, unique check-ins, friends, badges


-Check-in Container
  -Check in
    -display user_image, username, beername, breweryname, rating, comment, image
