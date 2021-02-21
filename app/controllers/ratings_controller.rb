class RatingsController < ApplicationController

    def create 
        @rating = Rating.new(rating_params)
        if @rating.save
            #what ought i to do? re-render? ask in slack
        end
    end

    def destroy
        @rating = Rating.find(params[:id].to_i)
        @rating.destroy
        #again ought i to render something here? lordy this is easier with graphQL
    end

    private  
    def rating_params
      params.require(:rating).permit(:user_id, :video_id, :value)
    end
end