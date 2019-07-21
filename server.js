const express = require('express');
const fs = require('fs');

const app = express();


// this is enough to server all the static content.
// u dont need to add any routes for serving static content.
app.use( express.static('./build/'));


// app.get('*', (req,res,next) => {
//     fs.createReadStream('./build/index.html').pipe(res);
// })


app.listen( 3200, () => console.log('Listening at port 3200'));