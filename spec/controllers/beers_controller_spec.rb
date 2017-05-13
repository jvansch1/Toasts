require 'spec_helper'
require 'rails_helper'

describe Api::BeersController do
  describe "get #index" do
    it "renders the index view" do
      get :index, format: :json
    end

    it "returns all beers" do
      brewery = Brewery.create(name: 'abcd', city: 'New York', state: 'NY', country: 'USA')
      beer = Beer.create!(name: 'abc', style: 'Bitter', brewery: brewery, ABV: 5.6, IBU: 70)
      get :index, format: :json
      expect(assigns(:beers)).to eq([beer])
    end
  end

  describe "get #show" do
    it "renders the show view" do
      brewery = Brewery.create(name: 'abcd', city: 'New York', state: 'NY', country: 'USA')
      beer = Beer.create!(name: 'abc', style: 'Bitter', brewery: brewery, ABV: 5.6, IBU: 70)
      get :show, format: :json, id: beer.id
    end

    it "returns the correct beer" do
      brewery = Brewery.create(name: 'abcd', city: 'New York', state: 'NY', country: 'USA')
      beer = Beer.create!(name: 'abc', style: 'Bitter', brewery: brewery, ABV: 5.6, IBU: 70)
      get :show, format: :json, id: beer.id
      expect(assigns(:beer)).to eq(beer)
    end
  end

  describe "post #create" do
    it "with valid attributes" do
      brewery = Brewery.create(name: 'abcd', city: 'New York', state: 'NY', country: 'USA')
      beer = Beer.create!(name: 'abc', style: 'Bitter', brewery: brewery, ABV: 5.6, IBU: 70)
      expect(Beer.count).to eq(1)
    end

    it "with invalid attributes" do

    end
  end
end
