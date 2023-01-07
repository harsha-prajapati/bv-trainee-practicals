let sections = document.querySelectorAll("section"),
    content = document.querySelectorAll(".bg"),
    headings = gsap.utils.toArray(".section-heading"),
    outerWrappers = gsap.utils.toArray(".outer"),
    innerWrappers = gsap.utils.toArray(".inner"),
    currentIndex = -1,
    // wrap = gsap.utils.wrap(0, sections.length),
    scrollingUp,
    scrollingDown,
    nav = document.querySelector('.section-navigation'),
    isDown = false,
    startY,
    scrollTop,
    scrolling,
    text,
    object,
    i = 0,
    
    soundButton = document.querySelector(".sound"),
    tolerance = 300,
    playing;
   const isMobile = /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

   function toggleVideoSoundPlay(video, audio) {
      video.volume = audio;
      video.muted = !video.muted;

      if(!video.muted) {
        playing = true;
      }
    }

    function toggleAudioSoundPlay() {
      var audio = document.getElementById("audio");
      soundButton.classList.toggle("audio-on");
      soundButton.querySelector(".sound-image").src = audio.paused ? "/media/uydpxvd2/sound.png" : "/media/hylbmniu/sound-off.png";
      audio.volume = 0.9;
      if(!audio.paused) {
        playing = true;
      }
      
      return audio.paused ? audio.play() : audio.pause();
    }


  soundButton.addEventListener('click', (e) => {
    
    if(currentIndex == 0) {
      let video = document.getElementById("bgvid");
        toggleAudioSoundPlay();
        toggleVideoSoundPlay(video, 0.2);
        if(soundButton.classList.contains('sound-on')) {
          playing = true;
        }
    } else if(currentIndex == 1) {
      let video2 = document.getElementById("bgvid3");
      if(!/iPhone|iPad|iPod/i.test(navigator.userAgent)){
        toggleVideoSoundPlay(video2, 0.5);
      }
      toggleAudioSoundPlay();
    } else {
      toggleAudioSoundPlay();
    }
  });


// LOADER BEFORE CONTENT LOADS
function loader() {
    var seconds;
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
      seconds = 40;
    }else{
      seconds = 10;
    }

  document.querySelector("body").style.visibility = "hidden";
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("bar");
    var width = 1;
    var id = setInterval(frame, seconds);
    function frame() {
      document.querySelector("#spinner").style.visibility = "visible";
      if (width >= 100) {
        clearInterval(id);
        i = 0;
        document.querySelector("body").style.visibility = "visible";
        document.querySelector("#spinner").style.visibility = "hidden";
      } else {
        width++;
        elem.innerHTML = width;
      }
    }
  }
}

loader();

  /* Mobile menu */
  document.querySelector(".hamb").addEventListener('click', (e) => {
    document.querySelector(".menu-mobile").classList.toggle("opened");
    document.body.classList.toggle("menu-mobile-active");
    document.querySelector(".hamburger-lines").classList.toggle("nav-opened");
  });

  const navItemsLinks = document.querySelectorAll('.section-navigation-mobile-link');

  navItemsLinks.forEach(navItemsLink => {
    navItemsLink.addEventListener('click', (e) => {
      document.querySelector(".menu-mobile").classList.remove("opened");
      document.body.classList.remove("menu-mobile-active");      
      document.querySelector(".hamburger-lines").classList.remove("nav-opened");
    });
   });

   const navItemsAll = document.querySelectorAll('.section-navigation-link');

   navItemsAll.forEach(navItemA => {
    navItemA.addEventListener('click', (e) => {
      let numSection = navItemA.getAttribute("data-section");

      if(currentIndex != numSection) {

        gotoSection(parseInt(numSection), 1);
        navItemA.scrollIntoView({
          behavior: 'auto',
          block: 'center',
          inline: 'center'
        });
      }
    });
   });
    

