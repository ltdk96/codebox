require 'open-uri'

def internet_connection?
  begin
    true if open("http://www.google.com/")
  rescue
    false
  end
end

puts internet_connection?
