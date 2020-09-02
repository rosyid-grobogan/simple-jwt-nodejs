const jwt = require('jsonwebtoken');
const JWT_SECRET = 'thisSecret';

jwt.sign(
  {
    data: {
      name: 'Rosyid',
      email: 'rosyid@abc.com',
    },
  },
  JWT_SECRET,
  (err, token) => {
    console.log(token);
  }
);

console.log('Welcome');
