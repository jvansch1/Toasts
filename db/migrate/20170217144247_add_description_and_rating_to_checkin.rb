class AddDescriptionAndRatingToCheckin < ActiveRecord::Migration
  def change
    add_column :checkins, :description, :string
    add_column :checkins, :rating, :integer, null: false
  end
end
