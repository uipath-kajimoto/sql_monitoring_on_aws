#require 'rubygems' #non bundler
require 'bundler/setup' #using bundler
require 'activerecord-sqlserver-adapter'

ActiveRecord::Base.configurations = YAML.load_file('database.yml')
ActiveRecord::Base.establish_connection(:development)
con = ActiveRecord::Base.connection

# query using result
results = con.select_all("SELECT COUNT(*) AS LogsCOUNT FROM Logs")

results.each do |row|
  puts row['LogsCOUNT']
  #puts row
end

# query non result
# con.execute("UPDATE <TABLENAME> SET Column1 = #{'hoge'} WHERE id = 1")
