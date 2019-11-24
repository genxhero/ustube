class Createvideostable < ActiveRecord::Migration[6.0]
  def change
    create_table :videos do |t|
      t.string :title, null: false
      t.string :image_url, null: false
      t.string :video_url, null: false
      t.text :description, null: false 
      t.integer :user_id, null: false
    end
        add_index :videos, :title
        add_index :videos, :user_id
        add_index :videos, :video_url
  end
end
