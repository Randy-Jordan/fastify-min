console.log('Starting Sever at', new Date(new Date()-3600*1000*3).toISOString());

import { connectToDatabase } from './db/index.js';

const db = await connectToDatabase();
