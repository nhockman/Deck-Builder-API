var mysql = require('mysql2');

const CreateNewAccount = (data) => {
    
    var conn = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "N_Hock99!1",
        database: "deck_Builder"
    });

    const lastName = data.lastName;
    const firstName = data.firstName;
    const username = data.username;
    const password = data.password;
    const email = data.email;
    const phone = data.phone;
    const birthDate = data.birthDate;

    conn.connect((err) => {
        if (err) throw err;

        

        var sql = `INSERT INTO deck_builder.useraccount (accountUsername,accountPassword,firstName,lastName,email,phoneNumber,birthDate) 
        VALUES (
            '${username}','${password}','${firstName}','${lastName}','${email}','${phone}','${birthDate}'
        )`;
        conn.query(sql, (err, result) => {
            if (err) throw err;
           
        });
    });

    
}

const CheckIfUserExits = (data) => {
    return new Promise(resolve => {
        const email = data.email;
        const username = data.username;

        var conn = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "N_Hock99!1",
            database: "deck_Builder"
        });

        conn.connect((err) => {
            if (err) throw err;
            
            var sql = `SELECT * FROM deck_builder.useraccount WHERE accountUsername = '${username}' OR email = '${email}'`;

            conn.query(sql, (err, result, fields) => {
                if (err) throw err;


                if (result === null || result === undefined || result === [] || result.length === 0) {
                    console.log("New")
                    resolve(false);
                } else {        
                    console.log("Exists");      
                    resolve(true);
                }
                
        
            });
        });
    }); 
}

const AuthorizeUser = (username, password) => {
    return new Promise(resolve => {

        var conn = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "N_Hock99!1",
            database: "deck_Builder"
        });

        conn.connect((err) => {
            if (err) throw err;
            
            var sql = `SELECT * FROM deck_builder.useraccount WHERE accountUsername = '${username}' AND accountPassword = '${password}'`;

            conn.query(sql, (err, result, fields) => {
                if (err) throw err;
                console.log(result);

                if (result === null || result === undefined || result === [] || result.length === 0) {
                    console.log("denied")
                    resolve(false);
                } else {        
                    console.log("authorized");      
                    resolve(true);
                }
                
        
            });
        });
    }); 
}

exports.AuthorizeUser = AuthorizeUser;
exports.CreateNewAccount = CreateNewAccount;
exports.CheckIfUserExits = CheckIfUserExits;