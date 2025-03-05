const colorName=document.getElementById("colorName");
const createBtn=document.getElementById("createBtn");
const buttonList=document.getElementById("buttonList");

createBtn.addEventListener("click",()=>{
    let color=colorName.value;
    const colorBtn=document.createElement("button");
    colorBtn.style.backgroundColor=color;
    // colorBtn.style.color=w;
    colorBtn.textContent=color;
    buttonList.appendChild(colorBtn)
})