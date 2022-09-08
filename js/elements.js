function Elements(){
    const minutesDefault = 5
    const secondsDefault = 0
    const minutesDisplay = document.querySelector('.minutes')
    const secondsDisplay = document.querySelector('.seconds')
    const buttonPlay = document.querySelector('.buttonPlay')
    const buttonPause = document.querySelector('.buttonPause')
    const buttonStop = document.querySelector('.buttonStop')
    const buttonIncreaseMinutes = document.querySelector('.buttonIncreaseMinutes')
    const buttonDecreaseMinutes = document.querySelector('.buttonDecreaseMinutes')
    const buttonSoundRain = document.querySelector('.soundRain')
    const buttonSoundForest = document.querySelector('.soundForest')
    const buttonSoundCafeteria = document.querySelector('.soundCafeteria')
    const buttonSoundFireplace = document.querySelector('.soundFireplace')
    const svgSoundForest = buttonSoundForest.querySelector('svg')
    const svgSoundRain = buttonSoundRain.querySelector('svg')
    const svgSoundCafeteria = buttonSoundCafeteria.querySelector('svg')
    const svgSoundFireplace = buttonSoundFireplace.querySelector('svg')

    return {
        minutesDefault,
        secondsDefault,
        minutesDisplay,
        secondsDisplay,
        buttonPlay,
        buttonPause,
        buttonStop,
        buttonIncreaseMinutes,
        buttonDecreaseMinutes,
        buttonSoundRain,
        buttonSoundForest,
        buttonSoundCafeteria,
        buttonSoundFireplace,
        svgSoundForest,
        svgSoundRain,
        svgSoundCafeteria,
        svgSoundFireplace
    }
}

export { Elements }