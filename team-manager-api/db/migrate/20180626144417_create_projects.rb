class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.string :title
      t.string :info
      t.string :proj_url
      t.string :user_email
      t.boolean :help_needed

      t.timestamps
    end
  end
end
