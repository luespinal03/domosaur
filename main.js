let span1 = document.querySelector(".mess-with-me");

span1.style.fontSize = "40px";

// to get a tag with a specific class do 'tagName.className' 
let paraMessWithMe = document.querySelector('p.mess-with-me');

paraMessWithMe.style.backgroundColor = 'green';

let hideMe = document.querySelector('#hide-me-area');

// this moves the row up becasue it doesnt display anything
hideMe.style.display = "none";

// hides it, yet still there, doesnt move up the row
// hideMe.style.visibility = "hidden";

let row = document.querySelector('#row');

let tri = document.querySelector('#triceratops');

tri.style.width = "324px"

// ================= EVENT LISTENING CHALLENGES=======================

span1.addEventListener('click', function () {
    // span1.style.color = "orange";
    if (span1.style.color === '') {
        span1.style.color = 'orange';
    } else {
        span1.style.color = '';
    }

})

// border requires the whole shabbang
tri.addEventListener('click', function () {
    // tri.style.border = "3px dotted red"
    if (tri.style.border === '') {
        tri.style.border = '3px dotted red';
    } else {
        tri.style.border = '';
    }
})

let feathers = document.querySelector('#feathers');

feathers.addEventListener('click', function () {
    // feathers.style.opacity = "0.5";

    if (feathers.style.opacity === '') {
        feathers.style.opacity = '0.5';
    } else {
        feathers.style.opacity = '';
    }
})

let toggle = document.querySelector('#toggle');


toggle.addEventListener('click', function () {
    if (row.style.backgroundColor === '') {
        row.style.backgroundColor = 'purple';
    } else {
        row.style.backgroundColor = '';
    }

})


let biggify = document.querySelector('#biggify');

biggify.addEventListener('mouseover', function () {
    biggify.style.width = "200px";
})

biggify.addEventListener('mouseout', function () {
    biggify.style.width = "162px";
})