class CreateCheckin < ActiveRecord::Migration
  def change
    create_table :checkins do |t|
      t.integer :user_id
      t.integer :beer_id
      t.timestamps
    end
  add_index(:checkins, :user_id)
  add_index(:checkins, :beer_id)
  end
end
