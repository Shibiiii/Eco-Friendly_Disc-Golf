const { GraphQLError } = require('graphql');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.JWT_SECRET || 'secret';
const expiration = '2h';

module.exports = {
  AuthenticationError: function (message = 'Could not authenticate user.') {
    return new GraphQLError(message, {
      extensions: {
        code: 'UNAUTHENTICATED',
      },
    });
  },
  authMiddleware: function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
    }

    return req;
  },
  signToken: function ({ email, name, id }) {
    const payload = { email, name, id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
