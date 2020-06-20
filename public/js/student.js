
window.onload=function(){
   






    document.getElementById('contactform').addEventListener('submit' , 
    submitForm);
    function submitForm(e){
    
    e.preventDefault();
    
    var name = getInputVal('name');
    
    var mail = getInputVal('mail');
    var number = getInputVal('number');
    var addres1 = getInputVal('add1');
    var addres2 = getInputVal('add2');
    
    
    console.log(name);
    
    }
    
    
    
    
    
    
    
    
    function getInputVal(id){
    
    return document.getElementById(id).value ;
    
    }






  }