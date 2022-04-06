const generateBtn = document.querySelector(".generateBtn")

generateBtn.addEventListener("click", generateRanNum)

function  generateRanNum(){
    
    const fromNum = document.querySelector(".fromNum").value
    const toNum = document.querySelector(".toNum").value
    console.log(fromNum,toNum)

    randomNum = Math.floor(Math.random() * (toNum));    
     
    if (randomNum >= (fromNum)){
        const randomNumEl = document.querySelector(".randomNumEl");
    randomNumEl.innerHTML = randomNum
    }
}

