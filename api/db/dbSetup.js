import mysql from 'mysql2/promise'; // Use mysql2 with promise support
import * as config from "../config/config.js";

export const setupDatabase = async () => {
  try {
    // Connect to the server
    const db = await mysql.createConnection({
      host: config.MYSQL_HOST,
      user: config.MYSQL_USER,
      password: config.MYSQL_PASSWORD,
      port: config.MYSQL_PORT,
    });

    // Create the database if it doesn't exist
    await db.query(`CREATE DATABASE IF NOT EXISTS ${config.MYSQL_DATABASE}`);
    console.log(`Database created or already exists`);

    // Use the created database
    await db.query(`USE ${config.MYSQL_DATABASE}`);

    // Create `users` table
    await db.query(`CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      username VARCHAR(45) NOT NULL,
      email VARCHAR(255) NOT NULL,
      password VARCHAR(255) NOT NULL,
      img VARCHAR(255)
    )`);

    // Create `posts` table
    await db.query(`CREATE TABLE IF NOT EXISTS posts (
      id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      description VARCHAR(1000) NOT NULL,
      img VARCHAR(255) NOT NULL,
      date DATETIME NOT NULL,
      uid INT NOT NULL,
      CONSTRAINT fk_uid FOREIGN KEY (uid)
      REFERENCES users(id)
      ON DELETE CASCADE
      ON UPDATE CASCADE
    )`);

    // Close the database connection
    await db.end();
    console.log("Tables are created or already exist");
  } catch (error) {
    console.error("Error in setting up database:", error);
  }
};
