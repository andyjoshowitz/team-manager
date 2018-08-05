class Project < ApplicationRecord
  validates_presence_of :title, :info, :user_email

  # before_save :default_like_count
  #
  #  def default_like_count
  #      self.like_count ||= 0
  #  end


  # def initialize(like_count)
  #   @like_count = like_count
  #   @like_count = 0
  # end
end
