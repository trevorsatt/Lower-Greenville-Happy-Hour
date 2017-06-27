const express = require('express')
const app = express()

// 'use strict';

app.use(express.static('css')); // contains css
app.use(express.static('photos')); // contains images
app.use(express.static('javascript')); // contains images
app.use(express.static('views')); //contains mainpage.html
app.use(express.static('bower_components')); // contains bootstrap stuff


// ============================ yelp stuff ============================================
// const yelp = require('yelp-fusion');

// // Place holders for Yelp Fusion's OAuth 2.0 credentials. Grab them
// // from https://www.yelp.com/developers/v3/manage_app
// const clientId = 'IjrLJ2kOUgRAudPjZfwTlw';
// const clientSecret = 'KBouv7MNpgk0Eled1p94KdIOetyFkqyLFmsNVeyErvdjsjsM7mPlcqKyqF4Z1vf2';

// const searchRequest = {
//     term: 'libertine bar',
//     location: 'dallas, tx'
// };

// yelp.accessToken(clientId, clientSecret).then(response => {
//     const client = yelp.client(response.jsonBody.access_token);

//     client.search(searchRequest).then(response => {
//         const firstResult = response.jsonBody.businesses[0].rating;
//         const prettyJson = JSON.stringify(firstResult, null, 4);
//         console.log(prettyJson);

//     });
// }).catch(e => {
//     console.log(e);
// });

// ====================================================================================

// const express = require('express')
// const app = express()

// app.get('/', function (req, res) {
//   res.send('Hello World!')
// })

app.listen(8080, function() {
    console.log('Example app listening on port 8080!')
})
