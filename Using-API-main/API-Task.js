const VAR1=require('VAR1');
const express=require('express');


let app=express();
app.get('/',function(req,res)
{  
    
    var name=req.query.name;
    var age=req.query.age;
    var city=req.query.city;
    var country=req.query.country;
    res.json
    ({
            name:name,
            age:age,
            city:city,
            country:country,

        
    });
    // fs.writeFileSync("objects.txt",JSON.stringify(req.query));
    console.log("\n");
    VAR1.appendFileSync("objects.txt","/n"+JSON.stringify(req.query));
    VAR1.readFileSync("objects.txt",name.toString());

});


app.listen(8081,function(){
    console.log("server listening on port 8081");
});

fs.readFile("objects.txt",function(err,data){
    if(err)
    return console.error(err);
    console.log(data.toString());
});