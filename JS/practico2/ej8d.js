function ultimaV() {
    const browser = document.getElementById('browserUltV')
    let msj
    window.addEventListener('load', () => {
        const { userAgent } = navigator
        console.log(userAgent)

        if (userAgent === 126) {
            msj = "No tenes la ultima version"
        } else {
            msj = "Si tenes la ultima version de Edge"
        }

        if (browser) {
            browser.innerHTML = msj
        }
    })
    return msj
}

ultimaV()

// 126.0.2592.87