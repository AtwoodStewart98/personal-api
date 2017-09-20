const user = require("../user.js");
const skills = require("../skills.js");

const getName = (req, res, next) => {
  res.json({ name: user.name });
};

const getLocation = (req, res, next) => {
  res.json({ location: user.location });
};

const getOccupations = (req, res, next) => {
  res.json({ occupations: user.occupations });
};

const getLatest = (req, res, next) => {
  res.json({ latestOccupation: user.occupations.slice(-1).toString() });
};

const getHobbies = (req, res, next) => {
  res.json({ hobbies: user.hobbies });
};

const getHobbyType = (req, res, next) => {
  if (req.params.type) {
    res.json(user.hobbies.filter(hobby => hobby.type === req.params.type));
  } else {
    res.json("Nope");
  }
};

const getFamily = (req, res, next) => {
  if (req.query.relation) {
    res.json(
      user.family.filter(member => member.relation === req.query.relation)
    );
  } else {
    res.json({ family: user.family });
  }
};

const getGender = (req, res, next) => {
  if (req.params.gender) {
    res.json(user.family.filter(bloke => bloke.gender === req.params.gender));
  } else {
    res.json("Nope");
  }
};

const getLauncher = (req, res, next) => {
  if (req.query.rating) {
    res.json(
      user.launchers.filter(rocket => rocket.rating === req.query.rating)
    );
  } else {
    res.json({ launchers: user.launchers });
  }
};

const getLauncherName = (req, res, next) => {
  if (req.params.name) {
    res.json(user.launchers.filter(rocket => rocket.name === req.params.name));
  } else {
    res.json("Nope");
  }
};

const putName = (req, res, next) => {
  user.name = req.body.name;
  res.json(user.name);
};

const putLocation = (req, res, next) => {
  user.location = req.body.location;
  res.json(user.location);
};

const addHobby = (req, res, next) => {
  if (req.body.name && req.body.type) {
    user.hobbies.push(req.body);
    res.json(user.hobbies);
  } else {
    return res.status(418).json({ err: "Needs name and type" });
  }
};

const addOccupation = (req, res, next) => {
  user.occupations.push(req.body.occupation);
  res.json(user.occupations);
};

const addMember = (req, res, next) => {
  if (req.body.name && req.body.relation && req.body.gender) {
    user.family.push(req.body);
    res.json(user.family);
  } else {
    return res.status(418).json({ err: "Needs name, relation and gender" });
  }
};

const addLauncher = (req, res, next) => {
  if (req.body.name && req.body.type && req.body.rating) {
    user.launchers.push(req.body);
    res.json(user.launchers);
  } else {
    return res.status(418).json({ err: "Needs name, type and rating" });
  }
};

const getSkills = (req, res, next) => {
  if (req.query.experience) {
    res.json(skills.filter(level => level.experience === req.query.experience));
  } else {
    console.log("Hit");
    res.json({ skills: skills });
  }
};

const addSkills = (req, res, next) => {
  if (req.body.name && req.body.experience) {
    console.log("Hit");
    let id = skills.length + 1;
    skills.push({
      id: id,
      name: req.body.name,
      experience: req.body.experience
    });
    res.json(skills);
  } else {
    return res.status(418).json({ err: "U sux" });
  }
};

module.exports = {
  getName,
  getLocation,
  getOccupations,
  getLatest,
  getHobbies,
  getHobbyType,
  getFamily,
  getGender,
  getLauncher,
  getLauncherName,
  putName,
  putLocation,
  addHobby,
  addOccupation,
  addMember,
  addLauncher,
  getSkills,
  addSkills
};
