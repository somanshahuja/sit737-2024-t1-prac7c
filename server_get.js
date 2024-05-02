const express= require("express");
const app= express();
const addTwoNumber= (n1,n2) => {
    return n1+n2;
}
const subTwoNumber= (n1,n2) => {
    return n1-n2;
}
const multiplyTwoNumber= (n1,n2) => {
    return n1*n2;
}
app.get("/addTwoNumber", (req,res)=>{
    const n1= parseInt(req.query.n1);
    const n2=parseInt(req.query.n2);
    const result = addTwoNumber(n1,n2);
    res.json({statuscocde:200, data: result }); 
});
app.get("/subTwoNumber", (req,res)=>{
    const n1= parseInt(req.query.n1);
    const n2=parseInt(req.query.n2);
    const result = subTwoNumber(n1,n2);
    res.json({statuscocde:200, data: result }); 
});
app.get("/multiplyTwoNumber", (req,res)=>{
    const n1= parseInt(req.query.n1);
    const n2=parseInt(req.query.n2);
    const result = multiplyTwoNumber(n1,n2);
    res.json({statuscocde:200, data: result }); 
});
app.get("/", (req, res) => {
    const n1 = "<html><body><H1>HELLO THERE </H1></body></html>";
    res.set('Content-Type', 'text/html');
    res.send(Buffer.from(n1));     
})
console.log (addTwoNumber(4,3));
console.log (subTwoNumber(4,3));
console.log (multiplyTwoNumber(4,3));
const port=3040;
app.listen(port,()=> {
    console.log("hello i'm listening to port "+port);
})