CREATE DATABASE url_database; 

DROP TABLE url CASCADE;

CREATE TABLE url (
    url_id SERIAL PRIMARY KEY,
    url_text VARCHAR(2083)
);