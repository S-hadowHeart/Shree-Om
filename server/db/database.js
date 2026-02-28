const mysql = require("mysql2/promise");

const DB_CONFIG = {
    host: "localhost",
    user: "root",
    password: "",
    port: 3306,
};

const DB_NAME = "shree_om_hardware";

let db;

async function connectDB() {
    try {
        const connection = await mysql.createConnection(DB_CONFIG);
        await connection.execute(`CREATE DATABASE IF NOT EXISTS \`${DB_NAME}\``);
        await connection.end();

        db = await mysql.createConnection({ ...DB_CONFIG, database: DB_NAME });

        await db.execute(`
      CREATE TABLE IF NOT EXISTS users (
        id                  INT AUTO_INCREMENT PRIMARY KEY,
        name                VARCHAR(100)  NOT NULL,
        email               VARCHAR(150)  NOT NULL UNIQUE,
        phone               VARCHAR(15)   NOT NULL,
        password            VARCHAR(255)  NOT NULL,
        role                ENUM('user','admin') NOT NULL DEFAULT 'user',
        is_verified         TINYINT(1)    NOT NULL DEFAULT 0,
        verify_token        VARCHAR(255)  DEFAULT NULL,
        reset_token         VARCHAR(255)  DEFAULT NULL,
        reset_token_expiry  DATETIME      DEFAULT NULL,
        created_at          TIMESTAMP     DEFAULT CURRENT_TIMESTAMP
      )
    `);

        const alterColumns = [
            "ALTER TABLE users ADD COLUMN is_verified TINYINT(1) NOT NULL DEFAULT 0",
            "ALTER TABLE users ADD COLUMN verify_token VARCHAR(255) DEFAULT NULL",
            "ALTER TABLE users ADD COLUMN reset_token VARCHAR(255) DEFAULT NULL",
            "ALTER TABLE users ADD COLUMN reset_token_expiry DATETIME DEFAULT NULL",
        ];
        for (const sql of alterColumns) {
            try { await db.execute(sql); } catch (_) { }
        }


        await db.execute(`
      CREATE TABLE IF NOT EXISTS contacts (
        id          INT AUTO_INCREMENT PRIMARY KEY,
        name        VARCHAR(100)  NOT NULL,
        email       VARCHAR(150)  NOT NULL,
        phone       VARCHAR(15)   NOT NULL,
        subject     VARCHAR(255)  NOT NULL,
        message     TEXT          NOT NULL,
        created_at  TIMESTAMP     DEFAULT CURRENT_TIMESTAMP
      )
    `);

        console.log("✅ MySQL connected — database and tables ready");
        return db;
    } catch (error) {
        console.error("❌ MySQL connection failed:", error.message);
        process.exit(1);
    }
}

module.exports = { connectDB, getDB: () => db };
