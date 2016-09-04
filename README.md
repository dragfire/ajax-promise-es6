# ajax-promise-es6
Promise based Ajax module for react/react-native apps.

##Installation:
```npm i -S ajax-promise-es6```
or<br/>
```npm install --save ajax-promise-es6```

## Usage:

```javascript
// url    : {type: 'string'}
// body   : {type: 'object'}
// headers: {type: 'object', optional: 'true'}

import Ajax from 'ajax-promise-es6' 

Ajax.post(url, body, headers).then((res)=> {  
            console.log(res);  
  });
  
Ajax.get(url, body, headers).then((res)=> {  
            console.log(res);  
  });
  
```

##Example:
```javascript
Ajax.post(url, 
             { 
                foo: 'hello',   // body data
                bar: 'there'
              }, 
              { 
                'Cookie': 'foo=bar'  // headers
              }
    ).then((res)=> {
            // use JSON.parse(res);  
            console.log(res);  
  });
```
