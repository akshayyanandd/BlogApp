import { db } from "../db/db.js";
import bcrypt from "bcryptjs"// Ensure bcrypt is imported
import jwt from 'jsonwebtoken'
export const register = async (req, res) => {
  // Check if the user already exists
  console.log(req.body);
  const q = "SELECT * FROM users WHERE email = ? OR username = ?";
  
  // Query the database
  db.query(q, [req.body.email, req.body.username], async (err, data) => {
    if (err) return res.status(500).json({ message: "Error in register", err });
    if (data.length) return res.status(409).json("User already exists");

    try {
      // Hash the password asynchronously
      const salt = await bcrypt.genSalt(10); // Await the salt generation
      const hash = await bcrypt.hash(req.body.password, salt); // Await the hashing process

      // Insert the new user into the database
      const insertQuery = "INSERT INTO users (`username`, `email`, `password`) VALUES (?)";
      const values = [req.body.username, req.body.email, hash];
      
      db.query(insertQuery, [values], (err, data) => {
        if (err) return res.status(500).json({ message: "Cannot insert data", err });
        return res.status(200).json({message:"User is created",data});
      });
    } catch (err) {
      return res.status(500).json({ message: "Error in password hashing", err });
    }
  });
};


export const login = (req, res) => {
  //CHECK IF USER EXIST
  const q="SELECT * FROM users WHERE username=?"
  db.query(q,[req.body.username],(err,data)=>{
    if(err) return res.status(500).json(err)
      if(data.length===0)return res.status(404).json("User not found")

    //CHECK PASSWORD
    const isPasswordCorrect=bcrypt.compareSync(req.body.password,data[0].password)
    if(!isPasswordCorrect) return res.status(400).json("wrong username or password")

    //Create token
    const token=jwt.sign({id:data[0].id},"jwtkey")
    const {password,...other}=data[0]
    res.cookie("access_token",token,{
      httpOnly:true,
    }).status(200).json(other);
  })
};

export const logout = (req, res) => {
  res.clearCookie("access_token",{
    sameSite:"none",
    secure:true
  }).status(200).json("User has been logged out.")
};
