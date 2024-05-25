function sim(){
    alert("Foi então :)");
    location.href = "https://youtu.be/7aFsPhZxAt0?si=_mXd5TquMS3gmLlN";
}

function desvia(btn){
    btn.style.position = 'absolute';
    btn.style.bottom = novaposition(10, 90);
    btn.style.left = novaposition(10, 90);
    console.log('opa, desviei...');
}

function novaposition(min, max){
    return(Math.random() * (max - min) + min) + "%";
}