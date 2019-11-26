class VideosController < ApplicationController
    
    def index
        @videos = Video.all
        render :index
    end
    
    def create 
    end

    def show
        @video = Video.find(params[:id].to_i)
    end
end