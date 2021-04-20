import express from "express"

import "./database"

const app = express()
import { routes } from './routes'

app.use(express.json())
app.use(routes)

app.listen(3333, () => console.log(`Server is running on port 3333`))