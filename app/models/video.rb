class Video < ApplicationRecord

    validates :video_url, :title, presence: true

    belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: "User"

    has_many :ratings,
    primary_key: :id,
    foreign_key: :video_id,
    class_name: "Rating"
end