import {db} from "../db/db.js"
export const register=(req,res)=>{
    //check existing user
    const q="select * from users where email =? or username=?"
    db.query(q,[req.body.email,req.body.name],(err,data)=>{
        if(err) return res.status(500).json(err);
        if(data.length)return res.status(409).json("user already exists")
    })
}
export const login=(req,res)=>{
    
}
export const logout=(req,res)=>{
    
}