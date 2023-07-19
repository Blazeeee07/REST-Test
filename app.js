const http=require('http');

const app = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write("SUP?");
        res.end();
}
else if(req.url === '/another'){
        res.write("Another one?");
        res.end();
}
else{
        res.write("Normie");
        res.end();
}
})

app.listen(3000, ()=>{
    console.log("server is running...")
})