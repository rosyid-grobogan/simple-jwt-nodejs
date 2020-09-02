const jwt = require('jsonwebtoken');
const JWT_SECRET = 'thisSecret';

jwt.sign(
  {
    data: {
      name: 'Rosyid',
      emai: 'rosyid@abc.com',
    },
  },
  JWT_SECRET,
  { expiresIn: '1m' },
  (err, token) => {
    console.log(token);
  }
);

console.log('Welcome');

// Expire: 1 minute
