import React, {useEffect, useState} from "react";
import "./SignUp.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from "axios";

function SignUp(){

  const [response,setResponse] = useState(null); 
  const [details,setDetails] = useState({
    email: "",
    full_name: "",
    password: "",
    contact: "",
  });
 
  const handleClick = async(e)=>{
    e.preventDefault();  
    const email = details.email;
    const password  = details.password;
    const contact = details.contact;
    const full_name = details.full_name;
    try{
      const result = await axios.post('/api/register', {email ,password,contact,full_name});
      setResponse(result.data);
    }catch(error){
      console.log("errr loging in:",error);
      setResponse({message: error.response.data.message});
    };
  }

  function handleChange(e){
      const {name, value} = e.target;
      setDetails((prevValue)=>{
        return {
          ...prevValue,
          [name]: value,
        }
      });
  }

  return (
    <div>
        <form onSubmit={handleClick}>
            <div className="container">
                <TextField 
                      id="outlined-basic" 
                      label="Email" 
                      onChange={handleChange} 
                      value={details.email} 
                      name="email" 
                      className="signin-input"
                      variant="outlined" 
                      size="small" 
                      style={{width: "250px"}}
                      required
                />
                <TextField 
                      id="outlined-basic" 
                      label="Full Name" 
                      onChange={handleChange} 
                      value={details.full_name} 
                      name="full_name" 
                      className="signin-input"
                      variant="outlined" 
                      size="small" 
                      style={{width: "250px"}}
                      required
                />
                <TextField 
                      id="outlined-basic" 
                      label="Contact" 
                      onChange={handleChange} 
                      value={details.contact} 
                      name="contact" 
                      className="signin-input"
                      variant="outlined"
                      size="small" 
                      style={{width: "250px"}}
                      required
                />
                <TextField 
                      id="outlined-basic" 
                      label="Password" 
                      onChange={handleChange} 
                      value={details.password} 
                      name="password" 
                      className="signin-input"
                      type="password"
                      variant="outlined" 
                      size="small" 
                      style={{width: "250px"}}
                      required
                />
                <Button variant="contained" type="submit" style={{width: "100px", marginTop: "10px"}}>Submit</Button>
                <hr />
            </div>
                 {response && <div>{response.message}
            </div>}
        </form>
    </div>
  )
}

export default SignUp;
