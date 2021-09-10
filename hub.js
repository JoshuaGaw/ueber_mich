function Funktion() {
    let Bildelement= document.getElementById("Bild")
    console.log(Bildelement)
    if (Bildelement.style.display === 'none') {
        Bildelement.style.display = 'flex';	
    }
    else {
        Bildelement.style.display = 'none';
    }

    
}
let Index= 1
function Speichern() {
let Schreiben= document.getElementById("Schreiben").value
let Kommens= document.getElementsByClassName("geschriebeneKoms")[0].innerHTML
document.cookie = "Kommentar-" + Index + "="  + Schreiben;
document.getElementsByClassName("geschriebeneKoms")[0].innerHTML = '<div class="Kom"> <p>'+Schreiben+'</p></div>' + Kommens 
document.getElementById("Schreiben").value= ""
Index++
}
let x = document.cookie;
console.log (x)
cookieparts= x.split("; ")
Index= cookieparts.length+ 1
cookieparts.forEach(element => {
    let Kommentar = element.split("=")[1]
    let Kommens= document.getElementsByClassName("geschriebeneKoms")[0].innerHTML
    console.log(Kommentar)
    document.getElementsByClassName("geschriebeneKoms")[0].innerHTML = '<div class="Kom"> <p>'+Kommentar+'</p></div>' + Kommens 
    });
