import express from 'express';
import fetch from 'node-fetch';
import axios from 'axios';

const app = express()
const port=8080

app.get('/', function (req, res) {
  res.send('Hello World')
})
var apidata=[];

const URL = 'https://randomuser.me/api/?results=5';

fetch(URL)
  .then(response => response.json())
  .then(json => apidata=json.results)
  .catch(err => console.error(err));

  
app.get('/data', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    let type=[];

  apidata.map(function (value)  {
     
      var name=value.name.title+' '+value.name.first+' '+value.name.last;
      var loccity=value.location.city;
      var locstat=value.location.state;
      var loccountry=value.location.country;
      var img1=value.picture.large;
      var img2=value.picture.medium;
      var img3=value.picture.thumbnail;
     // console.log(email,name,loc,img);
    type.push({"name":name,"email":value["email"],"gender":value["gender"],
    "location":{"city":loccity,
    "state":locstat,
    "country":loccountry
  },"picture":{"large":img1,"medium":img1,"thumbnail":img1}

});
  });
 
  console.log(type);
  res.send(type)
  })
 
 

app.listen(port,()=>console.log("Server is running"));