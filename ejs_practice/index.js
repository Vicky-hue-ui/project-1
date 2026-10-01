import express from "express";
const app = express();
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


const song = [
  {
    "name": "Shape of You",
    "artist": "Ed Sheeran",
    "album": "Divide"
  },
  {
    "name": "Blinding Lights",
    "artist": "The Weeknd",
    "album": "After Hours"
  },
{
    "name": "Levitating",
    "artist": "Dua Lipa",
    "album": "Future Nostalgia"
},
{
    "name": "Watermelon Sugar",
    "artist": "Harry Styles",
    "album": "Fine Line"
},
];

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home",{
    appName : "soundwave 3.0",
    slogan : "Feel the Beat, Embrace the Rhythm",
  });
  })

app.get("/songs", (req, res) => {
  res.render("songs",{
    song : song,
  });
  })

  
