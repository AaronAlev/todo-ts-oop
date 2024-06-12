import express from 'express'
import {Request, Response, NextFunction} from 'express'
import todoRoutes from './routes/todos'
import { json } from 'body-parser'
import { error } from 'console'

const app = express()

app.use(json())
app.use('/todos', todoRoutes)

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    res.json({message: error.message})
})

app.listen(3011, () => {
    console.log('Suspicious activity detected on port 3011')
})