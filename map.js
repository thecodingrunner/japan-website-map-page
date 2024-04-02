const blogTitle = document.querySelector(".title")
const blogImage = Array.from(document.querySelectorAll(".image"))

console.log(blogImage)

let blogObj = fetch('./blogs.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    let blogObj = data;



    const map = document.querySelector("svg");
    console.log(blogObj)

    map.addEventListener("click", (event) => {
      event.stopPropagation();
      console.log(event.target.getAttribute("title"))
      let i = 0;
      blogObj.blogs.forEach(blog => {
        if (Object.values(blog).includes(event.target.getAttribute("title"))) {
          // blogTitle.textContent = blog.title;
          console.log(blogImage[i])
          console.log(blog.images[0])
          blogImage[i].src = blog.images[0];
          i++;
        }
      })
    },true)

const rightBtn = document.querySelector('.right-arrow')
const leftBtn = document.querySelector('.left-arrow')

const IMG_WIDTH = "30vw";
const IMG_NUM = 2;

let initial = 0;
let shiftRight = -IMG_WIDTH;
let shiftLeft = IMG_WIDTH;



rightBtn.addEventListener('click', (event) => {
  // images.classList.add('shiftRight');
  // images.classList.toggle('shiftRight');
  event.stopPropagation();
  console.log('test')
  if (initial === -(IMG_NUM*IMG_WIDTH)) return;
  console.log('test')
  initial += shiftRight
  console.log(initial)
  images.style.translate = `${initial}px`
  posCheck()
},true)


leftBtn.addEventListener('click', () => {
  // images.classList.add('shiftRight');
  // images.classList.toggle('shiftRight');
  if (initial === 0) return;
  console.log('test')
  initial += shiftLeft
  console.log(initial)
  images.style.translate = `${initial}px`
  posCheck()
})
  });


