window.onload = function() {
  let modalWindow = document.querySelector('.modal-window');
  console.log(modalWindow);
  let btnOpen = document.querySelector('.btn-open');
  btnOpen.style = 'background-color:#6fb98f;border: none;width:150px;height:50px;border-radius:5px;font-size:14px;font-weight:700;'
  console.log(btnOpen);
  
  let bodyElement = document.querySelector('body');
  bodyElement.style = 'margin:0 auto;width:1750px;margin-top:100px';
 let square = document.querySelector('.square');
 let btnClose1 = document.querySelector('.btn');
  btnClose1.style = 'background-color:#6fb98f;border: none;width:150px;height:50px;border-radius:5px;font-size:14px;font-weight:700;'
for(let i = 0;i<100;i++){
  let divElement = document.createElement('div');
  divElement.addEventListener('click',function() {
    this.style.backgroundColor='red'
  });
  square.appendChild(divElement); 
  square.style.marginBottom = '150px';
  divElement.style = 'height: 50px;width: 50px;   cursor: pointer;background: aqua;margin:10px;display:inline-block';
};




 
  btnOpen.onclick = function () {
    modalWindow.style.display = 'block'
    block.style.display = 'block'
  };
  let btnClose = document.querySelector('.btn');
  console.log(btnClose);
  btnClose.onclick = function () {
  modalWindow.style.display = 'none'
  block.style.display = 'none'
  }
  let block = document.querySelector('.block');
  block.addEventListener('click', function block1 (e) {
  if(e.target.classList.contains('block')){
    block.style.display = 'none'
  }
})



let slider = document.createElement('div');
slider.className = 'slider';
  slider.style = 'width: 700px;height: 500px;border: 2px solid black;margin: 50px auto;'
document.body.appendChild(slider);


  let sliderLine = document.createElement('div');
  sliderLine.className = 'sliderLine';
  slider.appendChild(sliderLine);

 let prev = document.createElement('button');
  prev.style = 'width: 120px; height: 40px; font-size: 14px;position:absolute;z-index:2;top:50%; '
  prev.style.className = 'Prev'
  prev.textContent = 'Prev'
  slider.appendChild(prev);
  let next = document.createElement('button');
  next.style = 'width: 120px; height: 40px; font-size: 14px;position:absolute;z-index:2;top:50%;right:0'
  next.textContent = 'Next'
  slider.appendChild(next);
  let images = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg','img/4.jpg'];

  function init () {
    for (const i of images) {
      let image = document.createElement('img');
      sliderLine.appendChild(image)
      image.src = i
      image.alt = 'image'
      image.style = 'width:700px;height:500px'
      console.log(image);
    };
    // sliderLine.style.width = '2800px'
    console.log(sliderLine);
  }
  init()
  
  
  count = 0
  

  next.addEventListener('click', function next1(){
    count += 700
    if (count >=2800) {
      count =  0
    }
    sliderLine.style.left = -count + 'px';
    
  })


  prev.addEventListener('click', () => {
    count -= 700
    if (count <0) {
      count = 2100
    }
    sliderLine.style.left = -count + 'px';
    
  });
  function next1() {
    count += 700
    if (count >= 2800) {
      count = 0
    }
    sliderLine.style.left = -count + 'px';

  }

  function auto() {
    setInterval(next1, 2000)
  }
  auto()
  





  let left = document.querySelector('.left');
  let box = document.querySelector('.box');
  let up = document.querySelector('.up');
  let down = document.querySelector('.down');
  let right = document.querySelector('.right')

  countX = 0;
  countY = 0;
  left.addEventListener('click', () => {
    countX -= 15
    box.style.left = countX + 'px';
  });

  up.addEventListener('click', () => {
    countY -= 15
    box.style.top = countY + 'px';
  });

  down.addEventListener('click', () => {
    countY += 15
    box.style.top = countY + 'px';
  });

  right.addEventListener('click', () => {
    countX += 15
    box.style.left = countX + 'px';
  });

}  




  
