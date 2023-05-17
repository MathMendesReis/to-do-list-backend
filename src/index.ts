import express from 'express'
import cors from 'cors'
import { userRouter } from './router/userRouter'
import { taskRouter } from './router/taskRouter'


const app = express()

app.use(cors())
app.use(express.json())

app.listen(process.env.PORT || 3003, () => {
    console.log(`Servidor rodando na porta ${3003}`)
})

app.use("/users", userRouter)
app.use("/task", taskRouter)

