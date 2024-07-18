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
    if (window.scrollY === 0) {
        gsap.from('.workPopUp', {
            duration: 1,
            y: "-50%",
            opacity: 0,
            ease: 'bounce',
            delay: 3,
            onComplete: createScrollTriggerAnimation
        });
    } else {
        createScrollTriggerAnimation();
    }
}

function createScrollTriggerAnimation() {
    gsap.to(".workPopUp", {
        scrollTrigger: {
            trigger: "#work",
            start: "top 70%",
            toggleActions: "play none none reverse",
        },
        duration: 1,
        ease: 'ease-in',
        opacity: 0
    });
}

function toggleSideBar(){
    if(sideBar.classList.contains("w-16")){
        for(let a of sideBarTabs){
            a.className = "sidebar-tab transition-[visibility] ease-in-out duration-100"
        }

        for(let sideName of sideNames){
            sideName.classList.remove("delay-[400ms]")
            sideName.classList.remove("opacity-100")
            sideName.classList.add("opacity-0")
        }

        sideBar.classList.remove("delay-200")
        sideBarTabs[0].className += " delay-100"
        sideBarTabs[1].className += " delay-150"
        sideBarTabs[2].className += " delay-200"

        sideBar.classList.remove("w-16")
        sideBar.className += " w-[180px]"
        sideBar.className += " grey-out"
    }
    else{
        for(let a of sideBarTabs){
            a.className = "sidebar-tab invisible transition-[visibility] ease-in-out duration-100"

        }

        for(let sideName of sideNames){
            sideName.classList.remove("opacity-0")
            sideName.classList.add("opacity-100")
            sideName.classList.add("delay-[400ms]")
        }


        sideBarTabs[0].className += " delay-100"
        sideBarTabs[1].className += " delay-75"
        sideBarTabs[2].className += " "

        sideBar.className += " delay-200"
        sideBar.classList.remove("w-[180px]")
        sideBar.classList.remove("grey-out")
        sideBar.className += " w-16"
    }

}