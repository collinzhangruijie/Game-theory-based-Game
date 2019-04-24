export class Gamedata {
    constructor() {
        this.get();
    }

    get() {
        let mysql = require('mysql');
        let data = {};
        let con = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '123456',
            database: 'playerdata'
        });

        con.connect(function (err) {
            if (err) throw err;
            let sql = "SELECT * FROM players"
            con.query(sql, function (err, result) {
                if (err) throw err;
                data = result;
                con.end();
            });
        });
        console.log(data);
    }
};

new Gamedata()
