



var numbers = /^[0-9]+$/ ;
var charac = /^[A-Za-z]+$/ ;
var err = "error"
function calc() {
   let var1  =  document.getElementById("res")
   if(var1.value===charac){
     try{
      console.log(err)
     }catch(Err){
           console.log(err)
      }
   }else  {
      var1.value = eval(var1.value)
      var1 = document.getElementById("res").textContent
     
      
   }
}

