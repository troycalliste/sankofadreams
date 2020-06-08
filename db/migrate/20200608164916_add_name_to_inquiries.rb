class AddNameToInquiries < ActiveRecord::Migration[6.0]
  def change
    add_column :inquiries, :name, :string
    add_column :inquiries, :email, :string
    add_column :inquiries, :subject, :string
    add_column :inquiries, :message, :text
  end
end
