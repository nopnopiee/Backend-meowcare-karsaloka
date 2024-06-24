// import express from 'express';
// import dotenv from 'dotenv';
// import cors from 'cors';
// import { testConnection } from './database/db.js';
// import router from './route/index.js';

// const app = express();
// const port = 5000;
// dotenv.config();
// app.use(cors());
// app.use(express.json());
// app.use('/api', router);

// app.get('/api/hello', (req, res) => {
//     res.send({ message: 'Hello from server!' });
// });

// app.listen(port, () => {
//     testConnection();
//     console.log(`Server is running at http://localhost:${port}`);
// });

import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { testConnection} from './database/db.js'
import router from './route/index.js'

const app = express()
dotenv.config()
app.use(cors())
app.use(express.json())

app.use(router)

app.get('/api/hello', (req, res) => {
    res.send({ message: 'Hello from server!' });
});

app.listen(process.env.APP_PORT, ()=>{
    testConnection()
    console.log(`Server is running at http://localhost:${process.env.APP_PORT}`)
})