boton.addEventListener('click', function(){
    let color = aleatorio()
    body.style.backgroundColor  =  color;
    b.style.color  =  color;
    document.getElementById("b").innerHTML = color;
})

function aleatorio (){
    let n1= (Math.round(((Math.random()).toFixed(6)) * 255))
    let n2= (Math.round(((Math.random()).toFixed(6)) * 255))
    let n3= (Math.round(((Math.random()).toFixed(6)) * 255))

    return `rgb(${n1}, ${n2}, ${n3})`;
}

