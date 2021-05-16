const query = require('../db/db-connection');
const { multipleColumnSet } = require('../utils/common.utils');
class SellerSettingsModel {
    tableName = 'SELLER_SETTINGS';

    find = async (params = {}) => {
        let sql = `SELECT * FROM ${this.tableName}`;

        if (!Object.keys(params).length) {
            return await query(sql);
        }

        const { columnSet, values } = multipleColumnSet(params)
        sql += ` WHERE ${columnSet}`;

        return await query(sql, [...values]);
    }

    findOne = async (params) => {
        const { columnSet, values } = multipleColumnSet(params)

        const sql = `SELECT * FROM ${this.tableName}
        WHERE ${columnSet}`;

        const result = await query(sql, [...values]);

        return result[0];
    }

    create = async ({ profile_name,	issue_place,	company_name,	nip,	address1,	address2,	payment_type,	payment_deadline,	account_number	}) => {
        const sql = `INSERT INTO ${this.tableName}
        (profile_name,	issue_place,	company_name,	nip,	address1,	address2,	payment_type,	payment_deadline,	account_number) VALUES (?,?,?,?,?,?,?,?,?)`;

        const result = await query(sql, 
            [profile_name,	issue_place,	company_name,	nip,	address1,	address2,	payment_type,	payment_deadline,	account_number]);
        const affectedRows = result ? result.affectedRows : 0;

        return affectedRows;
    }

    update = async (params, id) => {
        const { columnSet, values } = multipleColumnSet(params)

        const sql = `UPDATE ${this.tableName} SET ${columnSet} WHERE id = ?`;

        const result = await query(sql, [...values, id]);

        return result;
    }

    delete = async (id) => {
        const sql = `DELETE FROM ${this.tableName}
        WHERE id = ?`;
        const result = await query(sql, [id]);
        const affectedRows = result ? result.affectedRows : 0;

        return affectedRows;
    }
}

module.exports = new SellerSettingsModel;