const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.[a-z]?$/i;
const campos = document.querySelectorAll("#campos");
const spans = document.querySelectorAll("span");

function nomeValidacao(){
    if(campos[0].value.length < 3){
        setError(0);
    }
    else{
        removeError(0);
    }
}

function setError(index){
    campos[index].style.border = '2px solid red';
    spans[index].style.display = 'inline-block';
}

function removeError(index){
    campos[index].style.border = '';
    spans[index].style.display = 'none'; 
}

function emailValidacao(){
    if(!emailRegex.test(campos[0].value)){
        setError(3);
    }
    else{
        removeError(3);
    }
}

function passValider(){
    if(campos[1].value.length < 9){
        setError(1);
    }
    else{
        removeError(1);
        comparador();
    }
}

function comparador(){
    if(campos[1].value == campos[2].value && campos[2].value.length >= 9){
    removeError(2);
    }
    else{
        setError(2);
    }    
}