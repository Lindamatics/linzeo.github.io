const video1 = document.getElementById('projectVideo1');
const video2 = document.getElementById('projectVideo2');
const video3 = document.getElementById('projectVideo3');

//sidebar elements//
const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const close = document.querySelector('.close-icon');

const videoList = [video1, video2, video3];

videoList.forEach(function(video){
    video.addEventListener('mouseover', function(){
        video.play()
    })
    video.addEventListener('mouseout', function(){
        video.pause()
    })
})


//sidebar elements//

menu.addEventListener("click", function(){
    sideBar.classList.remove("close-sidebar")
    sideBar.classList.add("open-sidebar")
})

close.addEventListener("click", function(){
    sideBar.classList.remove("open-sidebar")
    sideBar.classList.add("close-sidebar")
})

// fokussiert mitte scharf, macht andere elemente außerhalb des radius unscharf
  function updateVisibleElement() {
    const elements = document.querySelectorAll('.autoBlur');
    const viewportMiddle = window.innerHeight / 2;
    const threshold = 130;//Sichtbarkeitsbereich: ±130px zur Mitte 
  
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      const elMiddle = rect.top + rect.height / 2;
      const distanceToCenter = Math.abs(viewportMiddle - elMiddle);
  
      if (distanceToCenter < threshold) {
        el.classList.add('visible');
      } else {
        el.classList.remove('visible');
      }
    });
  }
  
  // Initialer Aufruf & Events binden
  window.addEventListener('scroll', updateVisibleElement);
  window.addEventListener('resize', updateVisibleElement);
  window.addEventListener('load', updateVisibleElement);

  //autoDisplay Funktion für die Überschriften h1, slidet von oben rein

  function updateVisibleElements() {
    const elements = document.querySelectorAll('.autoDisplay');
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight * 0.75 && rect.bottom > 0;

      if (isVisible) {
        el.classList.add('visible');
      } else {
        el.classList.remove('visible');
      }
    });
  }

  window.addEventListener('scroll', updateVisibleElements);
  window.addEventListener('load', updateVisibleElements);
  window.addEventListener('resize', updateVisibleElements);