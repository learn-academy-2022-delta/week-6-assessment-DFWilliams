# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) The index restful route allows us to see all of the entries within the datatbase. 
class BlogPostsController < ApplicationController
  def index
    # ---2)On line 13 we are conducting an active record call that will call on all of the database entries and assign it to a variable @posts.
    @posts = BlogPost.all
  end

  # ---3) The show restful route allows us to see one entry from the database. This is possible by using params. In this case we are finding the entry based off of the param [:id] 
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) The new restful route created a space for the user to make entries into the database. 
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) The create restful route allows for the information that was input into the form from the new restful route is now put into the database. We also have some conditional statements here if the entry is valid, meaning it contains all of the required information, held in the strong params,to post it in the database. If the entry is not valid then you are redirected to the form from the new restful route. 
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6)The edit restful route creates a space where the user can update the entries. So, what is happening here on line 38 is that we are calling on calling on a post that we want to edit by the id of the entry within the database.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) The update Restful route allows for the edits to the entry, made by the user, are input into the database. This mush like what create does for new. Also it goes through validation. I the edited post is not valid for whatever reason the user will be redirected to edit the post again. If it is valid the user will be redirected to the page of the newly edited blog post. 
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) If the post does not get deleted for whatever reason, the user will be redirected to the page of the blog post
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) private is a ruby keyword that essentially sets a boundry for where you can call these controller methods. It also protects the contents below it from being accessed outside this particular class
  private
  def blog_post_params
    # ---10) these are the params that the create, and update RESTful routes must follow. This helps to validate the new or edited entries of the database. 
    params.require(:blog_post).permit(:title, :content)
  end
end
