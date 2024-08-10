var images;

images = [
    'photo/Screenshot 2024-08-10 at 2.39.01 in the afternoon.png',
    'photo/Screenshot 2024-08-10 at 2.39.31 in the afternoon.png',
    'photo/Screenshot 2024-08-10 at 2.40.15 in the afternoon.png'
];

let element_img = document.getElementById('img');
element_img.setAttribute("src", images[0]);

document.getElementById('next_btn').addEventListener('click', (event) => {
  let element_img2 = document.getElementById('img');
  images.push(images.shift());
  element_img2.setAttribute("src", images[0]);

});

document.getElementById('previous_btn').addEventListener('click', (event) => {
  let element_img3 = document.getElementById('img');
  images.unshift(images.pop());
  element_img3.setAttribute("src", images[0]);

});