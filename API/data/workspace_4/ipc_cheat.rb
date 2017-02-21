Dir.chdir('usercode')

if File.exists?('script.sh')
  puts 'Script: True'
  puts File.delete('script.sh')
end

if File.exists?('logfile.txt')
  puts 'Log: True'
  puts File.delete('logfile.txt')
end

if File.exists?('errors')
  puts 'Error: True'
  puts File.delete('errors')
end

sleep 5
