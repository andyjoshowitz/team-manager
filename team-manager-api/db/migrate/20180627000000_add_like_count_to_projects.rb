class AddLikeCountToProjects < ActiveRecord::Migration[5.2]
  def change
    add_column :projects, :like_count, :integer
  end
end
