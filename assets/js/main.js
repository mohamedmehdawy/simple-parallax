// elements
let wrapper = document.querySelector(".wrapper");
let header = wrapper.querySelector("header")
let title = header.querySelector("h1");
let info = wrapper.querySelector(".info");
let infoHeight = info.getBoundingClientRect().height;

// scroll event
wrapper.addEventListener("scroll", () => {
    // data
    let scrollY = wrapper.scrollTop;
    let headerInfo = header.getBoundingClientRect();
    let headerHeight = headerInfo.height;
    let heightPos = headerInfo.bottom;
    
    // set values
    title.style.transform = `translateY(${scrollY * 0.5}px)`;
    title.style.opacity = `${100 - (parseInt(headerHeight / heightPos) * 7)}%`;
    

})