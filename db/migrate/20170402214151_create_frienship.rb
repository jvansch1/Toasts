class CreateFrienship < ActiveRecord::Migration
  def change
    create_table :frienships do |t|
      t.integer :requester_id, null: false
      t.integer :requested_id, null: false
      t.boolean :accepted, null: false
      t.timestamps
    end
  end
end
