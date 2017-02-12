

Tables:

    Users:
      username: string
      email: string
      password_digest: string
      session_token: string
      image_url: string **display default image if none provided**
      timestamps

      -has_many: check-ins

| username | password_digest        | session           | email           | image_url        |
|----------|------------------------|-------------------|-----------------|------------------|
| jvs      | HDS82834834U$%*%HKJHGD | G782364HDPLKSD93R | jvs@example.com | assets/image.png |


    Beer:
      name: string
      style: string
      brewery_id: integer

      -belongs_to: brewery
      -has_many: check-ins

| name      | style | brewery_id |
|-----------|-------|------------|
| Budweiser | Lager | 2          |



    Breweries:
      name: string
      city: string
      state: string
      country: string

      -has_many: beers
      -has_many: check-ins, through: beers

| name    | city | state | country |
|---------|------|-------|---------|
| Brewery | NYC  | NY    | USA     |



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

| user_id | check_in_id | content              |
|---------|-------------|----------------------|
| 5       | 2           | "Glad you liked it!" |



    Toasts:
      user_id: integer
      check_in_id: integer
      timestamp

| user_id | check_in_id |
|---------|-------------|
| 5       | 2           |



    Friends:
      **Was thinking of having three columns:
        -requesting_user_id:
        -requested_user_id:
        -accepted: false**

      -Will be unique and scoped to ids, so a user can only request to be friends with a user once
      -if user accepts, accepted will be changed to true
      -if rejected, this entire row will be deleted from table, this will allow user to request again the future if they desire


| requesting_user_id | requested_user_id | accepted |
|--------------------|-------------------|----------|
| 5                  | 2                 | false    |
