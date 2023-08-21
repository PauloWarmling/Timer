import { controls } from "./elements.js"
import * as actions from "./action.js"
import * as el from "./elements.js"
import state from "./state.js"
import { uptadeDisplay } from "./timer.js"

export function registerControls() {
    controls.addEventListener('click', getTarget)
}

function getTarget() {
    const action = event.target.dataset.action
    if (typeof actions[action] != "function") {
        return
    }
    actions[action]()
}

export function setMinutes() {
    el.minutes.addEventListener('focus', resetMinutes)
    el.minutes.addEventListener('blur', verifyMinutes)
    el.minutes.onkeypress = (event) => /\d/.test(event.key)
}

function verifyMinutes() {
    let minutes = event.currentTarget.textContent
    if (minutes > 60 || minutes === null || minutes === "") {
        state.minutes = 60
        state.seconds = 0
        uptadeDisplay()
        el.minutes.setAttribute("contenteditable", false)
    } else {
        state.minutes = minutes
        uptadeDisplay()
        el.minutes.setAttribute("contenteditable", false)
    }
}

function resetMinutes() {
    el.minutes.textContent = ""
}