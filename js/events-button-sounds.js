function ButtonSoundEvents({
    buttonSoundRain,
    buttonSoundForest,
    buttonSoundCafeteria,
    buttonSoundFireplace,
    svgSoundForest,
    svgSoundRain,
    svgSoundCafeteria,
    svgSoundFireplace,
    sounds
}) {
    function resetAudioButtons() {
        buttonSoundForest.classList.remove('buttonSoundSelected')
        buttonSoundRain.classList.remove('buttonSoundSelected')
        buttonSoundCafeteria.classList.remove('buttonSoundSelected')
        buttonSoundFireplace.classList.remove('buttonSoundSelected')
        svgSoundForest.firstElementChild.classList.remove('svgSelectedPath')
        svgSoundRain.firstElementChild.classList.remove('svgSelectedPath')
        svgSoundCafeteria.firstElementChild.classList.remove('svgSelectedPath')
        svgSoundFireplace.firstElementChild.classList.remove('svgSelectedPath')
    }

    buttonSoundForest.addEventListener('click', function() {
        if(buttonSoundForest.classList.contains('buttonSoundSelected')) {
            resetAudioButtons()
            sounds.pauseAllAudios()
        } else {
            resetAudioButtons()
            buttonSoundForest.classList.add('buttonSoundSelected')
            svgSoundForest.firstElementChild.classList.add('svgSelectedPath')
            sounds.pauseAllAudios()
            sounds.audioForest.play()
        }
    })

    buttonSoundRain.addEventListener('click', function() {
        if(buttonSoundRain.classList.contains('buttonSoundSelected')) {
            resetAudioButtons()
            sounds.pauseAllAudios()
        } else{
            resetAudioButtons()
            buttonSoundRain.classList.add('buttonSoundSelected')
            svgSoundRain.firstElementChild.classList.add('svgSelectedPath')
            sounds.pauseAllAudios()
            sounds.audioRain.play()
        }
    })

    buttonSoundCafeteria.addEventListener('click', function() {
        if(buttonSoundCafeteria.classList.contains('buttonSoundSelected')) {
            resetAudioButtons()
            sounds.pauseAllAudios()
        } else {
            resetAudioButtons()
            buttonSoundCafeteria.classList.add('buttonSoundSelected')
            svgSoundCafeteria.firstElementChild.classList.add('svgSelectedPath')
            sounds.pauseAllAudios()
            sounds.audioCafeteria.play()
        }
    })

    buttonSoundFireplace.addEventListener('click', function() {
        if(buttonSoundFireplace.classList.contains('buttonSoundSelected')) {
            resetAudioButtons()
            sounds.pauseAllAudios()
        } else {
            resetAudioButtons()
            buttonSoundFireplace.classList.add('buttonSoundSelected')
            svgSoundFireplace.firstElementChild.classList.add('svgSelectedPath')
            sounds.pauseAllAudios()
            sounds.audioFireplace.play()
        }
    })
}

export { ButtonSoundEvents }