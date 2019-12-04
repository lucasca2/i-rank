require('dotenv/config');

// docker run --name irank-database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres

module.exports = {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  }
};
