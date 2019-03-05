var Connection = require('tedious').Connection;
var Request = require('tedious').Request;
var TYPES = require('tedious').TYPES;
var async = require('async');

var config = {
  userName: 'uipathdbuser',
  password: 'Ui6Path#db%as3w0rd',
  server: 'uipath-ysk15db.cj7eclhdppmu.ap-northeast-1.rds.amazonaws.com',
  options: {
    database: 'Uipath'
  }
}

var connection = new Connection(config);

function Start(callback) {
    callback(null);
}

// Select sampletable
function Read(callback) {
    console.log('Reading from SampleTable...');

    request = new Request(
    'SELECT COUNT(*) AS LogsCOUNT FROM Logs;',
    function(err, rowCount, rows) {
    if (err) {
        callback(err);
    } else {
        console.log(' \n');
        callback(null, 'Ubuntu', 'Linux');
    }
    });

    var result = "";
    request.on('row', function(columns) {
        columns.forEach(function(column) {
            if (column.value === null) {
                console.log('NULL');
            } else {
                result += column.value + " ";
            }
        });
        console.log(result);
        result = "";
    });

    connection.execSql(request);
}
