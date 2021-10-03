import express from "express"

export const createServer = client => {
    const app = express()

    app.get("/", (_, res) => {
        res.send(`${client.user.username} says hello`)
    })

    return app
}