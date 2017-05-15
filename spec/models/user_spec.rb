require 'spec_helper'
require 'rails_helper'

describe User do

  before(:each) do
    User.destroy_all
  end

  describe "checks validations" do
    it "has a username" do
      user = User.new(username: '', password: 'password')
      expect(user).to be_invalid
    end

    it "has a password" do
      user = User.new(username: 'abcdef', password: '')
      expect(user). to be_invalid
    end

    it "password is 6 characters" do
      user = User.new(username: 'username', password: 'pass')
      expect(user).to be_invalid
    end

    it "create user when valid" do
      user = User.create!(username: 'abcdef', password: 'password')
      expect(User.count).to eq(1)
    end
  end

  describe "find by credentials" do
    it "returns user" do
      user = User.create!(username: 'abcdef', password: 'password')
      found_user = User.find_by_credentials(user.username, user.password)
      expect(found_user).to eq(user)
    end

    it "returns null when invalid" do
      found_user = User.find_by_credentials('password', 'password')
      expect(found_user).to eq(nil)
    end
  end

  describe "password = " do
    it "correctly sets password variable" do
      user = User.new(username: 'abcdef', password: '')
      user.password = 'password'
      expect(user.password).to eq('password')
    end

    it "creates password digest" do
      user = User.new(username: 'abcdef', password: '')
      user.password = 'password'
      expect(user.password_digest).not_to eq('')
    end
  end

  describe "reset_session_token" do
    it "resets the user session token" do
      user = User.create!(username: 'abcdef', password: 'password')
      session_token_one = user.session_token
      user.reset_session_token!
      expect(session_token_one).not_to eq(user.session_token)
    end
  end

end
