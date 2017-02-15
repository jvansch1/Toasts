Heroku: https://untapped-clone.herokuapp.com/

Trello: https://trello.com/b/esj73wnM/untappd


##Minimum Viable Product

UNTAPPD is a web application built using Ruby on Rails for the backend and React/Redux for client-side rendering. By the end of week 9, this app will include at minimum the following criteria.

    1.Hosted on Heroku
    2.New Account creation/login
    3.Ability to create new beer and brewery data
    4.Check-in to beer to show others users what you are drinking
    5.Ability to visit your own profile page, see your stats and friend activity
    6.Toast other users check-ins to show that you approve of their taste

  * [View Wireframes][wireframes]
  * [React Components][components]
  * [API endpoints][api-endpoints]
  * [DB schema][schema]
  * [Sample State][sample-state]

  [wireframes]: wireframes
  [components]: component-hierarchy.md
  [sample-state]: sample-state.md
  [api-endpoints]: api-endpoints.md
  [schema]: schema.md



##Implementation timeline:

###Phase 1: 2 days
  -Backend user and Session setup/Auth

  -front end Auth

####Objective: Allow users to signup, sign-in, sign-out

###Phase 2: 1 day
  -Basic beer and brewery CRUD

  -show page for beer and brewery showing their activity

####Objective: user should be able to create new beer and breweries

###Phase 3: 2 days
  -Check-ins

  -allow user to check-in to beer

####Objective: User should be able to create a check-in

###Phase 4: 2 days
  -user show page. Show users check-ins, top beers, top breweries

####Objective: user show page should show all relevant user stats and activity

###Phase 5: 1 day
  -users can search for Beer or Brewery and be linked to show page

####Objective: user should be able to use searchbar in order to find what they are looking for

###Phase 6: Toasts, 1 day **need to write**
  -allow users to like other users check-ins

####Objective: User can toast another users check-in


