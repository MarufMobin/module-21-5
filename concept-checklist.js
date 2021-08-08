// Write 3 variables ( number, string , boolean )

/*     let myName = "Maruf";
    let myAge = 22;
    let mariteStatus = false; */

// Two Variable (let , const);

/*     let myScoolName = "M. D. C Model Institute";
    myScoolName = "Mirpur Bangla High School";
    const schoolAddress = "Mirpur"; */

// Declire two Variable and find out Addition / Minus / Multipication / Dividetion

/*     let fistNumber = 30;
    let secondNumber = 7;

    const additonOfTwoNumbers   = fistNumber + secondNumber ;
    const minusOfTwoNumbers   = fistNumber - secondNumber ;
    const multiplyOfTwoNumbers  = fistNumber * secondNumber ; 
    const devidedOfTwoNumbers  = fistNumber / secondNumber ; 
    const devidedOfTwoNumbersFloor  = Math.floor( fistNumber / secondNumber ) ; 
    const restValue  = fistNumber % secondNumber ;  */

// console.log( additonOfTwoNumbers, minusOfTwoNumbers,multiplyOfTwoNumbers,devidedOfTwoNumbers,devidedOfTwoNumbersFloor,restValue);

// comparison Oparators < > <= >= == != and it use 

/*     let fistValue = 20;
    let secondValue = 30;

    if( fistValue < secondNumber ){
        console.log( fistValue, "is Bigger then", secondValue );
    }else{
        console.log( secondValue,"is Bigger then", fistValue)
    } */

    /* let fistValue = 1000;
    let secondValue = 1000; */

    /* if( fistValue > secondValue ){
        console.log( secondValue, "is Smaller then", fistValue);
    }else{
        console.log( fistValue, "is Smaller then", secondValue )
    } */

   /*  if( fistValue >= secondValue ){
        if( fistValue == secondValue ){
            console.log( fistValue, "Both Value Are Same :)", secondValue)
        }
        else{
            console.log( fistValue, "Are Smaller Then", secondValue );
        }
    }else{
        console.log( fistValue, "is Smaller then", secondValue );
    } */


    /* if( fistValue <= secondValue ){
        if( fistValue == secondValue ){
            console.log( fistValue, "Both Value Are Same :)", secondValue)
        }
        else{
            console.log( secondValue , "Are Smaller Then", fistValue );
        }
    }else{
        console.log( secondValue, "is Smaller then",fistValue  );
    } */

    /* if( fistValue == secondValue ){
        console.log("Both Value Are Same :)");
    }
    else{
        console.log( fistValue, "is not Equal then", secondValue);
    } */

    /* let fistValue = 1000;
    let secondValue = 100;

    if( fistValue != secondValue ){
        console.log( fistValue , "not Equal",secondValue,"Value" );
    }else{
        console.log( fistValue,"And",secondValue,"Both are Equal :)")
    } */

    // Gratter then Oparator

    /* let fistValue = 1000;
    let secondValue = 100;

    if( fistValue <= secondValue ){

        if( fistValue == secondValue ){
            console.log(fistValue ,"And",secondValue,"Both Are Equal :)");
        }
        else{
            console.log( secondValue,"is Bigger then",fistValue );
        }
    }else{
        console.log( fistValue, "Bigger then", secondValue);
    }
 */
    // Smaller then Oparator

    /* let fistValue = 1000;
    let secondValue = 100;

    if( fistValue >= secondValue ){

        if( fistValue == secondValue ){
            console.log(fistValue ,"And",secondValue,"Both Are Equal :)");
        }
        else{
            console.log( fistValue,"is Bigger then",secondValue );
        }
    }else{
        console.log( secondValue, "Bigger then", fistValue);
    } */

    // Full fill two Condition Using if Statement

   /*  let userName = "Maruf";
    let password = 123;

    if( ( userName == "Maruf") && password == 123 ){
        console.log("Log in SuccessFully :)");
    }else{
        console.log("Error User Name & Also Check PassWord");
    }

    let readingBook = true;
    let writingBook = true;

    if( readingBook == true || writingBook == true ){
        console.log("That's Good :) if you want to go a tour !");
    }else{
        console.log("You can't go out site in the room");
    } */


    // Write a if - else condition 

