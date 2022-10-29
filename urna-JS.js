var lula = 0
var bolsonaro = 0
var fotopt = 0
var fotopl = 0
var number1=0
var number2=0
function mudou(){
    var num1 = document.querySelector("#number1")
    var num2 = document.querySelector("#number2")

    var number1 = parseInt(num1.value)
    var number2 = parseInt(num2.value)

    let numbersArray = [1,2,3,4,5,6,7,8,9,0]
    var verifiIsNumber1 = numbersArray.includes(number1)
    var verifiIsNumber2 = numbersArray.includes(number2)
    if( verifiIsNumber1 != true || verifiIsNumber2 != true){
        $(".ladrao").css({opacity:'0'})
        $(".candidato").css({opacity:'0'})
        $(".partido").css({opacity:'0'})
        $(".ladrao2").css({opacity:'0'})
        $("#candidato2").css({opacity:'0'})
        $(".partido2").css({opacity:'0'})
        $(".err").text("Este não é um número valido")
    }else if(verifiIsNumber1 == true && verifiIsNumber2 == true){
        $(".err").text("")
        $(".ladrao").css({opacity:'1'})
        $(".candidato").css({opacity:'1'})
        $(".partido").css({opacity:'1'})
        $(".ladrao2").css({opacity:'1'})
        $("#candidato2").css({opacity:'1'})
        $(".partido2").css({opacity:'1'})
    }
}
function atualizarcod(){
    var num1 = document.querySelector("#number1")
    var num2 = document.querySelector("#number2")

    var number1 = parseInt(num1.value)
    var number2 = parseInt(num2.value)

    let numbersArray = [1,2,3,4,5,6,7,8,9,0]
    var verifiIsNumber1 = numbersArray.includes(number1)
    var verifiIsNumber2 = numbersArray.includes(number2)

    if(number1 == 2 && number2 == 2){
        if(fotopl < 1){
            fotopl = 1
            $(".ladrao").prop('src', `urna/bolso.jpg`)
            $(".candidato").text(`Presidente: Jair Messias Bolsonaro`)
            $(".partido").text(`Partido: Partido Liberal`)
            $(".ladrao2").prop('src', "urna/bragaNetto.jpg")
            $(".candidato2").text(`Vice: Walter Braga Netto`)
            $(".partido2").text(`Partido: Partido Liberal`)
            fotopt=0
        }
    }
    if(number1 == 1 && number2 == 3){
        if(fotopt < 1){
            fotopt = 1
            $(".ladrao").prop('src', `urna/ladrao.jpg`)
            $(".candidato").text(`Presidente: Luiz Inácio Lula da Silva`)
            $(".partido").text(`Partido: Partido dos Trabalhadores`)
            $(".ladrao2").prop('src', "urna/alckmin.jpg")
            $(".candidato2").text(`Vice: Geraldo Alckmin`)
            $(".partido2").text(`Partido: Partido Socialista Brasileiro`)
            fotopl=0
        }
    }
}
setInterval(atualizarcod, 500)
var nada=20
function confirmar(){
    var num1 = document.querySelector("#number1")
    var num2 = document.querySelector("#number2")

    var number1 = parseInt(num1.value)
    var number2 = parseInt(num2.value)
    nada--
    if(nada != 0){
        if(number1 == 2 && number2 == 2){
            bolsonaro++
        }
        if(number1 == 1 && number2 == 3){
            lula++
            if(lula > bolsonaro){
                bolsonaro++
                lula--
            }
        }
    }
    if(nada == 0){
        $(".dell").css({opacity: "0"})
        let fim = document.querySelector(".fim")
        fim.innerHTML = '<b>FIM</b><br><p id="Apu" class="apu">Apuração dos votos</p>'
        if(lula < 0){
            $(".totalLula").text(`Luiz Inácio Lula da Silva: Nenhum voto registrado`)
        }
        if(lula == 0){
            $(".totalLula").text(`Luiz Inácio Lula da Silva: Nenhum voto registrado`)
        }
        if(lula == 1){
            $(".totalLula").text(`Luiz Inácio Lula da Silva: 1 voto ganho`)
        }
        if(lula > 1){
            $(".totalLula").text(`Luiz Inácio Lula da Silva: ${lula} votos ganhos`)
        }
        $(".totalBolso").text(`Jair Messias Bolsonaro: ${bolsonaro} votos ganhos`)
    }
}
var nulo=0
function anular(){
    nada--
    nulo++
}
if(nulo > bolsonaro){
    bolsonaro++
}
function vt(){
    var votos = document.getElementById("vts")
    var recvotos = String(votos.value)
    votos.innerText = "Votos restantes:"+nada
}
setInterval(vt,100)
end
