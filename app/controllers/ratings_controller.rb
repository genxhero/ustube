class RatingsController < ApplicationController

    def create 
        @rating = Rating.new(rating_params)
        if @rating.save
            #what ought i to do? re-render? ask in slack
        end
    end

    def destroy
    end

    private  
    def rating_params
      params.require(:rating).permit(:user_id, :video_id, :value)
    end
end