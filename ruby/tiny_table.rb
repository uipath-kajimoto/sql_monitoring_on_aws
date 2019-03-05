require 'bundler/setup'
require 'rubygems'
require 'tiny_tds'


client = TinyTds::Client.new username: 'uipathdbuser', password: 'Ui6Path#db%as3w0rd', host: 'uipath-ysk15db.cj7eclhdppmu.ap-northeast-1.rds.amazonaws.com', port: 1433, database: 'UiPath', azure: false

results = client.execute 'SELECT COUNT(*) AS LogsCOUNT FROM Logs'

results.each do |row|
  puts row['LogsCOUNT']
end
