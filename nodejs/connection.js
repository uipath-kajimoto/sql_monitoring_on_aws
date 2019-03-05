const Connection = require('tedious').Connection;
const config = {
    server:"uipath-ysk15db.cj7eclhdppmu.ap-northeast-1.rds.amazonaws.com",
    userName:"uipathdbuser",
    password:"Ui6Path#db%as3w0rd",
    options:{
        database:"UiPath",
        encrypt:false
    }
};

const connection = new Connection(config);
connection.on('connect', function(err) {
    if ( err ) {
        // ERROR - SQL Serer connect error.
        console.log('SQL Serer connect error.(' + err + ')');
        // terminate
        process.exit();
    }
    // Info - SQL Server connected.
    console.log('SQL Server connected.');
    // if connect execute query
    execute();
});
