const express = require('express');
const db = require("./config");
const app = express();
const cors = require("cors");
app.use(cors());

app.get('/', (req, res) => {
  res.send('Successful response.');
});

app.get("/ts", async (req, res) => {
    const snapshot = await db.collection("ClassA").limit(10).get();
    const time = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data()}));
    time.reverse()
    res.send(time);
}); 


app.listen(3000, () => console.log('Example app is listening on port 3000.'));