import express from "express"
const app = express()

const PORT = 3000

const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`)

const handleHome = (req, res) => res.send('Hello WTSK!')

const handleProfile = (req, res) => res.send('Hello Profile')

app.get('/', handleHome)
app.get('/profile', handleProfile)

app.listen(PORT, handleListening)