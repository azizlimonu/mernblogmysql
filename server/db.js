import mysql from 'mysql';
export const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"azizlimonu2020@",
  databse:"blog"
});