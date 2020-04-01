const App = require('./app')
const port = process.env.PORT || 3000

App.listen(port, () => {
  console.log(`Server start... in port ${port}`)
})
