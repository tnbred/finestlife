
var env = process.env;

module.exports = {
  FinestLife: {
    port : env.PORT ? parseInt(env.PORT, 10) : 1337
  }
};
