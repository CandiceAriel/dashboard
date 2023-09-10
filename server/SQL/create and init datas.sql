use to_do;

CREATE TABLE status(
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    status text(100) NOT NULL
);

CREATE TABLE tasks(
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    task_status int,
    title text(10) NOT NULL,
    description text(100),
    CONSTRAINT FK_Status FOREIGN KEY (task_status) REFERENCES status(id)
);

INSERT INTO status(text)
VALUES ('toDo');

INSERT INTO status(status)
VALUES ('In Progress');

INSERT INTO status(status)
VALUES ('On Review');

INSERT INTO status(status)
VALUES ('Done');

SELECT * FROM tasks;

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '';
flush privileges;

INSERT INTO tasks(task_status, title, description)
VALUES (1, 'Meeting with Developer', 'Report on new updates');

INSERT INTO `to_do`.`tasks`
(`task_status`,
`title`,
`description`)
VALUES
(2,
"Feature Update",
"Add new feature");

