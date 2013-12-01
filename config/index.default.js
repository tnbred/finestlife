
var env = process.env;

module.exports = {
  FinestLife: {
    port : env.PORT ? parseInt(env.PORT, 10) : port
  },
  Mongo: {
    url : env.MONGO_URL ? parseInt(env.PORT, 10) : mongo_url
  }
};
