import databaseConstants from "./databaseConstants";

const databaseCommands = {
    selectAll: (tableName: string) => {
        return `SELECT * FROM ${tableName}`;
    },

    selectRow: (tableName: string) => {
        return `SELECT * FROM ${tableName} WHERE name = ?`;
    },

    insertValue: (tableName: string) => {
        if (tableName === databaseConstants.dbTables.authDb) {
            return `INSERT INTO ${tableName} (name, token) VALUES (?, ?)`;
        }
        if (tableName === databaseConstants.dbTables.messagesDb) {
            throw new Error("Not implemented yet.");
        }
        return "";
    },

    createTable: (tableName: string) => {
        if (tableName === databaseConstants.dbTables.authDb) {
            return `CREATE TABLE IF NOT EXISTS ${tableName} (id INTEGER PRIMARY KEY, name TEXT, token TEXT)`;
        }
        if (tableName === databaseConstants.dbTables.messagesDb) {
            throw new Error("Not implemented yet.");
        }
        return "";
    },

    deleteTable: (tableName: string) => {
        return `DROP TABLE IF EXISTS ${tableName}`;
    },

    deleteRow: (tableName: string) => {
        return `DELETE FROM ${tableName} WHERE name = ?`;
    },
};

export default databaseCommands;
