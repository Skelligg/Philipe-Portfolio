const hamburger = document.querySelector(".hamburger")
const sideBar = document.querySelector(".sidebar")
const sideBarTabs = document.querySelectorAll(".sidebar-tab")
const sideNames = document.querySelectorAll(".side-name")
const workPopUp = document.querySelector(".workPopUp");
const workSection = document.querySelector("#work");
gsap.registerPlugin(ScrollTrigger);

init();


function init(){
    hamburger.addEventListener("click",toggleSideBar)
    gsap.from('.workPopUp', {scrollTrigger: {
        trigger: "#home",
        start: "top-=50 top",
        end: "top top"
    }, duration: 1, y: "-50%", opacity: 0, ease: 'bounce', delay: 3,
        onComplete: () =>{
            gsap.to(".workPopUp", {scrollTrigger: {
                trigger: "#work", 
                start: "top center", 

                toggleActions: "play none none reverse",
                },
                duration: 1, ease: 'ease-in',opacity: 0 } )
        }
    })

}

function toggleSideBar(){
    if(sideBar.classList.contains("w-16")){
        for(let a of sideBarTabs){
            a.style.opacity = "1";
            a.className = "sidebar-tab"
        }

        for(let sideName of sideNames){
            sideName.classList.remove("delay-500")
            sideName.classList.remove("opacity-100")
            sideName.classList.add("opacity-0")
        }

        sideBar.classList.remove("delay-200")
        sideBarTabs[0].className += " transition ease-in-out duration-100 delay-100"
        sideBarTabs[1].className += " transition ease-in-out duration-100 delay-150"
        sideBarTabs[2].className += " transition ease-in-out duration-100 delay-200"
        sideBarTabs[3].className += " transition ease-in-out duration-100 delay-300"

        sideBar.classList.remove("w-16")
        sideBar.className += " w-[180px]"

    }
    else{
        for(let a of sideBarTabs){
            a.style.opacity = "0";
            a.className = "sidebar-tab"
        }

        for(let sideName of sideNames){
            sideName.classList.remove("opacity-0")
            sideName.classList.add("opacity-100")
            sideName.classList.add("delay-500")
        }

        sideBarTabs[0].className += " transition ease-in-out duration-100 delay-150"
        sideBarTabs[1].className += " transition ease-in-out duration-100 delay-100"
        sideBarTabs[2].className += " transition ease-in-out duration-100 delay-75"
        sideBarTabs[3].className += " transition ease-in-out duration-100 "

        sideBar.className += " delay-200"
        sideBar.classList.remove("w-[180px]")
        sideBar.className += " w-16"
    }

}