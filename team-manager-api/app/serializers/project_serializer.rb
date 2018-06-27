class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :title, :info, :proj_url, :help_needed, :user_email, :created_at
end
