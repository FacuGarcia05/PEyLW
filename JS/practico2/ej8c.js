
function detector() {
    const browser = document.getElementById('browserDetection')
    let msj

    window.addEventListener('load', () => {
        if (navigator.userAgent.indexOf('Chrome') != -1) {
            msj = 'Google Chrome'
        } else if (navigator.userAgent.indexOf('Edge') != -1) {
            msj = 'Microsoft Edge'
        } else if (navigator.userAgent.indexOf('Firefox') != -1) {
            msj = 'Mozilla Firefox'
        }

        if (browser) {
            browser.innerHTML = msj
        }

        /*if (msj == 'Google Chrome' || msj == 'Microsoft Edge') {
            window.open('https://www.facebook.com/')
        } else {
            window.location.href = 'https://x.com/'
        }*/
    })
    return msj
}

detector()