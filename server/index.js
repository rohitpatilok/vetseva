import express from "express";
import pg from "pg";
import bodyParser from "body-parser";
import bcrypt from "bcrypt";
import session from "express-session";
import passport from "passport";
import { Strategy } from "passport-local";


const app = express();
const port = 4000;
const saltRounds = 1;

app.use(bodyParser.json());
app.use(session({
    secret: "TOPSECRETWORD",
    resave: false,
    saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "WTF",
    password: "rohit@123123",
    port: 5432,
});
db.connect();

app.post("/api/login", async(req,res)=>{
    const {email, password} = req.body;

    // passport.use(new Strategy(async function verify(username, password, cb){
        try{
            const result = await db.query("SELECT * FROM users3 WHERE email = $1", [email]);
    
            if(result.rows.length > 0){
                const storedHashedPassword = result.rows[0].password;
            
                bcrypt.compare(password, storedHashedPassword, (err, result)=> {
                    if(err){
                        console.log(err);
                    }else{                                  
                        if(result){
                            res.status(200).json({message: "Done"});
                        }else{
                            res.status(401).json({message: "Incorrect password"});
                        }
                    }
                })
            }else{
                res.status(401).json({message: "Email does not exist."});
            }
        }catch(err){
            console.log(err);
        }
    // }));
    
});

app.post("/api/register",async (req,res)=>{
    const {email, password, contact, full_name} = req.body; 

    try{
        const result = await db.query("SELECT * FROM users3 WHERE email = $1", [email]);

        if(result.rows.length > 0){
            res.status(401).json({message: "Email already exist please try logging in."});
        }else{
            try{
                const checkContact = await db.query("SELECT * FROM users3 WHERE contact = $1", [contact]);
                if(checkContact.rows.length > 0){
                    res.status(401).json({message: "Contact already exist please try logging in."});
                }else{
                    bcrypt.hash(password, saltRounds, async (err,hash)=>{
                        const insert = await db.query("INSERT INTO users3 (name, contact, email, password) VALUES($1,$2,$3,$4)", 
                            [full_name, contact, email, hash]);
                        console.log(hash);
                    })
                     
                    res.status(200).json({message: 'registered'});
                }
            }catch(err){
                console.log(err);
            }
        }
    }catch(err){
        console.log(err);
    }
    
});



app.listen(port,()=>{
    console.log(`server running on port ${port}`);
});