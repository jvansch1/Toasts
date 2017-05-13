require 'spec_helper'
require 'rails_helper'

describe Api::BeersController do
  describe "get #index" do
    it "returns all beers" do
      brewery = Brewery.create(name: 'abcd', city: 'New York', state: 'NY', country: 'USA')
      beer = Beer.create!(name: 'abc', style: 'Bitter', brewery: brewery, ABV: 5.6, IBU: 70)
      get :index, format: :json
      expect(assigns(:beers)).to eq([beer])
    end
  end
end
