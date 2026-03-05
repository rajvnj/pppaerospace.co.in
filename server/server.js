const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

app.post('/enquiry',(req,res)=>{

console.log(req.body)

res.json({
message:"enquiry received"
})

})

app.listen(3000,()=>{

console.log("Server running")

})