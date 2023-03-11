
    const gifts=["Guadalupe", "Ollie", "Aki"];
    function writeCards(){
        const response=[];
        let j;
        for(j=0; j<gifts.length; j++){
           response[j]=`Thank you, ${gifts[j]}, for the wonderful surprise gift!`
          
        }
        return response;
    }
    function countDown(){
        let j=10
        while(j>=0){
            console.log(j--);
    
        }
    }
    countDown()