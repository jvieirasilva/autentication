var express = require('express');
var app = express();

app.get('/', (req, res) => {
  res.send('Hellow World!')

})

app.listen(3000, () => {
    console.log('Server running on port 3000')
})
