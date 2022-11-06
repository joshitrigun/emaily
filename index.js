const express = require('express');

const app = express();

const PORT = process.env.PORT || 8008;

app.get('/', (req, res) => {
  res.send({
    hi: 'Trigun'
  })
})


app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
})
