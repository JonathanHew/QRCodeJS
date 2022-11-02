const express = require("express");
const app = express();
const cors = require("cors");
const qr = require("qrcode");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

app.listen(5002, () => {
  console.log("server has started on port 5002!");
});

//ROUTES
//create a url code
app.post("/scan", async (req, res) => {
  try {
    const { url_text } = req.body;
    console.log(req.body);
    const newURL = await pool.query(
      "INSERT INTO url (url_text) VALUES ($1) RETURNING *",
      [url_text]
    );

    res.json(newURL.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
  /*
    if (url.length === 0) {
        res.send("Empty Data!");
    }
    

    
    qr.toDataURL(url, (err, src) => {
        if (err) {
        res.send("Error occured");
        }

        console.log(src);
        res.json(src);
    });
    */
});


//get all URLs 
app.get("/scan", async (req, res) => {
    try {
      const allURLs = await pool.query("SELECT * FROM url");
      res.json(allURLs.rows);
    } catch (err) {
      console.error(err.message);
    }
  });

  //get specific url
  app.get("/scan/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const url = await pool.query("SELECT * FROM url WHERE url_id = $1", [
        id,
      ]);
  
      //res.json(url.rows[0]);
      qr.toDataURL(url.rows[0].url_text, (err, src) => {
        if (err) {
        res.send("Error occured");
        }

        //console.log(src);
        res.json(src);
    });
    } catch (err) {
      console.log(err.message);
    }
  });

  //update a url
  app.put("/scan/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { url_text } = req.body;
      const updateURL = await pool.query(
        "UPDATE url SET url_text = $1 WHERE url_id = $2",
        [url_text, id]
      );
  
      res.json("url was updated!");
    } catch (err) {
      console.log(err.message);
    }
  });

  //delete a url

  //delete a todo
app.delete("/scan/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deleteURL = await pool.query("DELETE FROM url WHERE url_id = $1", [
        id,
      ]);
  
      res.json("url was deleted!");
    } catch (err) {
      console.log(err.message);
    }
  });

 