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

  describe "get #show" do
    it "renders the show index" do
      brewery = Brewery.create!(name: 'abcd', city: 'New York', state: 'NY', country: 'USA')
      get :show, format: :json, id: brewery.id
    end

    it "returns the correct brewery" do
      brewery = Brewery.create(name: 'abcd', city: 'New York', state: 'NY', country: 'USA')
      get :show, format: :json, id: brewery.id
      expect(assigns(:brewery)).to eq(brewery)
    end
  end

  describe "post #create" do
    it "with valid attributes" do
      brewery = Brewery.create(name: 'abcd', city: 'New York', state: 'NY', country: 'USA')
      expect(Brewery.count).to eq(1)
    end

    it "with invalid attributes" do
      brewery = Brewery.new(name: '', city: 'New York', state: 'NY', country: 'USA')
      expect(brewery).to be_invalid
    end
  end
end
