/* Start JavaScript Coding  */

/* collapse Site dashboard  */
const dashboardBtn = document.querySelector('#dashboard-btn');
const siteDashboard = document.querySelector(".site-dashboard");
dashboardBtn.addEventListener("click", ()=>{
    siteDashboard.classList.toggle("active");
    if(siteDashboard.classList.contains("active")){
        dashboardBtn.querySelector("i").classList.remove("bx-menu")
        dashboardBtn.querySelector("i").classList.add("bx-x")
    }else{
        dashboardBtn.querySelector("i").classList.remove("bx-x")
        dashboardBtn.querySelector("i").classList.add("bx-menu")
    }
})

/*
*
* Showing All the Task 
* */

// Get Task Title 
const getTaskTitle = async() =>{
    const data = await fetch(`data.json`);
    const result = await data.json();
    const taskTitleArray = result?.tasks[0]?.assets.map(task => task.asset_title);  
    const tasksAssets = result?.tasks[0]?.assets;  
    return {taskTitleArray, tasksAssets};  
}
// showing all title on dashboard 
const showTaskContent = async() =>{
    const contentBoxTitle = document.querySelectorAll(".content-box__header");
    const {taskTitleArray, tasksAssets} = await getTaskTitle();   
    const taskTitle = document.querySelector(".task-title-area");
    taskTitle.innerHTML = taskTitleArray.map(title => `<li><a href="">${title}</a></li>`).join("");
    contentBoxTitle.forEach((title, ind) => {        
      title.innerHTML = taskTitleArray[ind];       
    })
   
    document.querySelector(".content-box__body p").innerText = tasksAssets[0]?.asset_description;
}
showTaskContent();


// Work With Accordion 
const contentBoxes = document.querySelectorAll(".content-box");
console.log(contentBoxes);
const addingClasses = () =>{
    
}
contentBoxes.forEach(box => {
    const boxTitle = box.querySelector(".content-box__header");
    boxTitle.addEventListener("click", ()=>{
        box.classList.toggle("active");
        boxTitle.classList.toggle("active");  
    })
    box.querySelector(".down").addEventListener("click", () => {
        box.classList.toggle("active");
        boxTitle.classList.toggle("active");        
    })
    
})


