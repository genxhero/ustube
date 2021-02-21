class RatingsController < ApplicationController

    #TODO: if user_id and video_id combo already exists, change original's value. Otherwise, create new
    def create 
        @rating = Rating.new(rating_params)
        if @rating.save
            #what ought i to do? re-render? ask in slack
        else
            render json: @user.errors.full_messages, status: 422
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