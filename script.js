const contactForm=document.querySelector
("#contactForm");
const successMsg=document.querySelector
("#successMsg");
contactForm.addEventListener("submit",()=>{
    event.preventDefault();
    const username=contactForm.name.value;
    const email=contactForm.email.value;
    const message=contactForm.message.value;
    console.log(`username, email, message`);
    successMsg.style.display="block";
    contactForm.reset();
    setTimeout(() => {
        successMsg.style.display="none";
    }, 3000);
});
const taskForm=document.querySelector("#taskForm");
const taskList=document.querySelector("#taskList");
const tasks=document.querySelector("#tasks");
taskForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const input=tasks.value;
    if(input==="")return;
    const li=document.createElement("li");
    const deleteBtn=document.createElement("button");
    deleteBtn.textContent="delete";
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.addEventListener("click",(e)=>{
     li.remove();
    });
    const doneBtn=document.createElement("button");
    doneBtn.textContent="done";
    doneBtn.classList.add("doneBtn");
    const span=document.createElement("span");
    span.textContent=input;
    doneBtn.addEventListener("click", (e)=>{
        span.classList.toggle("completed");
    });
    li.appendChild(span);
    li.appendChild(deleteBtn);
    li.appendChild(doneBtn);
    taskList.appendChild(li);
    taskForm.reset();
});
const menuBtn=document.querySelector(".menu-Btn");
const navLinks=document.querySelector(".navLinks");
const overlay=document.querySelector(".overlay");
menuBtn.addEventListener("click",  ()=>{
    menuBtn.classList.toggle("active");
    navLinks.classList.toggle("active");
    overlay.classList.toggle("active");
});
overlay.addEventListener("click", ()=>{
    menuBtn.classList.remove("active");
    navLinks.classList.remove("active");
    overlay.classList.remove("active");
});
