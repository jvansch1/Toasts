require 'spec_helper'
require 'rails_helper'

describe Api::UsersController do

  before(:each) do
    User.destroy_all
  end

    describe "GET #Index" do
      it "renders the :index view" do
        get :index, format: :json
      end

      it "returns all User objects" do
        User.create(username: 'abc', password: '123')
        users = User.all
        get :index, format: :json
        expect(assigns(:users)).to eq(users)
      end
    end

    describe "GET #show" do
      it "renders the :show view" do
        user = User.create(username: 'abcd', password: '456789')
        get :show, format: :json, id: user.id
      end

      it "returns the correct user" do
        user = User.create(username: 'abcd', password: '456789')
        get :show, format: :json, id: user.id
        expect(assigns(:user)).to eq(user)
      end
    end

    describe "post #create" do
      it "with valid attributes" do
        user = User.create(username: 'abcd', password: '456789')
        post :create, user: { user: user }
        expect(User.all.length).to eq(1)
      end

      it "with invalid attributes" do
        user = User.create(username: 'abcd', password: '4')
        post :create, user: { user: user }, format: :json
        expect(response.body).to eq("[\"Username can't be blank\",\"Password digest can't be blank\"]")
      end
    end

end
