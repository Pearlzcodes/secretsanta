//const fruits = [
   // {name: "Orange", color: "red", callories: 95},
   // {name: "Orange", color: "yellow", callories: 45},
 //   {name: "Banana", color: "yellow", callories: 105},
   // {name: "Coconut", color: "white", callories: 159},
  //  {name: "Pineapple", color: "yellow", callories: 37},
//]

//fruits.push({name: "Grape", color: "red", callories: 34})
//console.log(fruits)


function shuffleArray(arrayName){ 
    let randomIndex = 
    Math.floor(Math.random() * arrayName.length)
    for(i = 0; i <arrayName.length; i++){
        [arrayName[i], arrayName[randomIndex]] = [arrayName[randomIndex], arrayName[i]]
        }

        console.log(randomIndex)
    return arrayName;
    }

  



 



let participantsInput = [
    `<label for="participant1">Participant 1</label>
    <input id="participant1" type="text">
    <br>`
    
]

let participantNumber = participantsInput.length;



function addParticipant(){
    participantNumber++;
 participantsInput.push(`<label for="participant${participantNumber}">Participant ${participantNumber}</label>
 <input id="participant${participantNumber}" type="text">
 <br>`)

    document.getElementById("santaNames").innerHTML = participantsInput.join(' ')

 }

 function removeParticipant(){
    participantNumber = participantsInput.length
    participantNumber--;
    participantsInput.pop();
    document.getElementById("santaNames").innerHTML = participantsInput.join(' ')

 }

 console.log()


 function assignParticipant(){
    document.getElementById("resultPanel").style.display = "block"

    const participants = []
    const participant = []
   

    if(participantNumber < 2){
        document.getElementById("resultDisplay").innerHTML += 
    `<h4>You must input at least two participants</h4>`
    }

    else{
    
 for(i = 1; i <= participantsInput.length; i++){
participants.push(document.getElementById("participant" +  i).value) 
participant.push(document.getElementById("participant" +  i).value) 

}


shuffleArray(participants)

for(let i = 0; i < participantsInput.length; i++){
    document.getElementById("resultDisplay").innerHTML += 
    `<h4>${participant[i]} will gift ${participants[i]}</h4><hr>`
}
    }

console.log(participants)
 }

 function cancelDisplay(){
    location.reload()
    document.getElementById("resultPanel").style.display = "none"

 }




 









