import { useState } from 'react';
 
export default function Form() {
 
  // States for registration
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
 
  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };
 
  // Showing success message
  const successMessage = () => {
    return (
      <div
        classNameName="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <h1>User {name} successfully registered!!</h1>
      </div>
    );
  };
 
  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        classNameName="error"
        style={{
          display: error ? '' : 'none',
        }}>
        <h1>Please enter all the fields</h1>
      </div>
    );
  };

  function test(){
    console.log("test");
  }
  function loadRegisterPage(){
    window.location.href="register.html";
  }
  
  function loadloginPage(){
    window.location.href="login.html";
  }
  function onLoadPage(){
    console.log("onLoad");
    document.getElementById("submit").disabled =true;
  }
  function login(){
  
  let username=document.getElementById("userName").value;
  let pwd=document.getElementById("pass").value;
  alert("Login successful");
    
  }
  function checkMandatory(){
    
  let firstName=document.getElementById("firstName").value;
  let lastName=document.getElementById("lastName").value;
  let dob=document.getElementById("dob").value;
  let pwd=document.getElementById("password").value;
  let cpwd=document.getElementById("cpass").value;
  let address=document.getElementById("add").value;
  let gender=document.getElementById("gender").value;
  let confirm="";
  if(document.getElementById("confirm").checked){
  
  confirm=document.getElementById("confirm").value;	
    
  }
  if(firstName!=""&&lastName!=""&&dob!=""&&pwd!=""&&cpwd!=""&&address!=""){
    
    document.getElementById("submit").disabled =false;
  }else{
    console.log("Enter mandatory values");
  }
  }
  function register(){
  console.log("reg");
  let firstName=document.getElementById("firstName").value;
  let lastName=document.getElementById("lastName").value;
  let dob=document.getElementById("dob").value;
  let pwd=document.getElementById("password").value;
  let cpwd=document.getElementById("cpass").value;
  let address=document.getElementById("add").value;
  let gender=document.getElementById("gender").value;
  let confirm="";
  if(document.getElementById("confirm").checked){
  
  confirm=document.getElementById("confirm").value;	
    
  }
  if(confirm==""){
    alert("Sign the declaration");
  }else{
  if(pwd!=cpwd){
    alert("Password does not match");
  }else{
  
  if(firstName!=""&&lastName!=""&&dob!=""&&pwd!=""&&cpwd!=""&&address!=""){
    if(document.getElementById("email").validity.valid){
      alert("Registration successful");
      window.location.href="landing.html";
    }else{
      alert("Enter valid Email and Mobile");
    }
    
  }else
  alert("Enter all fields");
  }
  }
  }
  
  function cancel(){
  
  document.getElementById("userName").value="";
  document.getElementById("pass").value="";
  }
 
  return (
    <div >
          <div style={{texAlign: 'left'}}>
    <center><h1>Registration Form</h1></center>
    </div>
    <div className="container">
    <div>
    <input type="text" placeholder="First Name" id="firstName" onChange={checkMandatory}/>
    <input type="text" placeholder="Last Name" id="lastName" onChange={checkMandatory}/>
    </div>
    <br/><br/>
    <div>
    <label>DOB: </label>
    <input type="date" id="dob"/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <label>Gender: </label>
    <select name="gender" id="gender" onChange={checkMandatory}>
        <option value="male">Male</option>
        <option value="female">Female</option>
    
    </select>
    </div>
    <div>
    <input type="email" placeholder="Email" id="email" onChange={checkMandatory} required/>
    <input type="text" placeholder="Mobile"  id="mobile" onChange={checkMandatory}/>
    </div>
    <textarea id="add" placeholder="address" name="add" rows="4" cols="50">
    Address
    </textarea>
    <div>
    <input type="password" placeholder="Password" id="password" onChange={checkMandatory}/>
    <input type="password" placeholder="Confirm password" id="cpass" onChange={checkMandatory}/>
    </div>
    <p>Account Type:</p>
      <input type="radio" id="html" name="ragular" value="HTML"/>
      <label for="html">Regular</label><br/>
      <input type="radio" id="premium" value="premium"/>
      <label for="premium">Premium</label><br/>
    
    <br/>
    <label for="confirm"> All the above mentioned informations are correct </label>
    <input type="checkbox" id="confirm" value="true"/><br/>
    
    <center>
    <div className="buttons">
    
                <div className="action_btn">
    
                <button id="submit" className="action_btn submit" type="submit" value="Save" onClick={register}>Register</button>
                <button id="cancel" className="action_btn cancel" type="submit" value="Cancel" onClick={cancel}>Cancel</button>
    
                <p id="saved"></p>
    
                </div>
    
            </div>
            </center>
    Already have account <a onclick="loadloginPage()"> Sign in? </a>   
    <div className="bg"></div>
    </div>
    </div>
  );
}