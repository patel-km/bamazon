DROP DATABASE IF EXISTS top_songsDB;

CREATE DATABASE top_songsDB;

USE top_songsDB;


CREATE TABLE songs (
    id INT NOT NULL AUTO_INCREMENT,
    artist VARCHAR(40) NULL,
    song VARCHAR(100) NULL,
    year INT NOT NULL,
    globalRating DECIMAL(10,4) NULL,
    USRating DECIMAL(10,4) NULL,
    UKRating DECIMAL(10,4) NULL,
    EURating DECIMAL(10,4) NULL,
    remainingRating DECIMAL(10,4) NULL,
    );
