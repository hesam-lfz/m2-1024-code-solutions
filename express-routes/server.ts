import express from 'express';

const app = express();

app.use((req, res, next) => {
  console.log('use', String(new Date()), req.method, req.path);
  next();
});

app.get('/', (req, res) => {
  res.send('Getting /');
});

app.get('/notes', (req, res) => {
  res.send('Getting /notes');
});

app.post('/notes/:noteId', (req, res) => {
  const { noteId } = req.params;
  res.send(`Posting /notes/${noteId}`);
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});

/*
  http localhost:8080/
  http localhost:8080/notes/
  http GET localhost:8080/notes/
  http POST localhost:8080/notes/blah
*/
