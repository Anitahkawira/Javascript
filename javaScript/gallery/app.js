// let heading = document.getElementsByTagName('h1');

// console.log(heading);

// heading.style.backgroundColor = 'magenta';
// heading.title ='This is the site heading';

// 

let images = document.querySelectorAll('.thumbnails img');

let largeImage = document.createElement('img');

let viewer = document.querySelector('.viewer');
viewer.appendChild(largeImage);

let caption = document.createElement('p');
viewer.appendChild(caption);

images.forEach(function(image){
	image.onclick = function click(event){
		let img = event.target;
		largeImage.src = img.src;

		let captionText = img.getAttribute('data-caption');
		caption.innerHTML = captionText;
		
	}
})

