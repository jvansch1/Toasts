class AddAbvAndIbuToBeers < ActiveRecord::Migration
  def change
    add_column :beers, :ABV, :float
    add_column :beers, :IBU, :integer
  end
end
