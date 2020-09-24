document.getElementById("btn").addEventListener("click", fibonacci)

var i;
document.getElementById("dizi").innerHTML ="fibonacci Array";



function fibonacci(){
    const enterd_number = document.getElementById("inp").value;
    var fib_num = [];
    for(i=-2; i<enterd_number;i++ ){
        if (i < 0 ){
            fib_num.push(1);
            

        } else if (i < enterd_number-2 ){
            fib_num.push(fib_num[i]+fib_num[i+1] ); 

        } 
        
    }

    if (isNaN(enterd_number) || enterd_number < 1 ){
        document.getElementById("dizi").innerHTML = "Are you sure that this is a True number?";
        document.getElementById("tek").innerHTML =enterd_number+" is not a true value ";
    } else if (enterd_number == 1){
        document.getElementById("dizi").innerHTML =fib_num[0];
        document.getElementById("tek").innerHTML =enterd_number+". fibonacci is: "+fib_num[0] ; 
    } else if (enterd_number == 2){
        document.getElementById("dizi").innerHTML =fib_num[0] +", "+  fib_num[1];
        document.getElementById("tek").innerHTML =enterd_number+". fibonacci is: "+fib_num[1] ; 
    } else{
        document.getElementById("dizi").innerHTML =fib_num;
        document.getElementById("tek").innerHTML =enterd_number+". fibonacci is: "+fib_num[fib_num.length - 1] ;

    } 
    


}