##Implementation Details

    Phase 1: Backend setup and front end Auth:
      -Backend:
        -user.rb model && migration
          -create user migration with following fields
            -username: string
            -password_digest: string **Using BCrypt**
            -session_token: string **Using SecureRandom**
            -timestamps

          -create model, validations, logic
            -validates presence of password_digest, username, email, session_token
            -validates minimum length of password, allow nil=true
            -method to generate session_token using Secure Random
            -method to ensure session_token
            -method to find user from the database by their credentials(username, password)
            -password= method, sets @password and overwrites default password= and instead uses BCrypt to create password digest

        -jbuilder files
          -index.json.jbuilder
            -shows JSON representation of all users. Gets data from controller index method
          -show.json.jbuilder
            -shows data of one user. Gets data form controller show action
          -_user partial_ Use in both index and show to render user info

        -users controller
          **only need post,create,index,show. New and Edit form will be on front end**

          -private user-params method to enforce strong params
          -post method: create new user by user-params  
            -if saved, render api/users/show jbuilder
            -else render errors, status 422
          -destroy method
            -find user by id from params
            -if destroyed, render index jbuilder
            -else, render show

        -session controller
          **only need post and create methods**

          -POST: search for username and password given
            -if found, use login method defined in application controller(resets the current session's session token to user session_token)
            -else, render error that credentials are not valid
          -DELETE
            -logs out user by setting session's session_token = nil


        -application controller
          -current_user method, checks if there us a @current_user and if not will search by current session_token to find the user
          -login method, sets current session token equal to user session_token
          logout method, sets current session token to nil
          -logged_in?, !!current_user

      -Frontend:
        -Auth Form
          **This is a form that will be used for both signing up and logging in**
          **will be rendered by either one and passed in props to tell which is is**
          -will have internal state to keep track of username and password
            -onChange event handlers on both inputs that will update state everytime a character is added or deleted
          -signup will be passed in signup action creator and formType="signup"
          -signin will be passed in signin action creator and formType="signin"
          -both forms will be passed in errors from session slice of state

        -Session Reducer
          -two actions: receive_current_user, errors
          -to login, merge user attached on actions to state,
          to logout, pass in current_user as null

        -Router
          -homepage "/" will be friendFeed page which shows current_user information as well as their friends information
          -have on enter hooks to redirect to "/signup" or "/signin" if not logged in



    Phase 2: Beer and Breweries

      **Create beers util file to createBeer, removeBeer, updateBeer**
      **create action constants and thunks that will handle dispatching these to store**


        Backend:
          -Beer Migration && model
            -include name, style, brewery_id
            -validates presence of all
            -belongs_to: brewery
            -has_many: check-ins **has not yet been implemented**
          -Brewery Migration and model
            -include name, city, string, country
            -has_many: beers, checkins
          -Beer Controller
            -POST
              -create new beer with beer params
              -render beer show page if successful
            -DELETE
              -delete beer **this is probably something that only an admin should be able to do, but it is still good to have**
                -if successful reroute to index
                -else, display errors
            -PATCH
              -update beers information
                -if successful, render BeerShow component
                -else, render errors

            Brewery Controller
              **Very Similar to Beer controller

        FrontEnd:

          **BeerFormContainer component, which will handle creating and editing a beers information**
            -newBeerForm: gets 'NewBeer' as props from container
            -editBeerForm: gets 'EditBeer' as props from container, will have field pre-populated

          **BreweryFormContainer component, which will handle creating and editing a brewery's information**
            -newComponentForm: gets 'NewComponent' as props from container
            -editComponentForm: gets 'EditComponent' as props from container, will have field pre-populated


      Phase 3: Check-ins

        **User posts that they are drinking a beer along with a small review and rating. Other people can like/comment**

        -BackEnd:
          -Check-in migration and model
            -create migration for check-in:
              -user_id: integer
              -beer_id: integer
              -image_url: string
              -description: string
              rating: integer **ratings on UNTAPPD are in intervals of 0.25. I was thinking of having the range of integers go from 1 - 20 which can be converted to each interval on this scale**

            -model:
              -validates: user_id, beer_id, rating
              -description, image_url, are optional
              -belongs_to :user
              -belongs_to :beer

            -check-in Controller
              -POST
                -will create check-in if validations are met
                -strong params
                -render checkInShow Component
                -render newCheckInForm if unsuccessful

              -DELETE
                -will delete the check in of the id passed in
                -should validate if the id passed in matches one of the check-ins made by the user, if not they should not be able to delete
                -hide link to delete if check-in not made by current user

            -comments migration and model
              -create migration for comments
                -user_id: integer
                -check-in: id
                -content: string, length: maximum 140
                -timestamps

              -comment model
                -validates user, check-in, content
                -belongs_to: user
                -belongs_to: check-in

            -comments controller:
                -POST
                  -on successful creation of comment, will redirect to showCheckIn
                -DELETE
                  -can only delete if you are the user that made comment
                  -redirect to showCheckIn if successful


        -FrontEnd
          **CheckInFrom will be used to make a check in. There is no option to edit a check-in on UNTAPPD, so it does not seem necessary to make a container which will determine the form type**

          -newCheckInForm:
            -import createCheckIN action in props
            -will keep an internal state which will update onChange:
              -rating, description
            -option to add image_url
            -on submit of form will call createCheckIn, which will send an POST request to create a check-in
            -when completed will redirect to check-in show page

          -showCheckInContainer
            -mapStateToProps:
              -will fetch from the state the details about the requested check-in
            -mapDispatchToProps:
              -pass in fetchCheckIn action
            -connect to showCheckIn component

          -showCheckIn
            -show beername, username, rating, description, date of check-in
            -if friends with user, will have the ability to toast or comment on check-in

          -Comments
            -will iterate through an array of comments that belong to a check-in and pass each to commentListItem

          -commentListItem
            -will turn each comment into an <li>

      Phase 4: Profile
          **This phase will be mostly front-end. It deals with creating a profile page for each user so that you can see activity only relating to them**

          **Make a new action which will fetch user beers**

          -FrontEnd:
            -have on enter hook on "/" route. If the user is logged in it will direct to profile. This page will current users stats as well as friend feed.


      Phase 5: Search
        **Not much required on back-end. This will be mostly a front end feature**

        -have an onChange event handler that will search beer and breweries slices of state and return items whos name matches the string enetered
        -each result will be a link to beer show page



      Phase 6: Toasts
        **the equivalent of a like. Can Toast other users check-ins**

        -Backend:
          -Toast migration and model
            -migration
              -user_id: integer
              -check-in_id: integer

            **Look into using a polymorphic association

            -model
              **validates uniqueness of user_id, scope { check-in_id }
              This will ensure a user can only list a check-in once**
              -belongs_to :user
              -belongs_to :check-in
