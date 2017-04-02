class ChangeAcceptedColumn < ActiveRecord::Migration
  def change
    change_column :friendships, :accepted, :boolean, default: true
  end
end
