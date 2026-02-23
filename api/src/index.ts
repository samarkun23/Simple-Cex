
import express from 'express'
import { mainRoute } from './routes/main.js';

const PORT = 3000
const app = express();

app.use("/api/v1", mainRoute)

app.listen(PORT, () => {
    console.log("Server running on port", PORT)
})

