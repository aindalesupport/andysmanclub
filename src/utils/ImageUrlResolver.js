const ImageUrlResolver = (src) => {

    function resize(image, option) {
        var imageService = 'https://img2.storyblok.com/'
        var path = image.replace('https://a.storyblok.com', '')
        return imageService + option + path
      }

    return (
        resize(src, 'filters:format(webp)')
    )
}

export default ImageUrlResolver
