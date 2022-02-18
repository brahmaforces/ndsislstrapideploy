module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd3ca1272abb5626b0d0b7d46a8321cc4'),
  },
});
