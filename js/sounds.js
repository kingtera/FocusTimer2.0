function Sounds() {
    const audioForest = new Audio('assets/Forest.wav')
    const audioRain = new Audio('assets/Rain.wav')
    const audioCafeteria = new Audio('assets/Cafeteria.wav')
    const audioFireplace = new Audio('assets/Fireplace.wav')
    const audioEndTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
    const audioButtonPress = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")

    function pauseAllAudios() {
        audioForest.pause()
        audioRain.pause()
        audioCafeteria.pause()
        audioFireplace.pause()
    }

    return {
        audioForest,
        audioRain,
        audioCafeteria,
        audioFireplace,
        audioEndTimer,
        audioButtonPress,
        pauseAllAudios
    }
}

export { Sounds }