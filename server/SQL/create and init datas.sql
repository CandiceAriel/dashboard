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

INSERT INTO status(status)
VALUES ('To Do');

INSERT INTO status(status)
VALUES ('In Progress');

INSERT INTO status(status)
VALUES ('On Review');

INSERT INTO status(status)
VALUES ('Done');

SELECT * FROM status;