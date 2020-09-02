const jwt = require('jsonwebtoken');
const JWT_SECRET = 'thisSecret';

const token = jwt.sign(
  {
    data: {
      name: 'Rosyid',
      email: 'rosyid@abc.com',
    },
  },
  JWT_SECRET
);

console.log(token);
console.log('Welcome');
