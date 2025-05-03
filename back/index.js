const { Client } = require('pg');

const client = new Client({
  host: 'db',
  port: 5432,
  user: 'user',
  password: 'password',
  database: 'mydb',
})

client.connect()
  .then(() => {
    console.log('Connected!');

    return client.query('SELECT NOW()');
  })
  .then((res) => {
    console.log(`Current time is `, res.rows[0]);
  })
  .catch((err) => {
    console.error(err);
  })
  .finally(() => client.end());
