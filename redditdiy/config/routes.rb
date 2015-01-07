Rails.application.routes.draw do

  get 'static_pages/documentation'

  # Need both comment resources
  resources :comments

  devise_for :users

  # Learn proper nesting, comments are nested in posts.
  resources :posts do
    resources :comments
    member do
      put "like", to: "posts#upvote"
      put "dislike", to: "posts#downvote"
    end
  end

  root "posts#index" # Shortcut to the posts index under view>posts>index.html.erb
  # also displays all the posts.


end
