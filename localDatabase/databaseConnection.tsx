import * as SQLite from "expo-sqlite";

const databaseConnection = async (databaseName: string, sqlCommand: string, params: Array<string> = []) => {
    return new Promise<SQLite.SQLResultSet>((resolve, reject) => {
        // opens database, if the database doesn't exists, it generates a new database with the specified name
        const db = SQLite.openDatabase(databaseName);

        // create new transaction
        db.transaction((tx) => {
            // execute sql command
            tx.executeSql(
                sqlCommand,
                params,
                (_, result) => resolve(result),
                (_, error) => {
                    reject(error);
                    return true;
                }
            );
        });
    });
};

export default databaseConnection;
