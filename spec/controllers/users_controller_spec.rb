require 'spec_helper'
require 'rails_helper'

describe Api::UsersController do

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
    end

end
