class CreatePieces < ActiveRecord::Migration
  def change
    create_table :pieces do |t|
      t.belongs_to :gallery
      t.string :picture
      t.string :piece_name
      t.text :piece_description
      t.integer :stars


      t.timestamps null: false
    end
  end
end
