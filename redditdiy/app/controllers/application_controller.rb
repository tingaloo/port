class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  # redirects to current page after signing in from header.
  # Located in devise docs.
  def after_sign_in_path_for(resource)
    request.env['omniautho.origin'] || stored_location_for(resource) || root_path
  end

  # Updates cannot be saved without explicitly PERMITTING PARAMETERS
  # Which is how rails deals with mass assignment, so for every new assignment,
  # We add them to the permitted parameters assignment
  before_filter :configure_permitted_parameters, if: :devise_controller?

    protected

        def configure_permitted_parameters
            devise_parameter_sanitizer.for(:sign_up) { |u| u.permit(:name, :email, :password) }
            devise_parameter_sanitizer.for(:account_update) { |u| u.permit(:name, :email,
              :password, :current_password) }
        end
end