function gotoSection(index, direction) {

  document.getElementById("slider-dots").style.display = "none";
  document.querySelector(".scroll-disclaimer").style.color = "white";
  document.querySelector(".scroll-disclaimer").style.display = "none";

  document.body.classList.remove('dark-section');

  let navMenuItems = Array.from(document.getElementsByClassName('section-navigation-link'));
  navMenuItems.forEach(navMenuItem => {
    navMenuItem.classList.remove('active');
  });

  document.getElementById("menu-con").style.display = "flex";
  document.querySelector('nav').style.background = "rgba(255, 255, 255, 0.08)";

  
  let fromTop = direction === -1,
      dFactor = fromTop ? -1 : 1,
      tl = gsap.timeline({
        defaults: { 
          duration: 0.7, 
          ease: "power1.inOut" 
        },
      });

  function windRotate() {
    let windRotate = content[index].children.windrotate;
    let carRotate = content[index].children.frontrotate;

    if(windRotate || carRotate) {
        tl.to(".windafter", {
        left: '-50%',
        // top: 0,
        xPercent: -10,
        yPercent: 0,
      })
      tl.to(".rotation", {
        rotation: -45, 
        translate: -50 -50,
        scale: 1.4,
        ease: 'sine',
        duration: 4
      }, 1)
    }
  }

  function windRotateOff() {
    tl.to(".rotation", {
      rotation: 0, 
      translate: -0 -0,
      scale: 1,
      ease: 'sine',
      duration: 1
    })
    tl.to(".windafter", {
      left: 0
    }, 0)
  }

  function animateRotation(object) {

    if(object) {
      tl.from(object, {
        rotateX: -60,
    }).to(object, {
        rotateX: -20,
        ease: 'ease',
        duration: 2
    })
  }

  }

  function windFlyRight(wind, speed) {

    if(wind) {
      tl.from(wind, {
        xPercent: -60,
        opacity: 0,
        duration: 2
    }).to(wind, {
        xPercent: -30,
        ease: 'ease',
        opacity: 1,
        duration: 6,
        overwrite: true,
        transformOrigin: 'center center'
    }, 0)
  }
  tl.timeScale(speed);

  }

  function windFlyLeft(wind, speed) {

    if(wind) {
      tl.from(wind, {
        xPercent: 0,
        opacity: 0,
        duration: 2
    }).to(wind, {
        xPercent: -30,
        opacity: 1,
        ease: 'power1.out',
        duration: 2,
        duration: 6,
        overwrite: true,
        transformOrigin: 'center center'
    }, 0)
  }
  tl.timeScale(speed);

  }

  function animateText(speed) {
  text = content[index].querySelector(".text");
  
  if(text) {
      tl.from(text, {
          yPercent: 10,
          opacity: 0,
          duration: 1
      }).to(text, {
          yPercent: 0,
          opacity: 1,
          ease: 'power1.out',
          duration: 1,
          overwrite: true,
          transformOrigin: 'center center'
      })
      tl.timeScale(speed);
  }

  }
  
  function animateText2(text, speed) {
  
      if(text) {
          tl.from(text, {
              xPercent: -20,
              scale: 1,
              opacity: 0
          }).to(text, {
              xPercent: 0,
              opacity: 1,
              ease: 'power1.out',
              duration: 6,
              overwrite: true,
              transformOrigin: 'center center'
          })
          tl.timeScale(speed);
      }

  }
    
  function animateText3(text, speed) {
    
    if(text) {
        tl.from(text, {
            yPercent: 10,
            scale: 1,
            opacity: 0
        }).to(text, {
            yPercent: 0,
            opacity: 1,
            ease: 'power1.out',
            duration: 6,
            overwrite: true,
            transformOrigin: 'center center'
        })
        tl.timeScale(speed);
    }
  
    }
    
    function animateText4(text, speed) {
        
        if(text) {
            tl.from(text, {
                yPercent: 20,
                scale: 1,
                opacity: 0,
                duration: 6
            }).to(text, {
                yPercent: 0,
                opacity: 1,
                ease: 'power1.out',
                duration: 6,
                overwrite: true,
                transformOrigin: 'center center'
            })
            tl.timeScale(speed);
        }
  
    }
    
  function animateArticleImage(text, speed) {
    
        if(text) {
            tl.from(text, {
                xPercent: 20,
                scale: 1,
                opacity: 0
            }).to(text, {
                xPercent: 0,
                opacity: 1,
                ease: 'power1.out',
                duration: 6,
                overwrite: true,
                transformOrigin: 'center center'
            }, 0)
            tl.timeScale(speed);
        }
  
  }
  

  function animateObjectFromLeft(object, speed) {
    if(object) {
        tl.from(object, {
            xPercent: 10,
            opacity: 0,
            duration: 4
        }).to(object, {
            xPercent: 0,
            opacity: 1,
            ease: 'ease',
            duration: 4
        })
        tl.timeScale(speed);
    }
  }

  function animateObjectFromRight(object, speed) {
    if(object) {
        tl.from(object, {
            xPercent: -10,
            opacity: 0,
            duration: 4
        }).to(object, {
            xPercent: 0,
            ease: 'ease',
            opacity: 1,
            duration: 4
        })
        tl.timeScale(speed);
    }
  }
  
  function animateObjectFadingIn(object, speed) {
    if(object) {
        tl.from(object, {
            opacity: 0
        }).to(object, {
            opacity: 1,
            ease: 'ease',
            duration: 0.5
        })
    }
    tl.timeScale(speed);
  }

   function slideRight(speed) {
       
    tl.to(content[currentIndex], { xPercent: -100, duration: 3 }, { xPercent: 0, duration: 3 })
    tl.to(content[currentIndex], { opacity: 1 }, { opacity: 0 })
    .set(sections[currentIndex], { autoAlpha: 0 });

    gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
    tl.fromTo(content[index], { xPercent: 100, duration: 3 }, { xPercent: 0, duration: 3 }, 0)
    tl.to(content[currentIndex], { xPercent: 0})

    tl.timeScale(speed);

  }

  function slideTop() {
      
    gsap.set(sections[currentIndex], { zIndex: 0 });
    tl.to(content[currentIndex], { yPercent: -100 }, { yPercent: 0 })
    .set(sections[currentIndex], { autoAlpha: 0 });

    gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
    tl.fromTo(content[index], { yPercent: 100 }, { yPercent: 0 }, 0)
    tl.to(content[currentIndex], { yPercent: 0})

  }

  function fadeOut() {
      
    gsap.set(sections[currentIndex], { zIndex: 0 });
    tl.to(content[currentIndex], { opacity: 1 }, { opacity: 0 })
      .set(sections[currentIndex], { autoAlpha: 0 });

    gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
    tl.fromTo(content[index], { opacity: 0 }, { opacity: 1 }, 0)

  }

  function zoomIn() {
    
    gsap.set(sections[currentIndex], { zIndex: 0 });
    tl.to(content[currentIndex], { scale: 5 })
    .set(sections[currentIndex], { autoAlpha: 1 })
    .set(sections[currentIndex], { opacity: 0 }, 2);

    gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
    tl.fromTo(content[index], { scale: 1 }, { scale: 1 }, 0)
    tl.fromTo([outerWrappers[index], innerWrappers[index]], { 
        opacity: 0
        }, { 
            opacity: 1
        }, 0)
        .fromTo(content[index], { scale: 1 }, { scale: 1 }, 0)
    tl.to(content[currentIndex], { scale: 1})

    tl.timeScale(1);

  }

  function sliderDots() {

    document.getElementById("slider-dots").style.display = "flex";
    let dots = Array.from(document.getElementsByClassName('slider__dot'));
    let position = index - 5;

      dots.forEach(dot => {
        dot.classList.remove('dot-active');
        dot.addEventListener('click', () => {
          let numSect = dot.getAttribute("data-sect");
            if(currentIndex != numSect) { 
              document.querySelector('#slider-dots a:nth-child(' + position + ')').classList.add("dot-active");
              gotoSection(parseInt(numSect), 1);
            }
        });
    }); 

    document.querySelector('#slider-dots a:nth-child(' + position + ')').classList.add("dot-active");
    
  }

  function menuItemActive(menuItemNo) {
    document.querySelector('#menu-con a:nth-child(' + menuItemNo + ')').classList.add("active");
    document.querySelector('#menu-con a:nth-child(' + menuItemNo + ')').scrollIntoView({
      behavior: 'auto',
      block: 'center',
      inline: 'center'
    });
  }

  function scrollableSection(articleItem){

    let scroller = document.querySelector(articleItem);
    let diff = window.innerHeight - 260;
    scroller.style.height = diff.toString() + "px";
    scroller.scrollTop = 0;

    if (scroller.scrollHeight <= scroller.clientHeight)
    {
      scroller.style.overflowY = "hidden";
      scrollingDown = true;
      scrollingUp = true;
      scrolling = true;
    } else {
      scroller.scrollTop = 0;
      scroller.style.overflowY = "scroll";
      scrolling = false;
      scrollingDown = false;
      scrollingUp = false;
    }

    if(scroller.scrollTop == 0) {
      scrollingUp = true;
    }

    scroller.addEventListener("scroll", () => {
      if(scroller.scrollTop == 0) {
        scroller.style.overflowY = "hidden";
        setTimeout(() => {
          scroller.style.overflowY = "auto";
          scrollingUp = true;
          scrollingDown = false;
        }, 100);
      }
      if (scroller.scrollHeight - Math.round(scroller.scrollTop) === scroller.clientHeight) {
        scrollingUp = false;
        scrollingDown = false;
        scroller.style.overflowY = "hidden";
        setTimeout(() => {
          scroller.style.overflowY = "auto";
          scrollingUp = false;
          scrollingDown = true;
        }, 100);
      }
    })

  }

  if(index == 0 || index == 1) {
    document.querySelector('nav').style.background = "none";
    document.querySelector('nav').style.backdropFilter = "none";
    document.querySelector('nav').style.boxShadow = "none";
  } else {
    document.querySelector('nav').style.backdropFilter = "blur(30px)";
    document.querySelector('nav').style.boxShadow = "0 4px 30px rgb(0 0 0 / 10%)";
  }
  document.body.style.overflow = "hidden";
    
    if(index == 0) {
      document.querySelector(".scroll-disclaimer").style.display = "flex";

      if(soundButton.classList.contains('audio-on') && playing == true) {
          
        let video = document.getElementById("bgvid");
        if(!/iPhone|iPad|iPod/i.test(navigator.userAgent)){
          toggleVideoSoundPlay(video, 0.2);
        }
        
      }

      scrollingUp = false;
      scrollingDown = false;
      
      zoomIn();
      animateText3(content[index].querySelector(".text"), 6);
      document.getElementById("menu-con").style.display = "none";
      scrollingUp = false;
      scrollingDown = true;

    }

    if(index == 1) {

      if(soundButton.classList.contains('audio-on') && playing == true) {
          
          let video2 = document.getElementById("bgvid2");
          let video3 = document.getElementById("bgvid3");
          if(!/iPhone|iPad|iPod/i.test(navigator.userAgent)){
            toggleVideoSoundPlay(video2, 0.2);
            toggleVideoSoundPlay(video3, 0.2);
          }
          
        }
        let video = document.getElementById("bgvid");
        video.muted = true;
        scrollingUp = false;
        scrollingDown = false;
        document.getElementById("menu-con").style.display = "none";
        zoomIn();

        let clouds = document.getElementById("bgvid2");
        tl.fromTo(clouds, { opacity: 1 }, { opacity: 0 }, 10)
        tl.to(clouds, { muted: true }, 10);
        animateText3(content[index].querySelector(".text"), 6);

        scrollingDown = true;      
    }
  
    if(index == 2) {
     
    let audioRev = document.getElementById("rev");
    if(soundButton.classList.contains('audio-on')) {
        audioRev.play();
        audioRev.volume = 0.3;
    }

    let turntableVideo = document.getElementById('turntableDesktop');

    if (window.innerWidth <= 768) {
      turntableVideo = document.getElementById('turntable');
    }
    
      turntableVideo.addEventListener('loadedmetadata', function() {
        this.currentTime = 1;
      }, false);

      turntableVideo.currentTime = 0;
      turntableVideo.play();
            
      zoomIn();      
      animateText3(content[index].querySelector(".text-intro--third"), 10);

      let tlText = gsap.timeline({
        defaults: { 
          duration: 0.7, 
          ease: "power1.inOut" 
        },
      });

      tlText.to(".text-intro--third", {
            opacity: 0,
            delay: 5
      });
      
      let video2 = document.getElementById("bgvid2");
      video2.muted = true;
      let video3 = document.getElementById("bgvid3");
      video3.muted = true;

      let menu = document.getElementById("menu-con");
      menu.style.display = "flex";
      animateObjectFadingIn(menu, 8);

      const navItems = document.querySelectorAll('.section-navigation a');
      navItems.forEach((navItem) => {
        tl.from(navItem, {
          marginLeft: -5,
          ease: 'linear',
          opacity: 0,
          duration: 4
        }).to(navItem, {
            marginLeft: 0,
            ease: 'linear',
            opacity: 1,
            duration: 2
        });
      }, 0.2);

      tl.timeScale(23);

      menuItemActive(1);

      setTimeout(function(){
        document.querySelector(".scroll-disclaimer").style.display = "flex";
        }, 6000); 

      scrollingUp = true;
      scrollingDown = true;
    } 

    if(index == 3) {

      menuItemActive(1);

      document.querySelector(".fuel-consumption").style.color = "white";
      var cusid_ele = document.getElementsByClassName('fuel-consumption-link');
      for (var i = 0; i < cusid_ele.length; ++i) {
          cusid_ele[i].style.color = "white";
      }
      // document.querySelector(".mistral__wrapper").style.overflowY = "hidden";
      document.getElementById("menu-con").style.display = "flex";
      // document.querySelector('#menu-con a:nth-child(1)').scrollIntoView({behavior: "smooth", inline: "center"});
        scrollingUp = true;
        scrollingDown = true;
        zoomIn();
        animateText3(content[index].querySelector(".text"), 6);
        // animateText(3);
    }

    if(index == 4) {
        let cloudsoverlay = document.getElementById("clouds");
        tl.fromTo(cloudsoverlay, { opacity: 1, zIndex: 10001 }, { opacity: 0 }, 4)
        tl.to(cloudsoverlay, { muted: true }, 4);

        scrollingUp = true;
        scrollingDown = true;
        menuItemActive(2);

        document.querySelector(".fuel-consumption").style.color = "white";
        var cusid_ele = document.getElementsByClassName('fuel-consumption-link');
        for (var i = 0; i < cusid_ele.length; ++i) {
            cusid_ele[i].style.color = "white";
        }
        fadeOut();
        // animateObjectFromLeft(content[index].querySelector(".wind"));
        windFlyLeft(content[index].querySelector(".wind"), 6);
        // windRotateOff();
        animateText3(content[index].querySelector(".text"), 6);
        //animateText(3);
      
    }

    if(index == 5) {
      scrollingUp = true;
      scrollingDown = true;

      menuItemActive(2);
      
      gsap.set(sections[currentIndex], { zIndex: 0, autoAlpha: 0 });
      gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
      
      windRotate();

      tl.from('.sketch', {
      display: 'none',
      opacity: 0,
      ease: 'sine',
      delay: 5,
      duration: 6
      }).to('.sketch', {
      display: 'block',
      opacity: 1,
      delay: 5,
      duration: 3
      }, 2);
    tl.to(".topafter", {
        opacity: 0.4,
        duration: 3,
        delay: 9
      }, 0)
      
      animateText3(content[index].querySelector(".text"), 6);
      
    }

    if(index == 6) {

      menuItemActive(3);

      sliderDots();

      zoomIn();

      let numW = index - 4;
      let windNum = "wind" + numW;
      let accWind = content[index].querySelector("#" + windNum);

      object = content[index].querySelector(".back");
      animateObjectFromLeft(object, 1);
      windFlyLeft(accWind, 4);

      // animateText(3);
      animateText4(content[index].querySelector(".slide-title-small"), 10);
      animateText4(content[index].querySelector(".slide-description-small"), 10);
      
      scrollingUp = true;
      scrollingDown = true;
    }

    if(index == 7) {
      scrollingUp = true;
      scrollingDown = true;

      menuItemActive(3);

      zoomIn();

      let numW = index - 4;
      let windNum = "wind" + numW;
      let accWind = content[index].querySelector("#" + windNum);
      object = content[index].querySelector(".front");
      animateObjectFromLeft(object, 1);
      windFlyLeft(accWind, 4);
      sliderDots();

      animateText3(content[index].querySelector(".slide-title-small"), 6);
      animateText4(content[index].querySelector(".slide-description-small"), 10);
    }

    if(index == 8) {
      scrollingUp = true;
      scrollingDown = true;

      menuItemActive(3);
      zoomIn();
      object = content[index].querySelector(".side");
      animateObjectFromRight(object, 1);
      let numW = index - 4;
      let windNum = "wind" + numW;
      let accWind = content[index].querySelector("#" + windNum);
      windFlyRight(accWind, 2);
      sliderDots();
      animateText3(content[index].querySelector(".slide-title-small"), 6);
      animateText4(content[index].querySelector(".slide-description-small"), 10);
    }

    if(index == 9) {
      scrollingUp = true;
      scrollingDown = true;
      menuItemActive(3);
      slideRight(1);
      sliderDots();
      //animateText3(content[index].querySelector(".text"), 6);
      animateText3(content[index].querySelector(".slide-title-small"), 6);
      animateText4(content[index].querySelector(".slide-description-small"), 10);
    }

    if(index == 10 || index == 11 || index == 12) {
      scrollingUp = true;
      scrollingDown = true;

      sliderDots();
      menuItemActive(3);
      slideRight(1);
      //animateText3(content[index].querySelector(".text"), 6);
      animateText3(content[index].querySelector(".slide-title-small"), 6);
      animateText4(content[index].querySelector(".slide-description-small"), 10);
    }

    if (index == 13) {
      document.body.classList.add('dark-section');

      slideTop(5);

      menuItemActive(4);
      
      animateText2(content[index].querySelector(".news-listing__text"), 6);
      animateArticleImage(content[index].querySelector(".news-listing__image"), 10);
      if(isMobile){
        scrollableSection(".news-listing__scroller-1");
        let scroller = document.querySelector(".news-listing__scroller-1");
        if(scroller.scrollTop > 0 || scroller.scrollTop < 0) {
          scroller.scrollTop = 0;
        }
      } else{
        scrollingUp = true;
        scrollingDown = true;
      } 
    }

    if (index == 14) {
      document.body.classList.add('dark-section');
      slideTop(5);
      menuItemActive(5);

      animateText2(content[index].querySelector(".news-listing__text"), 6);
      animateArticleImage(content[index].querySelector(".news-listing__image"), 9);

      if(isMobile){
        scrollableSection(".news-listing__scroller-2");
        let scroller = document.querySelector(".news-listing__scroller-2");
        if(scroller.scrollTop > 0 || scroller.scrollTop < 0) {
          scroller.scrollTop = 0;
        }
      } else{
        scrollingUp = true;
        scrollingDown = true;
      } 
    }
    
    if(index == 13 || index == 14) {
        console.log("13 or 14");
        if(isMobile){
            document.querySelector(".fuel-consumption").style.background = "black";
        }
    } else {
        document.querySelector(".fuel-consumption").style.background = "transparent";
    }

    if(index == 15) {
      document.body.classList.add('dark-section');
      slideTop(5);
      let tlRotate = gsap.timeline();

      tlRotate.from('.carousel', {
        rotateX: -60,
    }).to('.carousel', {
        rotateX: -20,
        ease: 'ease',
        duration: 2
    })
      scrollingDown = false;
      scrollingUp = true;
      
      menuItemActive(6);

      const images = document.querySelectorAll('.carousel-image')
      const radius = 600
      const progress = {
        value: 0
      }
      const carousel = document.querySelector('.carousel')
      
      Observer.create({
        target: carousel,
        type: "wheel, touch",
        onPress: (self) => {
          carousel.style.cursor = 'grabbing'
        },
        onRelease: (self) => {
          carousel.style.cursor = 'grab'
        },
        onChange: (self) => {
          gsap.killTweensOf(progress)
          const p = self.event.type === 'wheel' ? self.deltaY * -.0005 : self.deltaY * .05
          gsap.to(progress, {
            duration: 2,
            ease: 'power4.out',
            value: `+=${p}`
          })
        }
      })
      
      const animate = () => {
        images.forEach((image, index) => {
          const theta = index / images.length - progress.value
          const x = -Math.sin(theta * Math.PI * 2) * radius
          const y = Math.cos(theta * Math.PI * 2) * radius
          image.style.transform = `translate3d(${x}px, 0px, ${y}px)`
        })
      }
      gsap.ticker.add(animate)

    }

    currentIndex = index;
 
}

