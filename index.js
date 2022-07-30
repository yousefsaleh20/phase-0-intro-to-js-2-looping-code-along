// Code your solutions in this file

writeCards(["Charlie", "Samip", "Ali"], "birthday");

function writeCards(namesArray, eventName){
    let messages = []
    
    for (let i = 0; i < namesArray.length ; i++) {
        messages.push(`Thank you, ${namesArray[i]}, for the wonderful surprise gift!`);
    }
    return messages;
}

function countDown() {
    let countDown = 10;
while (countDown >= 0) {
  console.log(countDown--);
}
}