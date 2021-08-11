const img1 = document.getElementById('img1')
const img2 = document.getElementById('img2')
const button = document.querySelector('button')
const text = document.querySelector('h1')





    button.addEventListener('click', ()=>{
        let player1 = Math.floor(Math.random()*6)+1
        let player2 = Math.floor(Math.random()*6)+1
            
        img1.src = (`images/dice${player1}.png`)
        img2.src = (`images/dice${player2}.png`)


        if (player1<player2){
            text.innerText = ('Player 2 Won !')
        }else if (player2<player1){
            text.innerText = ('Player 1 Won !')
        }else{
            text.innerText = ('Draw!')
        }
    })