let indicator;

if(!/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){

   Observer.create({
    trigger: "section",
    type: "wheel, touch",
    wheelSpeed: -1,
    onDown: () => {
      indicator = "down";
     },
    onUp: () => {
      indicator = "up";
     },
     onStop: () => {
      if(indicator == "down" && scrollingUp && currentIndex !== 2) {
        gotoSection(currentIndex - 1, 1);
      } else if(indicator == "down" && scrollingUp && currentIndex === 2) {
        gotoSection(currentIndex - 2, 1);
      } else if (indicator == "up" && scrollingDown && currentIndex < sections.length - 1) {
        gotoSection(currentIndex + 1, -1)
      }
    },
    ignore: ".navigation, .section-navigation, .section-navigation-link, .settings, .sound-image",
  });
  } else {
    Observer.create({
      trigger: "section",
      type: "wheel, touch",
      wheelSpeed: -1,
      onDown: () => {
        indicator = "down";

          if(scrollingUp && currentIndex > 0 && currentIndex !== 2 || scrolling) {
            gotoSection(currentIndex - 1, 1);
          } else if(scrollingUp && currentIndex === 2) {
            gotoSection(currentIndex - 2, 1);
          }
        scrollingUp = false;

      },
      onUp: () => {
        indicator = "up";

        if(scrollingDown && currentIndex < sections.length - 1 || scrolling) {
          gotoSection(currentIndex + 1, -1);
        }
        if(currentIndex != 0) {
          scrollingDown = false;
        }
      },
      onStop: () => {
        if(currentIndex !== 13 && currentIndex !== 14) {
          scrollingDown = true;
          scrollingUp = true;
        }
      },
      ignore: ".settings, .sound-image, .news-listing__text, .news-listing__scroller",
  });
  }
 

  gotoSection(0, 1);
