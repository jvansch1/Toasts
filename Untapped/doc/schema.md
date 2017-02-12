

Tables:

  Users:
    username: string
    email: string
    password_digest: string
    session_token: string
    image_url: string **display default image if none provided**
    timestamps

    -has_many: check-ins

  Beer:
    name: string
    style: string
    brewery_id: integer

    -belongs_to: brewery
    -has_many: check-ins


  Breweries:
    name: string
    city: string
    state: string
    country: string

    -has_many: beers
    -has_many: check-ins, through: beers


  Check-ins:
    user_id: integer
    beer_id: integer
    image_url: string
    description: string
    rating: integer **out of 5. intervals of .25

    **no need to include brewery_id
    **can get it from the beer**

  Comments:
    user_id: integer
    check_in_id: integer
    content: string
    timestamps

    -belongs_to: user
    -belongs_to: check-in


  Toasts:
    user_id: integer
    check_in_id: integer
    timestamp


  Friends:
    **Was thinking of having three columns:
      -requesting_user_id:
      -requested_user_id:
      -accepted: false**

    -Will be unique and scoped to ids, so a user can only request to be friends with a user once
    -if user accepts, accepted will be changed to true
    -if rejected, this entire row will be deleted from table, this will allow user to request again the future if they desire
