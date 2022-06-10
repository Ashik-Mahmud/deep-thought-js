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