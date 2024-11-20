dropdb fullStack
createdb fullStack
psql -d fullStack -f ./schema.sql
psql -d fullStack -f ./data.sql
