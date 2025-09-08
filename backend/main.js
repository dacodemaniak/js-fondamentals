const express = require('express')
const taskRoutes = require('./src/tasks/taskRoutes')


const app = express()
const PORT = process.env.PORT || 3000

// JSON Middleware
app.use(express.json({}))

// Routing
app.use('/tasks', taskRoutes)


// Error handling middleware
app.use((error, req, res, next) => {
    console.error(`Error was raised : ${error}`)
    // Send a 500 error
    res.status(500).json({
        message: 'Internal server error [' + error + ']'
    })
})

// Not found handling middleware
app.use((req, res, next) => {
    res.status(404).json({
        message: 'Requested resource was not found'
    })
})

app.listen(PORT, () => {
    console.log(`💥 API server is available on http://localhost:${PORT}/tasks`)
})

module.exports = app