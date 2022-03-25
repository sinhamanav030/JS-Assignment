function isPrime(num){
    for(let i=2;i*i<=num;++i){
        if(num%i==0){
            return false;
        }
    }
    return true;
}


function getPrimeNums(lo,hi){
    let arr = [];
    for(let i=lo;i<=hi;++i){
        if(isPrime(i)){
            arr.push(i);
        }
    }
    return arr;
}

function getPrime(){
    document.querySelector('#form').addEventListener('submit',(e)=>{
        e.preventDefault();
    })
    const form = document.querySelector("#form");

    
    const lo = parseInt(form.from.value);
    const hi = parseInt(form.to.value);

    if(lo>=hi || lo<2 || hi>200){
        alert("Please enter range b/w 2 to 200");
    }else{
        const arr = getPrimeNums(lo,hi);
        const list = document.getElementById('prime-list');
        list.innerHTML="";
        arr.forEach((prime,id,arr)=>{
            const li = document.createElement('li');
            li.innerHTML = `${prime}`;
            list.appendChild(li);
        })

    }

}

