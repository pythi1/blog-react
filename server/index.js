const express = require("express");
const cors = require("cors");
const blogs = require("./api/blogData.json")

const app = express();

app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
    res.send("blog server is running...on port: 5000");
} );

app.get("/blogs", (req, res) => {
    res.send(blogs);
})

app.get('/blogs/:id', (req, res) => {
    const id = parseInt(req.params.id);
    // console.log(id)
    const blog = blogs.filter(b => b.id === id);
    // console.log(blog)
    res.send(blog)
  })



app.listen("5000", () => {
    console.log(`chal gya bhai chal gya... 5000 pe chla hai`);
})