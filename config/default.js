require('dotenv').config();


module.exports = {
    "server": {
        "db": {
            "createConn": {
                "host": `${process.env.DB_HOST}`,
                "user": "root",
                "password": `${process.env.DB_PASS}`,
                "database": "schedule"
            }
        },
        "fb": {
            "defaults": {
                "protocol": "http",
                "host": "localhost:3000"
            },
            "facebook": {
                "key": "503016890224155",
                "secret": "f665494839fd3eade6fbf6ece877eced",
                "callback": "/loading",
            }
        },
    },
    "client": {},
};
