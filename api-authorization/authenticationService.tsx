import dbConnection from "../localDatabase/databaseConnection";
import dbConstants from "../localDatabase/databaseConstants";
import dbCommands from "../localDatabase/databaseCommands";
import { apiRoutes } from "../apiRoutes";

const loginUser = () => {
    console.log(apiRoutes.Test);
};

const isAuthenticated = (): boolean => {
    let isAuth = false;

    dbConnection(dbConstants.dbNames.mainDb, dbCommands.selectRow(dbConstants.dbTables.authDb), ["Token"])
        .then((result) => {
            if (Date.parse(result.rows.item(0)["expireDate"]) > Date.now()) {
                // delete expired token
                dbConnection(dbConstants.dbNames.mainDb, dbCommands.deleteRow(dbConstants.dbTables.authDb), ["Token"])
                    .then(() => {
                        console.log("Expired token was deleted");
                    })
                    .catch((error) => {
                        console.log(error);
                    });
                isAuth = false;
            } else {
                isAuth = true;
            }
        })
        .catch((error) => {
            console.log(error);
            isAuth = false;
        });

    return isAuth;
};

const authService = {
    isAuthenticated,
    loginUser,
};

export default authService;
