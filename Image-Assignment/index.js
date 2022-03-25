function getImage(){
    fetch('https://picsum.photos/200/300')
    .then(response => {
        console.log(response.url);
    const img = document.getElementById('img');
    img.setAttribute('src',response.url);
    })

}