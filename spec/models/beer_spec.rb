require 'spec_helper'
require 'rails_helper'

describe Beer do
  before(:each) do
    Beer.destroy_all
  end

  describe 'validations' do
    it "validates name is present" do
      brewery = Brewery.create(name: 'abcd', city: 'New York', state: 'NY', country: 'USA')
      beer = Beer.new(name: '', style: 'Bitter', brewery: brewery, ABV: 5.6, IBU: 70)
      expect(beer).to be_invalid
    end
  end
end
