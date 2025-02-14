const conatiner = document.getElementById('list');

function createRow(item){
    let div = document.createElement('div');
    div.textContent = `${item}`;
    return div;
}

const observable =  new IntersectionObserver(entries=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.appendChild(createRow(entry.target.dataset.index))
            observable.unobserve(entry.target)
        }
    })

},{root:conatiner})


for(let i =0 ;i <=1000;i++){
    let placeholder =  document.createElement("div");
    placeholder.dataset.index =i;
    placeholder.style.height ='20px';
    observable.observe(placeholder)
    conatiner.appendChild(placeholder)

}