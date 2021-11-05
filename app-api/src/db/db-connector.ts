import { Pool } from 'pg';

class DBClass {
  pool: Pool;

  constructor() {
    this.pool = new Pool({
      user: 'postgres',
      password: 'example',
      port: 5432,
      database: 'postgres',
      host: 'postgres_db',
    });
  }

  async dbConnect() {
    await this.pool.connect((err) => {
      if (err) throw new Error(JSON.stringify(err));
      console.log('=== BD is connected');
    });
  }

  async query(sql: string) {
    const client = await this.pool.connect();
    const data = await client.query(sql);

    client.release();

    return data;
  }
}

export const DB = new DBClass();
