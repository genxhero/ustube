
class SessionsController < ApplicationController

    def new
      render :new
    end

    def create
        @user = User.find_by_credentials(
          params[:user][:email],
          params[:user][:password]
        )
        if @user
          login(@user)
          render "/users/show"
        else
          render json: ["Invalid Credentials"], status: 422
        end
    end

    def destroy
        logout
        render json: {}
      end
      
end