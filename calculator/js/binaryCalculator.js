var textbx = document.getElementById('res');
textbx.value=0;
function getValueButton(value){
 textbx.focus();
 var vodmas = ['/','*','+','S'];
if(value==='C'){
textbx.value=0;
}else{
    if(Number(textbx.value)===0){
    textbx.value=" "+value;    
}else{ 
    if(value!='='){textbx.value=textbx.value+value;}
    
if(value==='=')
{
var mainval =   String(textbx.value);
var i;
for(i=1;i<=mainval.length;i++){
console.log(mainval.charAt(i));

}
}

}
}
}