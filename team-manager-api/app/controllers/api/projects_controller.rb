class Api::ProjectsController < ApplicationController
  def index
    @projects = Project.order("created_at DESC").all
    render json: @projects
  end

  def create
    @project = Project.new(project_params)
    if @project.save
      render json: @project
    else
      render json: { errors: { message: "Project failed to save." } }
    end
  end

  def destroy
    id = (params[:id])
    @project = Project.find(id)
    if @project
      @project.destroy
    else
      render json: { errors: { message: "Project not found." } }
    end
  end

  private
    def project_params
      params.require(:project).permit(:title, :info, :proj_url, :help_needed, :user_email)
    end
end
