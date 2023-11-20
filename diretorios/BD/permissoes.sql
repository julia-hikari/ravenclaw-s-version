select user from mysql.user;
create user 'userPI'@'localhost' identified by 'Gf01232070';
grant SELECT, INSERT, UPDATE, DELETE ON projetoHP . * TO 'userPI'@'localhost';