/*     let age = 18;
    let licence = true;
    let learnerCard = true;
    let wellDriver = true;

    if( age == 18 ){
        if(licence == true){
            console.log("Please Wearing Healmet Well Journey :)");
        }else{
            console.log("You can not Drive the Honda");
        }
    }else if(age == 16 && age == 17){
        if(licence == true){
            console.log("please Wearing Healmet Well Journey :)");
        }
        else{
            console.log("Give him Charge");
        }
    }
    else if( age == 15 && age == 14 ){
        if( learnerCard == true && wellDriver == true){
            console.log("Drive honda But Contactual :)");
        }else{
            console.log("You can't Drive Honda");
        }
    }
    else{
        console.log("You can't Drive Honda");
    } */

// Using Loop for display 7 to 19 number using while loop

    /* let i = 7;
    while( i <= 19 ){
       console.log(i);
       i++;
    } */

/*     let i = 7;
    while( i <= 19 ){

        if( i % 2 != 0 ){
            console.log(i)            
        }

        i++;

    }
 */


// Create a Array Or declare an array, Nubmer of Elements. Update or Change 4th Position element. Add or Remove elements. check whether a spacific Value exists in the array.

    /* let friendsName = ["Mukit","Shuieb","Rocky","Hassan","Firoj","Meer","Justin","Akbar"];
    
    friendsName[4] = "Haider"; //changing Value in using index 
    let addElementInArray = friendsName.push("Shuvo");
    let removeElementInArray = friendsName.pop();
    let fistRemoveElementInArray = friendsName.shift();
    let fistaddElementInArray = friendsName.unshift("Raju");
    let findlenth = friendsName.length; */


    //console.log(findlenth);


// using while Loop and if else for out put show 7 to 19 //also find out 7 to 19 odd number 

/* let i = 7;

while( i <= 19){
    console.log(i);
    i++;
} */



// Numta Writing

    /* let givenNumber = 50;
    let i = 1; //Loop variable;

    while( i <= 10 ){
        let defaultValue = i + " X " + givenNumber ;
        let numta = i * givenNumber;
        let finalResult = defaultValue + " = " + numta;
        console.log(finalResult);
        i++;
    } */


    // Find out all Odd number 7 to 19
    // let i = 7;

    // while ( i <= 19 ){
    //     if( i % 2 == 1 ){
    //         console.log(i);
    //     }
    //     i++;
    // }

    // find odd number in 7 to 19

    /* let i = 7;

    while( i <= 19 ){
        if( i % 2 == 1 ){
            //console.log(i);
        }
        i++;
    } */


// use any for loop to display every elements of an array

    /* const friends = [ "Maruf", "Mobin", "Haider", "Mukit", "Rocky", "Harun", "Samir", "Shuieb", "Firoj", "Hassan" ];

    for( const friend of friends ){
        // console.log(friend);
    }

    friends[4] = "Muhit Khan";
    // console.log(friends);

    let countOfArrayLength = friends.length;

    console.log(countOfArrayLength,friends); */


// namta count 

   /*  let rockyCount = 2;

    let i = 1;

    while( i <= 10 ){
        let countOfNumber = i + " X " + rockyCount + " = ";
        let countResult = i * rockyCount ;
        let finalOutPut = countOfNumber + countResult;
        console.log(finalOutPut);
        i++;
    } */


// define a array and using for loop for two way 

    const friendsList = [ "Maruf", "Mubin", "Haider", "Hassan", "Amir", "Mukit", "Rocky", "Shuieb", "Harun", "Meer"];

    // for( const friend of friendsList ){
    //     //console.log( friend );
    // }

    // for( i = friendsList[0]; i < friendsList.length; i++){
    //     console.log(friendsList[i]);  --->Problem
    // }

   /*  let i = friendsList.indexOf(friendsList[0]);
  
    while( i < friendsList.length ){
        console.log(friendsList[i]);
        i++;
    } */

// You have an array of Numbers and also display only the number of 60 and bigger then 80;


    let arrayNumbers = [ 20 , 581, 84, 94, 87, 419, 6, 165, 15, 645, 64, 16, 14, 669 ];

/*     for(const arrayNumber of arrayNumbers){

        if( arrayNumber > 80){
        console.log(arrayNumber);
        }
    } */

    
    for( i = 0; i < arrayNumbers.length; i++){
       if( arrayNumbers[i] < 80 ){
           console.log(i)
       }
    }