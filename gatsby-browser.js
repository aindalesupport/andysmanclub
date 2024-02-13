import "./src/css/index.css"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export function shouldUpdateScroll({
    routerProps: { location },
    getSavedScrollPosition,
  }) {
    const { pathname, search } = location
    // list of routes for the scroll-to-top-hook
    const scrollToTopRoutes = [`/news-and-views/`,`/find-your-nearest-group/`]
    // if the new route is part of the list above, scroll to top (0, 0)
    if (scrollToTopRoutes.indexOf(pathname) !== -1 && search.indexOf('?') !== -1) {
      return false
    }
  }
