class Beer < ActiveRecord::Base


  BEER_STYLES = ["Altbier", "Amber ale","Barley wine", "Berliner Weisse", "Bière de Garde", "Bitter", "Blonde Ale", "Bock", "Brown ale", "California Common/Steam Beer", "Cream Ale", "Dortmunder Export", "Doppelbock", "Dunkel", "Dunkelweizen", "Eisbock", "Flanders red ale", "Golden/Summer ale", "Gose", "Gueuze", "Hefeweizen", "Helles", "India pale ale", "Kölsch", "Lambic", "Light ale", "Maibock/Helles bock", "Malt liquor", "Mild", "Oktoberfestbier/Märzenbier", "Old ale", "Oud bruin", "Pale ale", "Pilsener/Pilsner/Pils", "Porter", "Red ale", "Roggenbier", "Saison", "Scotch ale", "Stout", "Schwarzbier", "Vienna lager", "Witbier", "Weissbier", "Weizenbock"]

  validates :name, :brewery_id, :ABV, :IBU, presence: true
  validates :style, inclusion: { in: BEER_STYLES }


  def self.beer_styles
    BEER_STYLES
  end
end
