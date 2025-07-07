class CreatePosts < ActiveRecord::Migration[7.1]
  def change
    create_table :posts do |t|
      t.string :content
      t.text :transformed
      t.string :user_id
      t.boolean :is_public

      t.timestamps
    end
  end
end
