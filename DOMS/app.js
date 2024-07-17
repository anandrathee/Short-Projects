let tl = gsap.timeline()

let crsr = document.querySelector(".crsr");

function cursorAnimation() {
    document.addEventListener("mousemove", function(dets) {
        crsr.style.left = `${dets.pageX - crsr.offsetWidth / 2}px`;
        crsr.style.top = `${dets.pageY - crsr.offsetHeight / 2}px`;
    });
}

cursorAnimation();


const pencil = document.getElementById('pencil');
const cursor = document.querySelector('.crsr');

function getAngle(x1, y1, x2, y2) {
  return Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
}

document.addEventListener('mousemove', (e) => {
  const cursorX = e.clientX;
  const cursorY = e.clientY;
  const pencilX = pencil.offsetLeft + pencil.offsetWidth / 2;
  const pencilY = pencil.offsetTop + pencil.offsetHeight / 2;
  const angle = getAngle(pencilX, pencilY, cursorX, cursorY);

  gsap.to(pencil, {
    rotation: angle,
    duration: 0,
    ease: 'power2.out',
  });
});




tl.from("main",{
  scale: 0,
  duration: 1,
  delay:0.7
})

tl.from("header", {
  y: -150,
  // stagger: 0.25,
  duration: 0.8,
  delay: 0.2     

});



tl.from("#dom", {
    scale: 0,
    // stagger: 0.25,
    rotate:360,
    duration: 0.5,
     

});

tl.from("#homePara", {
    x:-11000,
    stagger: 0.25,
    duration: 0.3,
    

});

tl.from("#pencil", {
    scale:0,
    // stagger: 0.25,
    duration: 0.5,
    delay: 0.2    

});


const data = [
  {image: "https://domsindia.com/wp-content/uploads/2022/09/DOMS-Karbon-Eraser-Tipped-Pencil-1-300x300.jpg", name: "Pencils & Accessories"},
  {image: "https://domsindia.com/wp-content/uploads/2022/08/DOMS-Colour-Pencil-Flat-Tin-Pack-24-Shades-1-300x300.jpg", name: "Drawing & Colouring"},
  {image: "https://domsindia.com/wp-content/uploads/2022/07/DOMS-Glitter-Colour-5.5-ml-1-300x300.jpg", name: "Crafts & Hobbyist"},
  {image: "https://domsindia.com/wp-content/uploads/2022/12/CANDY-ARTIST-WITH-BRUSH-300x300.jpg", name: "Fine Art"},
  {image: "https://domsindia.com/wp-content/uploads/2022/12/MAGNETIC-DUSTER-300x300.jpg", name: "Markers & Highlighters"},
  {image: "https://domsindia.com/wp-content/uploads/2022/12/ENGINEO-01-300x300.jpg", name: "Mathematical Drawing Instruments"},
  {image: "https://domsindia.com/wp-content/uploads/2022/11/7801-7810-300x300.png", name: "Paper Stationery"},
  {image: "https://domsindia.com/wp-content/uploads/2022/11/Proxima-50-Pcs-1-300x300.png", name: "Pens & Writing Instruments"},
  {image: "https://domsindia.com/wp-content/uploads/2022/07/DOMS-Painting-Kit-300x300.jpg", name: "Gifting"},
]

function dataCall(){

  let proData = data.map((item, index)=>{
    return `<div class="card">
            <div class="img">
                <img src="${item.image}" alt="">
            </div>
            <div class="">
                <h1 class="text">${item.name}</h1>
            </div>
        </div>`

  }).join("")


  document.querySelector(".product").innerHTML = proData;
}

dataCall()