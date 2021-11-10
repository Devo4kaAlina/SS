# Node.js + docker + postgres

## Steps:

- touch .env & cp .env.example .env
- docker-compose up --build

## Go to http://localhost:8080/?pgsql=db

- select `postgres` database and login as `postgres/example`
- go to http://localhost:8080/?pgsql=db&username=postgres&db=postgres&ns=public&sql=
- run comands from `app-api/src/db/database.sql` file
