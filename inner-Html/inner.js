const conatiner = document.getElementById('list-container');
let htmlString = "";
for(let i= 0;i <=50 ;i++){
    htmlString += `<p>${i}</p>`
}
conatiner.innerHTML = htmlString;