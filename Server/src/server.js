const app = require("./app")
const port = process.env.POR||8000

app.listen(port,()=>{
   console.log(`Server listening on port: ${port}`)
})