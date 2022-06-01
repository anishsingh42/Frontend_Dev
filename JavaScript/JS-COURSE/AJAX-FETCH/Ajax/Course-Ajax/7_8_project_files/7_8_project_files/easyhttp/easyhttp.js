function easyHTTPS() {
  this.http = new XMLHttpRequest();
}

// Make an HTTP GET Request
easyHTTPS.prototype.get = function(url, callback) {
  this.http.open('GET', url, true);
  //the true value parameter in open signifies that it is done asynchronously and false means synchronously 

  let self = this;
  this.http.onload = function() {
    if(self.http.status === 200) {
      callback(null,self.http.responseText);
    } else {
      callback('Error: ' + self.http.status);
    }
  }

  this.http.send();
}

// Make an HTTP POST Request
easyHTTPS.prototype.post = function(url , data, callback){
  this.http.open('POST', url, true);

  //using arrow function to do the same thing as above
  this.http.onload = () => {
    callback(null,this.http.responseText);
  }

  //pass the data in form of JSON String and not JS string 
  this.http.send(JSON.stringify(data));
}
// Make an HTTP PUT Request

// Make an HTTP DELETE Request

