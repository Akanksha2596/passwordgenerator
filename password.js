const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]
let generatepassword = document.getElementById("generatepassword")
function generatepass(){
    const passwordLength = 15
    let passwordOne = ""
    let passwordTwo = ""
    for(i=1;i<=passwordLength;i++){
         const indexOne = Math.floor(Math.random() * characters.length)
         passwordOne += characters[indexOne]
         const indexTwo = Math.floor(Math.random() * characters.length)
         passwordTwo += characters[indexTwo]
    }
    document.getElementById("pass1-el").textContent = passwordOne
    document.getElementById("pass2-el").textContent = passwordTwo
}