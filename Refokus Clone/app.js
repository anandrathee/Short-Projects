let tl = gsap.timeline()

document.addEventListener('DOMContentLoaded', function() {
  const images = [
    {
      url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: "50%",
      left: "50%",
      isActive: false,
      id: "img-0"
    },
    {
      url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "56%",
      left: "44%",
      isActive: false,
      id: "img-1"
    },
    {
      url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "45%",
      left: "56%",
      isActive: false,
      id: "img-2"
    },
    {
      url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      top: "60%",
      left: "53%",
      isActive: false,
      id: "img-3"
    },
    {
      url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      top: "43%",
      left: "40%",
      isActive: false,
      id: "img-4"
    },
    {
      url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: "65%",
      left: "55%",
      isActive: false,
      id: "img-5"
    }
  ];

  const imagesContainer = document.getElementById('images-container');

  images.forEach(image => {
    const imgElement = document.createElement('img');
    imgElement.src = image.url;
    imgElement.style.top = image.top;
    imgElement.style.left = image.left;
    imgElement.classList.add('image');
    imgElement.id = image.id;
    imagesContainer.appendChild(imgElement);
  });

  function imagesShow(indices) {
    images.forEach((image, index) => {
      const imgElement = document.getElementById(image.id);
      if (indices.includes(index)) {
        imgElement.style.display = 'block';
      } else {
        imgElement.style.display = 'none';
      }
    });
  }

  document.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY / document.documentElement.scrollHeight;

    switch (Math.floor(scrollPosition * 100)) {
      case 0:
        imagesShow([]);
        break;
      case 1:
        imagesShow([0]);
        break;
      case 4:
        imagesShow([0, 1]);
        break;
      case 6:
        imagesShow([0, 1, 2]);
        break;
      case 8:
        imagesShow([0, 1, 2, 3]);
        break;
      case 9:
        imagesShow([0, 1, 2, 3, 4]);
        break;
      case 12:
        imagesShow([0, 1, 2, 3, 4, 5]);
        break;
      case 13:
        imagesShow([0, 1, 2, 3, 4, 5]);
        break;
      default:
       
        break;
    }
  });
});





function loadPage() {
  const links = ["Home", "Work", "Culture", "", "News", "Contact"];
  const nav = document.querySelector(".nav");

  links.map((elem, index) => {
    const aLink = document.createElement("a");
    aLink.className = "link";
    aLink.textContent = elem;

    if (elem.length === 0) {
      // here we are targeting empty string in links
      const divider = document.createElement("span");
      divider.className = "divider";
      nav.appendChild(divider); // here i have appned divider in HTML's nav container
    }
    if (index === 1) {
      const dot = document.createElement("span");
      dot.className = "dot";
      aLink.insertBefore(dot, aLink.firstChild);
    }

    nav.appendChild(aLink);
  });

  // Strip js******************************

  let data = [
    { url: "/CSSDesign.svg", number: 52 },
    {
      url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg",
      number: 2,
    },
    {
      url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg",
      number: 15,
    },
    {
      url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg",
      number: 52,
    },
    {
      url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg",
      number: 2,
    },
    {
      url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg",
      number: 15,
    },
  ];

  let strip = document.querySelector(".strip");

  let strips = data
    .map((item, index) => {
      return ` <div class="stripImg">
            <img class="stImg" src="${item.url}", number: 2 alt="">
        </div>`;
    })
    .join("");

  strip.innerHTML = strips;
}

// Cards *************************

let prodata = [
  {
    name: "Arqitel",
    image:
      "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
    des: "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate..",
  },
  {
    name: "TTR",
    image:
      "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
    des: "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
  },
  {
    name: "YIR 2022",
    image:
      "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
    des: "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
  },
  {
    name: "Yahoo!",
    image:
      "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
    des: "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
  },
];

let projects = document.querySelector(".projects");

let pData = prodata
  .map((elem, index) => {
    return `<div class="proCard">
            <div class="left"><h1>${elem.name}</h1></div>
            <div class="center">
            <img src="${elem.image}" alt="" class="proImg">
            </div>
            <div class="right">
                <p>${elem.des}</p>
                <button>Get Started</button>
            </div>
        </div>`;
  })
  .join("");

projects.innerHTML = pData;

// Marquees ***************************

const images = [
  [
    "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d275e12177716cb3f2ea_basf.svg",
    "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d27505e3a120466b87aa_singularity.svg",
    "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d275c2fcf540272672ef_intenseeye.svg",
    "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d27518bb52e4d642644e_bcgp.svg",
    "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d2756e8df24e52915c71_flowcode.svg",
    "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d275e1d5aa08ccc379dd_ypo.svg",
    "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d275909535ff431975cf_lavender.svg",
    "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d36963b956910ca67534_remind.svg",
    "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2ce14e6c85b010c2e1e3c_Logo%20White%201.svg",
  ],
];

const marqueesContainer = document.querySelector(".marquees");

let marqueeImages = images[0]
  .map((elem, index) => {
    return `<div class="marqueeInner">
                <img src="${elem}" alt="">
            </div>`;
  })
  .join("");

marqueesContainer.innerHTML = marqueeImages;

loadPage(); // called function

const dot = document.querySelector(".dot"); // blink effect code for dot
let dotFunc = setInterval(function () {
  dot.classList.toggle("off");
}, 1000);




tl.from("header", {
  y: -150,
  // stagger: 0.25,
  duration: 0.6,
  delay: 0.3     

});

tl.from(".work", {
  opacity:0,
  scale:0,
  // stagger: 0.25,
  duration: 0.6,
  delay: 0.3     

});



tl.from(".footerTop", {
  opacity:0,
  y: -250,
  // stagger: 0.25,
  duration: 0.6,
  delay: 0.3     

});



tl.from(".footerBottom", {
  opacity:0,
  y: 250,
  // stagger: 0.25,
  duration: 0.3,
  delay: 0.1    

});