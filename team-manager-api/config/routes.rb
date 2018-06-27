Rails.application.routes.draw do
  namespace :api do
    resources :reports
    resources :users, only: [:create]
    post '/auth', to: "auth#login"
  end
end
