module.exports = {
  development: {
    username: "root",
    password: "password",
    database: "portfolio_db",
    host: "localhost",
    dialect: "mysql"
  },
  test: {
    username: process.env.USER,
    password: process.env.PASS,
    database: process.env.NAME_TEST,
    host: process.env.DB_HOST,
    dialect: "mysql",
    logging: false
  },
  production: {
    use_env_variable: "JAWSDB_URL",
    dialect: "mysql"
  }
};
