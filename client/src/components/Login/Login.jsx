import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from "axios";

function Login(){

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [response,setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleClick = async(e)=>{
    e.preventDefault();
    setLoading(true);
    try{
      const result = await axios.post('/api/login', {email ,password});
      navigate('/')
    }catch(error){
      console.log("errr loging in:",error);
      setResponse({message: error.response.data.message});
    };
    setLoading(false); 
  }

  return (
    <div>
        <form onSubmit={handleClick}>
            <div className="container">
                <TextField id="outlined-basic" className="login-input" label="Email" onChange={(e)=> setEmail(e.target.value)} value={email} variant="outlined" size="small" style={{width: "250px"}}/>
                <TextField id="outlined-basic" className="login-input" label="Password" onChange={(e)=> setPassword(e.target.value)} value={password} variant="outlined" size="small" style={{width: "250px"}}/>
                <Button variant="contained"  type="submit" style={{width: "100px", marginTop: "10px"}}>{loading ? "Loading..." : "Submit"}</Button>
                <hr />
            </div>
            {response && <div>{response.message}</div>}
        </form>
    </div>
  )
}

export default Login;
