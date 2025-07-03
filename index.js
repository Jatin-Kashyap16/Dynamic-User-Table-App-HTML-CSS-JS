// DARK & LIGHT MODE

const box = document.querySelector('.box');
const button = document.querySelector('button');

let isBlack = false;

button.addEventListener("click", function (){
   if(isBlack){
    box.style.background = "white";
   } else{
    box.style.background = "black";
   }
    isBlack = !isBlack;
});

// COUNTER
const counter = document.getElementById('counter')
const decrease = document.querySelector('.decrease');
const reset = document.querySelector('.reset');
const increase = document.querySelector('.increase');

let count = 0;
decrease.addEventListener("click", function() {
  if (count > 0) {
    count--;
    counter.textContent = count;
  }
});

increase.addEventListener("click", function(){
        count++;
      counter.textContent = count;
})

reset.addEventListener("click", function(){
      count = 0;
      counter.textContent = count;
})


//TODO-LIST
const input = document.getElementsByTagName('input');
const Addbutton = document.querySelector('.Addbtn');
const taskList = document.querySelector('.tasklist');

Addbutton.addEventListener("click", function(){
    const task = input[0].value.trim();
    
    if(!task){
      alert("please write the task");
      return;
    }

    const li = document.createElement('li');
    li.innerHTML = `
       <span>${task}</span>
       <button class='deleteBtn'>Delete</button>
    `;

    taskList.appendChild(li);
    input[0].value = '';

    const deleteBtn = li.querySelector('.deleteBtn');
    deleteBtn.addEventListener("click", function(){
      taskList.removeChild(li);
    })
});

// LIVE CHARACTER COUNT
const liveCount = document.querySelector('.livecount');
const textarea = document.querySelector('textarea');

textarea.addEventListener('input', function(){
  const charCount = textarea.value.length;
  liveCount.textContent = charCount;

  if(charCount > 200){
    alert("Character limit of 200 exceeded!");
    textarea.value = textarea.value.slice(0, 200);
    liveCount.textContent = 200;
  }
});

// IMAGE SLIDER
const previous = document.querySelector('.pre');
const next = document.querySelector('.next');
const slider = document.querySelector('.slider');

  let img1 = `https://images.pexels.com/photos/32207802/pexels-photo-32207802.jpeg`;
  let img2 = `https://images.pexels.com/photos/32785053/pexels-photo-32785053.jpeg`;
  let img3 = `https://images.pexels.com/photos/32117661/pexels-photo-32117661.jpeg`;
  let imgs =[img1, img2, img3];

  let currentIndex = 0;

next.addEventListener("click", function(){
      currentIndex++;
      if(currentIndex >= imgs.length){
        currentIndex = 0;
      }
      slider.src = imgs[currentIndex];
});

previous.addEventListener("click", function(){
      currentIndex--;
      if(currentIndex < 0){
        currentIndex = imgs.length-1;
      }
      slider.src = imgs[currentIndex];
});
