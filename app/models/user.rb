class User < ActiveRecord::Base
  validates :username, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  after_initialize :ensure_session_token
  validates :username, uniqueness: true

  has_attached_file :image, styles: { thumb: "70x70!"}, default_url: "default_beer_Image.png", allow_nil: true
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  has_many :checkins
  has_many :friendships

  attr_reader :password


  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)

    if user && user.is_password?(password)
      return user
    else
      nil
    end
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

  def unique_checkins
    self.checkins.select(:beer_id).distinct
  end
end
