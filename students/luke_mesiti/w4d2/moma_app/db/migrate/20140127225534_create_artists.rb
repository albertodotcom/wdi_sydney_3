class CreateArtists < ActiveRecord::Migration
  def change
    create_table :artists do |t|
        t.string :name
        t.string :nationality
        t.string :period
        t.date :dob
        t.text :image
        t.timestamps
    end
  end
end
