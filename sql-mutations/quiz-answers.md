# Quiz Answers

- What are the SQL _CRUD_ operations?
  - Select, Insert, Update, Delete
- How do you add a row to a SQL table?
  - To add a row to a SQL table, you would use the `insert` statement.
- How do you add multiple rows to a SQL table at once?
  - To add multiple rows to a table, you would add a comma after each entry for values.
- How do you update rows in a database table?
  - To update rows in a database table, you would use the `update` statement.
- How do you delete rows from a database table?
  - To delete rows from a table, you would use the `delete` statement along with the `where` clause.
- Why is it important to include a `where` clause in your `update` and `delete` statements?
  - It's important to include a `where` clause so that you don't update or delete everything in the table.
- How do you accidentally delete or update all rows in a table?
  - By not including a `where` clause, you will delete or update all rows in a table.
- How do you get back the modified row without a separate `select` statement?
  - You can use the `returning` clause to get back the modified row.
- Why did you get an error when trying to delete certain films?
  - Deletion would have violated a foreign key constraint. The column `filmId` in the `castMembers` table references the `filmId` column in the `films` table, and deleting the row in `films` would have made that reference invalid.
