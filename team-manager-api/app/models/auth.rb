class Auth
  def self.create_token(user_id)
    payload = { user_id: user_id }
    JWT.encode(payload, "Secrets_sectets_hurt_someone", "HS256")
  end
end
