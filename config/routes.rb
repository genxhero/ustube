Rails.application.routes.draw do
  resources :videos
  resources :sessions, only: [:create, :destroy]
  post '/login', to: 'sessions#create'
#  delete '/logout', to: 'sessions#destroy'
 # get '/logged_in', to: 'sessions#is_logged_in?'
  resources :users, only: [:create, :show, :index]
end
