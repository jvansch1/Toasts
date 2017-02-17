class ChangeRatingColumn < ActiveRecord::Migration
  def change
    change_column :checkins, :rating, :float, null: false
  end
end
