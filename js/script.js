import blogPosts from "./blog-posts.js"

const topPostContainer = document.getElementById('top-post-container')

console.log(blogPosts)

topPostContainer.innerHTML = `
<div class="top-post-text-container">
  <div class="top-post-date">${blogPosts[0].date}</div>
  <div class="top-post-title">${blogPosts[0].title}</div>
  <div class="top-post-subtitle">${blogPosts[0].subtitle}</div>
</div>
`