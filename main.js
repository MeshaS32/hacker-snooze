let img = document.querySelector("img")
let body = document.querySelector('body');
let title = document.querySelector("#title")
let score = document.querySelector("#score")

let parent = document.createElement('div');
parent.className = 'parent';

let child = document.createElement('div');
child.className = 'child';
let ul = document.querySelector("#ul")



parent.appendChild(child);
body.appendChild(parent);

//https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty


console.log(1)
let hackerStories = async () => {
let response = await fetch(encodeURI('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty'));

let data = await response.json();

for(let i = 0; i < 100; i++){
    // console.log(data[i])
    // let ul = document.querySelector("#ul")
    // let storyResponse = await fetch(`https://hacker-news.firebaseio.com/v0/item/${data[i]}.json?print=pretty`)
    // console.log(data[i])
    // let storyData = storyResponse.json()
    // console.log(storyData)
    fetch(`https://hacker-news.firebaseio.com/v0/item/${data[i]}.json?print=pretty`)
   
 
    .then(res => 
        { return res.json();
 })
.then(data => {
    
    // created div to hold title 
   let  newLi = document.createElement('div');
//   newLi.innerText = data.title;
  newLi.classList.add('title')
 ul.appendChild(newLi);
//  create link to make it linkabl
let link = document.createElement('a');
link.href = data.url;
link.innerText = data.title;
link.setAttribute('target','blank');
newLi.appendChild(link);

//  create div to hold author name, score and comments
let commentDiv = document.createElement('div');

commentDiv.innerText = `\nAuthor-${data.by}`;
commentDiv.innerText += `   \nScore${data.score}`
commentDiv.innerText += `   \nComments${data.descendants}`
ul.appendChild(commentDiv)



    console.log(data)
})


} 
}

hackerStories();



