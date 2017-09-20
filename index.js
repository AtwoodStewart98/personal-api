const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const port = 3200;

const app = express();

app.use(bodyParser.json());
app.use(cors());

const main_ctrl = require("./controllers/main_ctrl.js");

app.get("/api/name", main_ctrl.getName);
app.get("/api/location", main_ctrl.getLocation);
app.get("/api/occupations", main_ctrl.getOccupations);
app.get("/api/occupations/latest", main_ctrl.getLatest);
app.get("/api/hobbies", main_ctrl.getHobbies);
app.get("/api/hobbies/:type", main_ctrl.getHobbyType);
app.get("/api/family", main_ctrl.getFamily);
app.get("/api/family/:gender", main_ctrl.getGender);
app.get("/api/launchers", main_ctrl.getLauncher);
app.get("/api/launchers/:name", main_ctrl.getLauncherName);

app.put("/api/name", main_ctrl.putName);
app.put("/api/location", main_ctrl.putLocation);

app.post("/api/hobbies", main_ctrl.addHobby);
app.post("/api/occupations", main_ctrl.addOccupation);
app.post("/api/family", main_ctrl.addMember);
app.post("/api/launchers", main_ctrl.addLauncher);

app.get("/api/skills", main_ctrl.getSkills);

app.post("/api/skills", main_ctrl.addSkills);

app.listen(port, () => {
  console.log(`Listening on Port: ${port}`);
});
