class StaticController < ApplicationController
  def contact
    @inquiry = Inquiry.new
  end
end
