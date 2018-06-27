class Project < ApplicationRecord
  validates_presence_of :title, :info, :user_email
end
