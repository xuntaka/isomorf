import express  from 'express';

const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

app.use((req, res) => {
  res.render('index', {
    title: 'Hey',
    message: 'Hello there!'
  });
  // res.end('<p>Hello World!</p>');
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on: ${PORT}`);
});
