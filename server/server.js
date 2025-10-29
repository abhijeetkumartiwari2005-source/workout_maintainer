const path = require('path')
const express = require('express')

const app = express()
const port = process.env.PORT || 3000

// Simple API endpoint
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from server' })
})

// Serve client build in production if present
const clientDist = path.join(__dirname, '..', 'client', 'dist')
app.use(express.static(clientDist))

// Fallback handler: don't use a wildcard route string (some path-to-regexp
// versions throw on '*' patterns). Use an express middleware instead.
const fs = require('fs')
app.use((req, res) => {
  // If the request is for an API route, return 404
  if (req.path.startsWith('/api/')) return res.status(404).json({ error: 'Not found' })

  // Otherwise try to serve index.html from client/dist
  const indexPath = path.join(clientDist, 'index.html')
  if (fs.existsSync(indexPath)) {
    return res.sendFile(indexPath)
  }

  res.status(200).send('Server is running. Build the client into client/dist to serve the UI.')
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})
