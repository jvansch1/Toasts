class ChangeEmailNullToTrue < ActiveRecord::Migration
  def change
    change_column :users, :email, :string
  end
end
