Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get "/", to: "static#home"
  get "/departments", to: "static#departments"
  get "/counseling", to: "static#counseling"
  get "/contact", to: "static#contact"
  get "/business", to: "static#business"
  get "/education", to: "static#education"
  get "/fitness", to: "static#fitness"
  get "/pharoahs", to: "static#pharoahs"
  get "/lifeplanning", to: "static#lifeplanning"
end
