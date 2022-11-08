document.addEventListener("readystatechange",function(){
  if(document.readyState === "complete"){
       gsap.to(".loading",{
          y:"-100%",
          display:"none",

      })
     
  }

 
})










function init() {
    gsap.registerPlugin(ScrollTrigger);
  
    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    
    
   
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
    
  
  }
  // init()
  
  
  gsap.from(".section1 h1", {
    opacity: 0,
    onStart: function () {
      $('.section1 h1').textillate({ in: { effect: 'fadeInUp' } });
    }
  })
  
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
  
  // =============nav=========
  var flag = 0;
  var menubar = document.querySelector("#menubar"),
    menu = document.querySelector("#menu"),
    mla = document.querySelector("#mla"),
    mlb = document.querySelector("#mlb"),
    mlc = document.querySelector("#mlc"),
    menubaropen = document.querySelector("#menubaropen"),
    sopen = document.querySelector("#sopen"),
    sropen = document.querySelector("#servicesopen");
  
  if (flag === 0) {
    sopen.addEventListener("mouseover", function () {
      sropen.style.display = "flex"
      sropen.style.opacity = "1"
    })
    sropen.addEventListener("mouseover", function () {
      sropen.style.display = "flex"
      sropen.style.opacity = "1"
    })
    sropen.addEventListener("mouseout", function () {
      sropen.style.display = "none"
      flag = 1;
    })
  }
  
  
  menubar.addEventListener("click", function () {
    if (flag === 0) {
      mla.style.transform = "rotate(-45deg)";
      mla.style.transformOrigin = "80% 30%";
      mlb.style.opacity = "0";
      mlc.style.transform = "rotate(45deg)";
      mlc.style.transformOrigin = "80% 30%";
      mlc.style.width = "100%";
      menubaropen.style.display = "flex";
      menubaropen.style.top = "0%"
      flag = 1;
  
    } else {
      mlb.style.opacity = "1";
      mla.style.transform = "rotate(0deg)";
      mla.style.transformOrigin = "80% 30%";
      mlc.style.transform = "rotate(0deg)";
      mlc.style.transformOrigin = "80% 30%";
      mlc.style.width = "50%";
      menubaropen.style.display = "none";
      menubaropen.style.top = "100%";
      flag = 0;
    }
  })
  
  
    // =============nav=========