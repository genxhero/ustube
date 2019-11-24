# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_11_24_214807) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "videos", force: :cascade do |t|
    t.string "title", null: false
    t.string "image_url", null: false
    t.string "video_url", null: false
    t.text "description", null: false
    t.integer "user_id", null: false
    t.index ["title"], name: "index_videos_on_title"
    t.index ["user_id"], name: "index_videos_on_user_id"
    t.index ["video_url"], name: "index_videos_on_video_url"
  end

end