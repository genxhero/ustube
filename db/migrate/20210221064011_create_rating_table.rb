class CreateRatingTable < ActiveRecord::Migration[6.0]
  def change
    create_table :ratings do |t|
       t.integer :user_id, null: false
       t.integer :video_id, null: false
       t.integer :value, null: false
       t.timestamps
    end
       add_index :ratings, :user_id
       add_index :ratings, :video_id
  end
end
