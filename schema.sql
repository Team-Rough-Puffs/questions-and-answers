-- Drop existing tables --
DROP TABLE IF EXISTS questions, answers, answers_photos;

-- Create a table for questions --
CREATE TABLE questions (
  id SERIAL NOT NULL PRIMARY KEY,
  product_id INT,
  body TEXT,
  date_written DATE,
  asker_name TEXT,
  asker_email TEXT,
  reported INT,
  helpful INT
);

-- Create a table for answers --
CREATE TABLE answers (
  id SERIAL NOT NULL PRIMARY KEY,
  questions_id INT NOT NULL,
  body TEXT,
  date_written DATE,
  answerer_name TEXT,
  answerer_email TEXT,
  reported INT,
  helpful INT,
  FOREIGN KEY (questions_id)
    REFERENCES questions(id)
);

-- Create a table for answers_photos --
CREATE TABLE answers_photos (
  id SERIAL NOT NULL PRIMARY KEY,
  answers_id INT NOT NULL,
  url TEXT,
  FOREIGN KEY (answers_id)
    REFERENCES answers(id)
);

-- Import CSV files into tables --
COPY questions(id, product_id, body, date_written, asker_name, asker_email, reported, helpful)
FROM '/Users/tyna/dev/sdc/questions-and-answers/csv/questions.csv'
DELIMITER ','
CSV HEADER;

COPY answers(id, questions_id, body, date_written, answerer_name, answerer_email, reported, helpful)
FROM '/Users/tyna/dev/sdc/questions-and-answers/csv/answers.csv'
DELIMITER ','
CSV HEADER;

COPY answers_photos(id, answers_id, url)
FROM '/Users/tyna/dev/sdc/questions-and-answers/csv/answers_photos.csv'
DELIMITER ','
CSV HEADER;