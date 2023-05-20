const url ="https://jsonplaceholder.typicode.com/posts"
let Posts=[]
let nextId=11
console.log("first")
document.addEventListener("DOMContentLoaded", div);
let blogContainer
function div(){
blogContainer =document.getElementById("blog-container")
}

(function fetchPosts(){
    fetch(url).then((res)=>{
       return res.json()
    }
    ).then(posts=>{
        Posts = posts.slice(0,3)  
        Posts.forEach((post)=>{
            renderPosts(post)
        })
    })
})()

function renderPosts(post){
    console.log("render")
    const blogDiv = document.createElement("div")
    const title = document.createElement("h2");
    const body = document.createElement("p")
    const deleteEle = document.createElement("button")
    deleteEle.innerText ="Delete"
    deleteEle.addEventListener("click",()=>{
        handleDelete(post.id)
    })
    title.innerText=post.title;
    body.innerText = post.body;
    blogDiv.id=post.id;
    console.log(blogDiv)
    blogDiv.appendChild(title)
    blogDiv.appendChild(body)
    blogDiv.appendChild(deleteEle)
    blogDiv.className="blog-card"
    blogContainer.appendChild(blogDiv)
}
function generateId() {
    return Date.now(); 
}
function handleSubmit(event){
    event.preventDefault()
   let newpost = {title:event.target[0].value,body:event.target[1].value,id:generateId()}
  
   Posts.push(newpost);
   renderPosts(newpost); 
   event.target.reset()
}

function handleDelete(id){
    blogContainer.innerHTML = "";
   Posts = Posts.filter(post=>post.id!=id)
   Posts.forEach(post=>{
    renderPosts(post)
   })
}
