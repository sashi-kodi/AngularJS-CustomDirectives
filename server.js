var express=require("express");
var bodyParser = require('body-parser');

var app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public"));

var employees=[{
    name:"sashi kodi",
    empno:"1001",
    sal:100000,
    tel:"4087545625"
},
               {
    name:"rekha kodi",
    empno:"1002",
    sal:90000,
    tel:"4087545635"
},
{
    name:"sekhar h",
    empno:"1003",
    sal:170000,
    tel:"4085060109"
},
{
    name:"isha kodi",
    empno:"1004",
    sal:95000,
    tel:"4087545325"
},
       {
    name:"veda kodi",
    empno:"1005",
    sal:110000,
    tel:"4022545625"
},
               {
    name:"srinidhi kodi",
    empno:"1006",
    sal:100000,
    tel:"4087545625"
               }    
              ];

app.get('/emp', function(req,res){
    console.log(employees);
   res.json(employees); 
});

app.get('/emp/:empno', function(req,res){
    var empno=req.params.empno;
    console.log(empno);
    var data={};
    var found=false;
    for(var i=0;i<employees.length;i++){
        if(employees[i].empno===empno){
           data=employees[i]; 
            found=true;
            break;
        }
    }
    if(found){
        console.log(data);
        res.json(data);
    }
    else res.json(null);
});

app.listen(3000);
console.log('server is running at port 3000');
    module.exports=app;