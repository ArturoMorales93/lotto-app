/*
    Se podría mejorar para aceptar un valor de media query por parámetro.
    Pero se ha optado por usar la unica media query que bootstrap que se ha utilizado,
    basandose en lo requerido para el caso.
*/

const useMediaQuery = (direction, component) => {
    var media
    
    switch (direction) {
        case "up":
            media = "(min-width: 768px)"
            break
        case "down":
            media = "(max-width: 768px)"
            break
        default:
            media = "(min-width: 768px)"
            break
    } 

    if (window.matchMedia(media).matches) {
        return component
    } else {
        return null
    }
}

export default useMediaQuery