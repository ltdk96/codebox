Dir.chdir('usercode')

# 0. gaining root permission
puts `whoami`
# - list all users / groups
# - change to root user (password in-line): docker / ruby
# - change file's permisson


# 1. list all filenames & content:
# Dir.glob('*').each do |file|
#   puts "Name: " + file
#   puts "is a file? " if File.file?(file)
#   puts "Content: " + File.read(file)
# end

# 2. attempt to add content
# Dir.glob('*').each do |file|
#   puts "Name: " + file
#   File.write(file, "You're hacked!") if File.file?(file)
# end

# # 3. attempt to delete
# Dir.glob('*').each do |file|
#   puts "Name: " + file
#   File.delete(file)
# end
