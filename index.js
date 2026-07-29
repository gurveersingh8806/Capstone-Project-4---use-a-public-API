import express from "express";
import axios from "axios";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));

let cachedQuote = null;

app.get("/", async (req, res) => {
    try {
        if (cachedQuote) {
            return res.render("index", cachedQuote);
        }

        const response = await axios.get("https://api.animechan.io/v1/quotes/random");

        cachedQuote = {
            content: response.data.data.content,
            name: response.data.data.anime.name,
            speaker: response.data.data.character.name
        };

        res.render("index", cachedQuote);
    } catch (error) {
        console.error(error);

        if (!cachedQuote) {
            cachedQuote = {
                content: "A true hero is someone who gives everything for the people they love.",
                name: "Naruto Uzumaki",
                speaker: "Naruto"
            };
        }

        res.render("index", cachedQuote);
    }
});

app.listen(3000, () => {
    console.log("Server is on.");
});