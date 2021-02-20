class AddRatingsToVideos < ActiveRecord::Migration[6.0]
  def change
    add_column :videos, :tags, :string, array: true, default: []
    add_index :videos, :tags
  end
end
