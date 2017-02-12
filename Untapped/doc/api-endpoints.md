

HTML API

    Root
      - GET /
          - loads React Web App

JSON API

    Session
      -POST /api/session
        - signs user in
      -DELETE /api/session
        - signs user out

    User
      -POST /api/users
        - creates user
      -DELETE /api/users
        - deletes user

    Beer
      -GET api/beers/:id
        - beer show page
      -POST /api/beers
        - creates beer
      -DELETE /api/beers
        - deletes beer
      -PATCH /api/beers/:id
        - updates beer

    Brewery
      -GET api/breweries/:id
        - brewery show page
      -POST /api/breweries
        - creates brewery
      -DELETE /api/breweries
        - deletes brewery
      -PATCH /api/breweries/:id
        - updates brewery

    Check-in(Post)
      **checking in is the equivalent of making a post
      **requires a beerId to ensure user is checking in to valid 
