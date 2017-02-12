
{
  session: {
    current_user: {
      username: "jvs",
      id: 1
    },
    errors: []
  },
  beers: {
    1: {
      name: "budweiser",
      style: "lager",
      brewery_id: 1
    }
    2: {
      name: "bourbon county brand stout 2014",
      style: "stout",
      brewery_id: 2
    }
  },
  breweries: {
    1: {
      name: "anheuser busch",
      city: "St Louis",
      state: "Missouri",
      country: "USA"
    }
    2: {
      name: "Goose Island",
      state: "Chicago",
      state: "Illinois",
      country: "USA"
    }
  },
  check-ins: {
    user_id: 1,
    beer_id: 1,
    toasts: {    
      user: 2
    }
  }
}

**nesting toasts under check-ins rather than having a top-level-slice for them**
**think about use geolocater rather than manually passing in location as string**
