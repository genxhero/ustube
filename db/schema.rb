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

ActiveRecord::Schema.define(version: 2021_02_21_064011) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "ratings", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "video_id", null: false
    t.integer "value", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_ratings_on_user_id"
    t.index ["video_id"], name: "index_ratings_on_video_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_users_on_email"
    t.index ["session_token"], name: "index_users_on_session_token"
    t.index ["username"], name: "index_users_on_username"
  end

  create_table "videos", force: :cascade do |t|
    t.string "title", null: false
    t.string "image_url", null: false
    t.string "video_url", null: false
    t.text "description", null: false
    t.integer "user_id", null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string "tags", default: [], array: true
    t.index ["tags"], name: "index_videos_on_tags"
    t.index ["title"], name: "index_videos_on_title"
    t.index ["user_id"], name: "index_videos_on_user_id"
    t.index ["video_url"], name: "index_videos_on_video_url"
  end

end
