class AddTimestampsToVideos < ActiveRecord::Migration[6.0]
  def change
      add_column :videos, :created_at, :datetime, null: true
      add_column :videos, :updated_at, :datetime, null: true
  end
end
