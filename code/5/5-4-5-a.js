/* utils.js */
export const enableImgLazyLoad = () => {
  const lazyImages = [].slice.call(document.querySelectorAll('img.lazy'))
  const lazyImageObserver = new IntersectionObserver((entries) => {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        let lazyImage = entry.target
        lazyImage.src = lazyImage['data-src']
        lazyImage.classList.remove('lazy')
        lazyImageObserver.unobserve(lazyImage)
      }
    })
  })

  lazyImages.forEach((lazyImage) => {
    lazyImageObserver.observe(lazyImage)
  })
}
