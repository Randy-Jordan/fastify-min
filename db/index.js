import pg from 'pg'

const { Pool, Client } = pg
 
async function connectToDatabase(){
console.log("Connecting to database... ")

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
})

try {
  const client = await pool.connect()
  const res = await client.query('SELECT NOW()')
  console.log("Connection success at:",res.rows[0].now)
  await client.end()
} catch (error) {
  console.error("Failed to establish database connection:", error.message);
}


  return pool
}


export { connectToDatabase};
