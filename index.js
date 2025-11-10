import express from "express";
import cors from "cors";
import records from "./routes/record.js";


const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use("/record", records);

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
