const content = document.getElementById('content');

const observer = new MutationObserver(mutuations=>{
    mutuations.forEach((mutuation)=>{
        if(mutuation.type === 'childList'){
            console.log('New child node added:', mutuation.addedNodes);
        }
    })

})

observer.observe(content,{childList :true})

setTimeout(() => {
    let newParagraph = document.createElement('p');
    newParagraph.textContent = 'This paragraph was added dynamically!';
    content.appendChild(newParagraph);
}, 2000);