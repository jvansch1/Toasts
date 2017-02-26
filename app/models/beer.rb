class Beer < ActiveRecord::Base
  validates :name, :brewery, :ABV, :IBU, presence: true
  validates :style, inclusion: { in: BEER_STYLES }
  has_attached_file :image, styles: { thumb: "70x70!"}, default_url: 'default_beer_Image.png'
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
  belongs_to :brewery
  has_many :checkins

  BEER_STYLES = ["Altbier", "Amber ale","Barley wine", "Berliner Weisse", "Bière de Garde", "Bitter", "Blonde Ale", "Bock", "Brown ale", "California Common/Steam Beer", "Cream Ale", "Dortmunder Export", "Doppelbock", "Dunkel", "Dunkelweizen", "Eisbock", "Flanders red ale", "Golden/Summer ale", "Gose", "Gueuze", "Hefeweizen", "Helles", "India pale ale", "Kölsch", "Lambic", "Light ale", "Maibock/Helles bock", "Malt liquor", "Mild", "Oktoberfestbier/Märzenbier", "Old ale", "Oud bruin", "Pale ale", "Pilsener/Pilsner/Pils", "Porter", "Red ale", "Roggenbier", "Saison", "Scotch ale", "Stout", "Schwarzbier", "Vienna lager", "Witbier", "Weissbier", "Weizenbock"]
  def self.beer_styles
    BEER_STYLES
  end

  def self.top_beers
    top_beers = Beer.joins(:checkins).group("beers.id").limit(10).order("COUNT (checkins.id) DESC").count("checkins.id")
    beer_array = []
    top_beers.each do |k,v|
      beer_array.push([Beer.find(k), Beer.find(k).image.url, Beer.find(k).brewery])
    end
    beer_array
  end

  def unique_checkins
    self.checkins.select(:user_id).distinct
  end
end
