class CreateLikes < ActiveRecord::Migration
  def change
    create_table :likes do |t|
      t.integer :user_id, null: false
      t.integer :checkin_id, null: false
      t.timestamps
    end
  end
end
