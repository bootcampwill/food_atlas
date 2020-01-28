PGHOST = 'http://foodatlas.cvc7tm9vqggx.us-east-2.rds.amazonaws.com/'
PGUSER = postgres
PGDATABASE = process.env.USER
PGPASSWORD = nacRackE
PGPORT = 5432

const { Pool, Client } = require('pg')
// pools will use environment variables
// for connection information
const pool = new Pool()
pool.query('SELECT NOW()', (err, res) => {
    console.log(err, res)
    pool.end()
})


// clients will also use environment variables
// for connection information
const client = new Client()
await client.connect()
const res = await client.query('SELECT NOW()')
await client.end()