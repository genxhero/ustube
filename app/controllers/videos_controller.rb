class VideosController < ApplicationController
    
    def index
        @videos = Video.all
        render :index
    end
    
    def create 
    end

    def show
        @video = Video.find(params[:id].to_i)
        @user = current_user ? current_user : nil
    end
end