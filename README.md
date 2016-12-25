# query-extractor
A simple module to get query parameters from a url

## Usage

Require

    var query = require('query-extractor');

Get all query parameters and their values in an object 

    query.getAll("https://awesomewebsite.com?name=canon&place=India");
    
Output
   
    { name: 'canon', place: 'India' }
    
Get the value for a specific key in query string

    query.get("https://awesomewebsite.com?name=canon&place=India", "name");
 
 Output
 
     canon
     
     
### Note: 

1. The URL in function is optional, If you want it to use the URL of current page than pass ```null``` instead and it'll use URL of current page

2. It uses window.location.href to get URL of current page. 


3. If the specified key doesn't exists in query string than it returns ```null```.

4. If the specified key doesn't has any value than it returns ```''````.
