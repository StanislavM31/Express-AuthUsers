require("dotenv").config();

const app = require("./src/app");
const port = process.env.PORT;
app.listen(process.env.PORT, ()=>{
    console.log('server on port 3000');
})