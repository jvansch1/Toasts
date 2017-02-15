class ChangeAbVcolumnToString < ActiveRecord::Migration
  def change
    change_column(:beers, :ABV, :string)
  end
end
