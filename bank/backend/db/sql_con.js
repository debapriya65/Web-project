import mysql from 'mysql';
const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '28550093',
	database: 'webproject'
});
export var   con=mysql.createConnection(connection);