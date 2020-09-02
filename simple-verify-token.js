const jwt = require('jsonwebtoken');
const JWT_SECRET = 'thisSecret';

// generate jwt toke from node expire-async.js or other.

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Im5hbWUiOiJSb3N5aWQiLCJlbWFpIjoicm9zeWlkQGFiYy5jb20ifSwiaWF0IjoxNTk5MDMxNDQxLCJleHAiOjE1OTkwMzE1MDF9.8Mslobmyi6PrK-yeqk27XotBPu8VMIFCj9Npme7XEVg';

jwt.verify(token, JWT_SECRET, (err, decoded) => {
  if (err) {
    console.log(err.message);
  }
  console.log(decoded);
});

console.log('Welcome');

// jwt verify with async
