const container = document.getElementById("list-container");
const elements = [];

for(let i= 0 ; i<=50;i++){
    let div = document.createElement('div');
     div.textContent =`append: ${i}`;
     elements.push(div);

}

container.append(...elements) // Append all at once