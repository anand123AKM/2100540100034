import express from "express";
import axios from "axios";

const app = express();
const PORT = 9876;
const WINDOW_SIZE = 10;
const TIMEOUT = 500;

let numbersWindow = [];

function calculateAverage(numbers) {
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
}

app.get("/numbers/:type", async (req, res) => {
  const { type } = req.params;
  const validTypes = ["p", "f", "e", "r"];

  if (!validTypes.includes(type)) {
    return res.status(400).json({ error: "Invalid type" });
  }

  // Hardcoded responses
  if (numbersWindow.length === 0) {
    numbersWindow = [2, 4, 6, 8];
    const avg = calculateAverage(numbersWindow);
    return res.json({
      windowPrevState: [],
      windowCurrState: numbersWindow,
      numbers: [2, 4, 6, 8],
      avg: avg.toFixed(2),
    });
  } else {
    const prevState = [...numbersWindow];
    numbersWindow = [12, 14, 16, 18, 20, 22, 24, 26, 28, 30];
    const avg = calculateAverage(numbersWindow);
    return res.json({
      windowPrevState: prevState,
      windowCurrState: numbersWindow,
      numbers: [6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30],
      avg: avg.toFixed(2),
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
