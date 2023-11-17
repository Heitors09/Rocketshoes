const thumbnails = document.querySelectorAll(".thumb")
const featured = document.querySelector('.featured-image')

thumbnails.forEach((thumbnail)=>{
      thumbnail.addEventListener('click', ()=>{
           const imgSrc = thumbnail.src
           featured.src = imgSrc
      })
})