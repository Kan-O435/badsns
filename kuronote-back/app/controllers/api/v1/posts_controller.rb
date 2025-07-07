class Api::V1::PostsController < ApplicationController

    def index
        posts = Post.order(created_at: :desc)
        render json: posts
    end

    def show
        post = Post.find(params[:id])
        render json: posts
    end

    def create
        post = Post.new(post_params)
        if post.save
            render json: post, status: :created
        else
            render json: {errors: post.errors.full_messages},status: :unprocessable_entity
        end
    end

    private

    def post_params
        params.require(:post).permit(:content, :user_id, :is_public)
    end
end

