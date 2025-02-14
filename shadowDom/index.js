
const shadowHost = document.getElementById("shadow-host");
const shadowRoot = shadowHost.attachShadow({mode:'open'});

const wrapper = document.createElement('div');
wrapper.style.padding ='30px';
wrapper.style.color ='lightgray';
const btn = document.createElement('button');
btn.textContent = "CLick me!";
btn.style.padding ='2px'
btn.addEventListener('click',()=>{
    alert("Button clicked inside Shadow DOM!");
    const customEvent = new Event("custom-click", { bubbles: true, composed: true });
    btn.dispatchEvent(customEvent);
})
// wrapper.addEventListener('click',()=>{
//     alert("Button clicked inside wrapper");
// })
// wrapper.appendChild(btn)
shadowRoot.appendChild(btn);

document.addEventListener("custom-click", () => {
    alert("Custom click event escaped the Shadow DOM!");
}); 
document.addEventListener("click", () => {
    alert("Click event in light DOM!1111");
});