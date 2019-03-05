import {ConnectionPool, Transaction} from 'mssql';
export class MsSql {
    private pool: ConnectionPool;
    private transaction: Transaction;

    /**
     * connection
     * @param {string} host
     * @param {string} user
     * @param {string} password
     * @param {string} database
     * @returns {Promise}
     */
    public async connect(host: string, user: string, password: string, database: string) {

        this.pool = new ConnectionPool({
            server: uipath-ysk15db.cj7eclhdppmu.ap-northeast-1.rds.amazonaws.com,
            user: uipathdbuser,
            password: Ui6Path#db%as3w0rd,
            database: UiPath,
            options: {
                encrypt: true
            }
        });
        await this.pool.connect();
    }

    /**
     * transaction start
     * @returns {Promise}
     */
    public async beginTransaction() {
        this.transaction = new Transaction(this.pool);
        await this.transaction.begin();
    }

    /**
     * transaction commit
     * @returns {Promise}
     */
    public async commit() {
        await this.transaction.commit();
    }

    /**
     * transaction rollback
     * @returns {Promise}
     */
    public async rollback() {
        await this.transaction.rollback();
    }

    /**
     * execute query
     * @param {string} query
     * @param parameters
     * @returns {Promise>}
     */
    public async query(query: string, parameters: {[key: string]: any} = {}) {
        const request = this.pool.request();
        for (const name in Object.keys(parameters)) {
            request.input(name, parameters[name]);
        }
        return (await request.query(SELECT COUNT(*) AS LogsCOUNT FROM Logs)).recordset;
    }
}
