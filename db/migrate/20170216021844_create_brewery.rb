class CreateBrewery < ActiveRecord::Migration
  def change
    create_table :breweries do |t|
      t.string :name, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.string :country, null: false
      t.timestamps
    end
  end
end
