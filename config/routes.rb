Rails.application.routes.draw do
  resources :videos
  resources :sessions, only: [:new, :create, :destroy]
  post '/login', to: 'sessions#new'
#  delete '/logout', to: 'sessions#destroy'
 # get '/logged_in', to: 'sessions#is_logged_in?'
  resources :users
end
