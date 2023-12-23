// Code your solutions in this file

function writeCards(array){
    const members = ["Guadalupe", "Ollie", "Aki"];
    const message = [];

        for (let i = 0; i < members.length; i++){
        
  const surpriseMessage = `Thank you, ${members[i]}, for the wonderful surprise gift!`;
  message.push(surpriseMessage);
    }
return message;
     
}

function countDown(count){
   while (count > 0) {
       console.log(count);
        count--;
    }
    console.log(count); 

 }
