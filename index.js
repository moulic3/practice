const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

function getWelcomeMessage(){
  return "Welcome to our service."
}

app.get('/welcome', (req,res)=>{
  res.send(getWelcomeMessage())
})

function getGreetingMessage(userName) {
  return "Hello, " + userName;
}

app.get('/greet', (req,res)=> {
  let userName = req.query.userName;
  let result = getGreetingMessage(userName); 
  res.send(result); 
})

function checkPassword(password){
  if (password.length > 15) {
    return "Password is strong"; 
  } else {
    return "password is weak" ; 
  }
}

app.get('/check-password', (req,res)=>{
  let password = req.query.password;
  res.send(checkPassword(password))
})

function addNumbers(num1, num2) {
  return (num1 + num2).toString(); 
}

app.get('/sum', (req,res)=>{
  let num1 = parseFloat(req.query.num1); 
  let num2 = parseFloat(req.query.num2);
  res.send(addNumbers(num1, num2)); 
})

function checkSubscriptionStatus(username, isSubscribed) {
  if (isSubscribed) {
    return username + ' is subscribed ' ; 
  } else {
    return username + ' is not subscribed' ;
  }
}

app.get('/subscription-status', (req,res)=>{
  let username = req.query.username; 
  let isSubscribed = req.query.isSubscribed === "true"; 
  res.send(checkSubscriptionStatus(username, isSubscribed))
})
















app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
