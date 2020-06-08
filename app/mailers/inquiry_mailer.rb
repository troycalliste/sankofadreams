class InquiryMailer < ApplicationMailer
  def inquiry_notification(name, email, subject, message)
@name = name if name
@email = email if email
@subject = subject if subject
@message = message if message
mail(to: ['troycallist@gmail.com', 'sankofadreams@yahoo.com'], subject: 'You have a new inquiry!')
end
end
