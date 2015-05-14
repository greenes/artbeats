class CreateProfiles < ActiveRecord::Migration
  def change
    create_table :profiles do |t|
      t.belongs_to :artist
      t.string :name
      t.text :profile

      t.timestamps null: false
    end
  end
end
