function reverseString(){
    var a = "I am a js Developer",rev="";

    arr =[];
    let i=0;
    for(i=0;i<a.length;++i){
        if(a[i]===' '){
            arr.push(rev);
            rev = ""
        }
        rev+=a[i];
    }
    arr.push(rev);
    var res=""
    for(let i=arr.length-1;i>=0;--i){
        res = res+arr[i]+" "; 
    }
    res.trim();
    console.log(res);
}

function trianglePerimeter(a,b,c){
    console.log(a+b+c);
}

function fact(num){
    if(num<=1) 
        return num;
    return num * fact(num-1);
}

function countFreq(arr){
    
    let low  = 0, hi = arr.length - 1;
    let freq = 0;
    let flag = 0;
    while(low<=hi){

        mid = Math.floor((low+hi)/2)
        
        if(arr[mid]===1 && arr[mid-1]===0){
            flag = 1;
            break;
        } 
        
        if(arr[mid] === 0){
            low = mid+1;
        }else{
            hi = mid - 1 ;
        }
    }
    if(flag)
    {    
        freq = arr.length - mid;
        console.log(freq);
    }
    else{
        console.log(0);
    }
}

reverseString();
trianglePerimeter(1,2,4);
console.log(fact(5));
countFreq([1,1]);