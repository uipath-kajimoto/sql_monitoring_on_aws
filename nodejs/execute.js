const Request = require('tedious').Request;
function execute() {
    let sql = getQuery();
    const request = new Request(sql, function(err, rows) {
        if ( err ) {
            console.log('Query request error.(' + err + '');
            process.exit();
        }
        console.log('Run query. ' + sql);
        connection.close();
    });
    request.on('row', function(columns) {
    })
    connection.execSql(request);
}
function getQuery() {
    return sql;
}
