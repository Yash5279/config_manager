-- SQL script to create the configurations table if it does not exist
CREATE TABLE IF NOT EXISTS configurations (
    id SERIAL PRIMARY KEY,
    country_code VARCHAR(2) UNIQUE NOT NULL,
    requirements JSON NOT NULL
);
