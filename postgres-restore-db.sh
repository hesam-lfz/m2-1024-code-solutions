# start in the `sql-mutations` directory
dropdb pagila
createdb pagila
psql -d pagila -f ../postgres-database/schema.sql
psql -d pagila -f ../postgres-database/data.sql
