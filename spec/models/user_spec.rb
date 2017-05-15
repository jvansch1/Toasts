require 'spec_helper'
require 'rails_helper'

describe User do
  describe "checks validations" do
    it "has a username" do
      user = User.new(username: '', password: 'password')
    end
  end
end
