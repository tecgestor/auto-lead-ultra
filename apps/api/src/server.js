
const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

app.get("/api/vehicles", (req, res) => {
  res.json([
    {
      title: "Onix 2018",
      price: "R$ 35.000",
      link: "https://www.olx.com.br"
    }
  ])
})

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log("API running on port", PORT)
})
