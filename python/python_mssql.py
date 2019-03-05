import pyodbc 
# Some other example server values are
# server = 'localhost\sqlexpress' # for a named instance
# server = 'myserver,port' # to specify an alternate port
server = 'tcp:uipath-ysk15db.cj7eclhdppmu.ap-northeast-1.rds.amazonaws.com' 
database = 'UiPath' 
username = 'uipathdbuser' 
password = 'Ui6Path#db%as3w0rd'
cnxn = pyodbc.connect('DRIVER={ODBC Driver 17 for SQL Server};SERVER='+server+';DATABASE='+database+';UID='+username+';PWD='+ password)
cursor = cnxn.cursor()

cursor.execute("SELECT COUNT(*) AS LogsCOUNT FROM Logs;") 
row = cursor.fetchone() 
while row: 
    print row[0] 
    row = cursor.fetchone()
