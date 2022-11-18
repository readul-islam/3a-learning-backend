const colors = require("colors");
require("dotenv").config();
const app = require("./app");
const dbConncet = require("./db/dbConnect");
const port = process.env.PORT || 5000;

dbConncet()





app.listen(port, () => {
console.log(`server listening on ${port}`.rainbow);

});
