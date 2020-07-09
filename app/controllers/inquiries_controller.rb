class InquiriesController < ApplicationController
  before_action :set_inquiry, only: [:show, :edit, :update, :destroy]

  # GET /inquirys
  # GET /inquirys.json
  def index
    @inquirys = Inquiry.all
  end

  # GET /inquirys/1
  # GET /inquirys/1.json
  def show
  end

  # GET /inquirys/new
  def new
    @inquiry = Inquiry.new
  end

  # GET /inquirys/1/edit
  def edit
  end

  # POST /inquirys
  # POST /inquirys.json
  def create
    @inquiry = Inquiry.new(inquiry_params)

    respond_to do |format|
      if @inquiry.save
      name = @inquiry.name
      email = @inquiry.email
      subject = @inquiry.subject
      message = @inquiry.message

      InquiryMailer.with(inquiry: @inquiry).inquiry_notification(name, email, subject, message).deliver_later
      format.html { redirect_to "/rdrct-submit"}
      format.json { render :show, status: :created, location: @inquiry }
    else
      format.html { render :new }
      format.json { render json: @inquiry.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /inquirys/1
  # PATCH/PUT /inquirys/1.json
  def update
    respond_to do |format|
      if @inquiry.update(inquiry_params)
        format.html { redirect_to @inquiry, notice: 'Inquiry was successfully updated.'}
        format.json { render :show, status: :ok, location: @inquiry }
      else
        format.html { render :edit }
        format.json { render json: @inquiry.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /inquirys/1
  # DELETE /inquirys/1.json
  def destroy
    @inquiry.destroy
    respond_to do |format|
      format.html { redirect_to inquirys_url, notice: 'Inquiry was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_inquiry
      @inquiry = Inquiry.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def inquiry_params
      #params.fetch(:inquiry, {})
      params.require(:inquiry).permit(:phone, :name, :email, :message, :subject)
    end
end
