require 'spec_helper'
require 'rails_helper'

describe Api::BreweriesController do
  describe "get #index" do
    it "returns all breweries" do
      brewery = Brewery.create(name: 'abcd', city: 'New York', state: 'NY', country: 'USA')
      get :index, format: :json
      expect(assigns(:breweries)).to eq([brewery])
    end

    it "renders the index view" do
      brewery = Brewery.create(name: 'abcd', city: 'New York', state: 'NY', country: 'USA')
      get :index, format: :json
    end
  end
end
