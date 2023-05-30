import {buttonPause, 
        buttonPlay,
        buttonSet, 
        buttonSoundOff, 
        buttonSoundOn, 
        buttonStop
    } from "./elements.js"

export default function Events({controls, timer, sounds}) {
    buttonPlay.addEventListener('click', function() {
        controls.play()
        timer.countdown()
        sounds.pressButton()
    })
    
    buttonPause.addEventListener('click', function() {
        controls.pause()
        timer.hold()
        sounds.pressButton()
    })
    
    buttonStop.addEventListener('click', function () {
        controls.reset()
        timer.reset()
        sounds.pressButton()
    })
    
    buttonSoundOff.addEventListener('click', function() {
        buttonSoundOn.classList.remove('hide')
        buttonSoundOff.classList.add('hide')
        sounds.bgAudio.play()
    })
    
    buttonSoundOn.addEventListener('click', function() {
        buttonSoundOn.classList.add('hide')
        buttonSoundOff.classList.remove('hide')
        sounds.bgAudio.pause()
    })
    
    buttonSet.addEventListener('click', function () {
        let newMinutes = controls.getMinutes()
    
        if(!newMinutes) {
            timer.reset()
            return
        }
    
        timer.updateDisplay(newMinutes, 0)
        timer.updateMinutes(newMinutes)
    })
}