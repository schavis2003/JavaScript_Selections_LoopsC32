console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for (let i = 0; i < 100; i++)
{
    if (i % 2 == 0) 
    {
        continue;
    }
    else
    {
        console.log(i);
    }

}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for (let i = 1; i < 100; i++)
{
     
if (i % 3 == 0 && i % 5 == 0) 

{
    console.log(i, "FIZZBUZZ");
}
    else
    {
        if (i % 3 == 0)
        {
            console.log(i, "FIZZ");
        }
        
        if (i % 5 == 0);
        {
            console.log(i, "BUZZ")
        }
    }
}

//EXERCISE 3
//let i = 1
//do
//{
   // if (i % 3 == 0 && i % 5 == 0)
   //     {
   //     console.log("FIZZBUZZ");
   //     }

   //     else if (i % 3 == 0)
   //     {
   //     console.log("FIZZ");

   //     }
   //     else if (i % 5 == 0)
   //     {
   //         console.log("BUZZ");
   //     }
   //     else
   //     {
   //          console.log(i);
   //     }
   //         i++
 
//let i = 1
//while (i <=100)
//{
//    let output = "";
//    if (i % 3 == 0){
//        output +="FIZZ";
//    }
    
//    if (i % 5 == 0){
//        output += "BUZZ";
//    }
//    console.log(`${i}  ${output}`);
 //   i++;
//}     

//EXERCISE 4: Find Value

for (let i = 1; i <= n ; i++) 
        
    if (i == numberToFind) {

    
    console.log(`Found ${numberToFind}!`);
    break;
}
if (i == n)
console.log(`Did not find ${numberToFind} within 1-${n}..`);


    



 
    

    
    






    