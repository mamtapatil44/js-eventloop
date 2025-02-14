const fragment = document.createDocumentFragment();

 for(let i =0 ;i <=50 ;i++){
    let newEl = document.createElement("div");
     newEl.textContent = `list: ${i}`;
     fragment.appendChild(newEl)
 }

 document.body.appendChild(fragment); //Only one reflow occurs when the fragment is appended.