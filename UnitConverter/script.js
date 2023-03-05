var input=document.getElementById('input');
var result=document.getElementById('result');
var inputType=document.getElementById('inputType');
var resultType=document.getElementById('resultType');
var inputValue,resultValue;

input.addEventListener("keyup",myResult);
inputType.addEventListener("change",myResult);
resultType.addEventListener("change",myResult);

inputValue=inputType.value;
resultValue=resultType.value;
function myResult(){
    inputValue=inputType.value;
    resultValue=resultType.value;

    if(inputValue==="meter" && resultValue==="kilometer")
    {
        result.value=Number(input.value)*0.001;
    }
    else if(inputValue==="meter" && resultValue==="centimeter")
    {
        result.value=Number(input.value)*100;
    }
    else if(inputValue==="meter" && resultValue==="feet")
    {
        result.value=Number(input.value)*3.2808;
    }
    else if(inputValue==="meter" && resultValue==="inch")
    {
        result.value=Number(input.value)*39.370;
    }
    else if(inputValue==="meter" && resultValue==="yard")
    {
        result.value=Number(input.value)*1.0936;
    }
    else if(inputValue==="meter" && resultValue==="meter")
    {
        result.value=input.value;
    }

    if(inputValue==="kilometer" && resultValue==="meter")
    {
        result.value=Number(input.value)*1000;
    }
    else if(inputValue==="kilometer" && resultValue==="centimeter")
    {
        result.value=Number(input.value)*100000;
    }
    else if(inputValue==="kilometer" && resultValue==="feet")
    {
        result.value=Number(input.value)*3280.8;
    }
    else if(inputValue==="kilometer" && resultValue==="inch")
    {
        result.value=Number(input.value)*39370;
    }
    else if(inputValue==="kilometer" && resultValue==="yard")
    {
        result.value=Number(input.value)*1093.6;
    }
    else if(inputValue==="kilometer" && resultValue==="kilometer")
    {
        result.value=input.value;
    }

    if(inputValue==="centimeter" && resultValue==="kilometer")
    {
        result.value=Number(input.value)*0.00001;
    }
    else if(inputValue==="centimeter" && resultValue==="meter")
    {
        result.value=Number(input.value)*0.01;
    }
    else if(inputValue==="centimeter" && resultValue==="feet")
    {
        result.value=Number(input.value)*0.032808;
    }
    else if(inputValue==="centimeter" && resultValue==="inch")
    {
        result.value=Number(input.value)*0.39370;
    }
    else if(inputValue==="centimeter" && resultValue==="yard")
    {
        result.value=Number(input.value)*0.010936;
    }
    else if(inputValue==="centimeter" && resultValue==="centimeter")
    {
        result.value=input.value;
    }    

    if(inputValue==="inch" && resultValue==="kilometer")
    {
        result.value=Number(input.value)/39370;
    }
    else if(inputValue==="inch" && resultValue==="meter")
    {
        result.value=Number(input.value)/39.370;
    }
    else if(inputValue==="inch" && resultValue==="feet")
    {
        result.value=Number(input.value)*0.083333;
    }
    else if(inputValue==="inch" && resultValue==="centimeter")
    {
        result.value=Number(input.value)/0.39370;
    }
    else if(inputValue==="inch" && resultValue==="yard")
    {
        result.value=Number(input.value)*0.027778;
    }
    else if(inputValue==="inch" && resultValue==="inch")
    {
        result.value=input.value;
    }   

    if(inputValue==="feet" && resultValue==="kilometer")
    {
        result.value=Number(input.value)/3280.8;
    }
    else if(inputValue==="feet" && resultValue==="meter")
    {
        result.value=Number(input.value)/3.2808;
    }
    else if(inputValue==="feet" && resultValue==="centimeter")
    {
        result.value=Number(input.value)/0.032808;
    }
    else if(inputValue==="feet" && resultValue==="inch")
    {
        result.value=Number(input.value)*12;
    }
    else if(inputValue==="feet" && resultValue==="yard")
    {
        result.value=Number(input.value)*0.33333;
    }
    else if(inputValue==="feet" && resultValue==="feet")
    {
        result.value=input.value;
    }   

    if(inputValue==="yard" && resultValue==="kilometer")
    {
        result.value=Number(input.value)/1093.6;
    }
    else if(inputValue==="yard" && resultValue==="meter")
    {
        result.value=Number(input.value)/1.0936;
    }
    if(inputValue==="yard" && resultValue==="feet")
    {
        result.value=Number(input.value)*3;
    }
    if(inputValue==="yard" && resultValue==="inch")
    {
        result.value=Number(input.value)*36;
    }
    if(inputValue==="yard" && resultValue==="centimeter")
    {
        result.value=Number(input.value)/0.010936;
    }
    else if(inputValue==="yard" && resultValue==="yard")
    {
        result.value=input.value;
    }   
}