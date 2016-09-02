# react-ajax
Promise based Ajax module for react/react-native

##Installation:
```npm i -S react-ajax```

## Usage:

```javascript
// url    : {type: 'string'}
// body   : {type: 'object'}
// headers: {type: 'object', optional: 'true'}

Ajax.post(url, body, headers).then((res)=> {
            // no need for JSON.parse(res);  
            console.log(res);  
  });
  
Ajax.get(url, body, headers).then((res)=> {
            // no need for JSON.parse(res);  
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
            // no need for JSON.parse(res);  
            console.log(res);  
  });
```
