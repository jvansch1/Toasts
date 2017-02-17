# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170217163828) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "beers", force: :cascade do |t|
    t.string   "name",               null: false
    t.string   "style",              null: false
    t.integer  "brewery_id",         null: false
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.string   "ABV"
    t.integer  "IBU"
    t.string   "image_url"
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
  end

  create_table "breweries", force: :cascade do |t|
    t.string   "name",               null: false
    t.string   "city",               null: false
    t.string   "state",              null: false
    t.string   "country",            null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
  end

  create_table "checkins", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "beer_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "description"
    t.float    "rating",      null: false
  end

  add_index "checkins", ["beer_id"], name: "index_checkins_on_beer_id", using: :btree
  add_index "checkins", ["user_id"], name: "index_checkins_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string "username",        null: false
    t.string "email"
    t.string "password_digest", null: false
    t.string "session_token",   null: false
    t.string "image_url"
  end

end
