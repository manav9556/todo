const express=require("express");
var items=[];
const bodyparser= require("body-parser");
const app = express();
const PORT=3000
app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({extended:true}))
app.use(express.static("public"))
app.get("/",(req,res)=>
{
var today=new Date;
option={
  weekday:"long",
  day:"numeric",
  month:"long"
};
var day=today.toLocaleDateString("en-us",option)

res.render("list",{kindOfDay:day,todolist:items});
})

app.post("/",(req,res)=>{
var item=req.body.todo
items.push(item);
res.redirect("/")
})
app.listen(PORT, function()
{
  console.log("good!");
});
  
