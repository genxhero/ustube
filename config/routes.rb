Rails.application.routes.draw do
  resources :videos
  resources :sessions, only: [:create, :destroy]
end
