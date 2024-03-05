const form = document.querySelector(".formulário-fale-conosco")
const mascara = document.querySelector(".mascara-form")


function cliqueinobotão(){
    form.style.left= "50%"
    form.style.transform= "translateX(-50%)"
    mascara.style.visibility= "visible"
}

function cliqueinamascara(){
    form.style.left= "-380px"
    mascara.style.visibility= "hidden"
}