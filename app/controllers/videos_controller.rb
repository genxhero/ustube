class VideosController < ApplicationController
    
    def index
        @videos = Video.all
        render :index
    end

    def even
        @videos = Video.where("id % 2 == 0")
        render :even
    end
    
    def create 
    end

    def show
        @video = Video.find(params[:id].to_i)
        @user = current_user ? current_user : nil
    end
end