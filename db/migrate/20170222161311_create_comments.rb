class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.integer :user_id, null: false
      t.integer :checkin_id, null: false
      t.string :content, null: false
      t.timestamps
    end
  end
end
