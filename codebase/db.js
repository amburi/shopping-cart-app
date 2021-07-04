var mysql = require('mysql');
var Promise = require("bluebird");

Promise.promisifyAll(mysql);
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

var pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "ecart",
    port: 3306
});

function getSqlConnection() {
    return pool.getConnectionAsync().disposer(function (connection) {
        connection.release();
    });
}

function querySql (query, params) {
    return Promise.using(getSqlConnection(), function (connection) {
        if (typeof params !== 'undefined'){
            return connection.queryAsync(query, params);
        } else {
            return connection.queryAsync(query);
        }
    });
};



module.exports = {
    getSqlConnection : getSqlConnection,
    querySql : querySql
};