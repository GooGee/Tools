import { ActionEnum } from '../FromJava/Action'
import Handler from '../FromJava/Handler'
import HandlerManager from '../FromJava/HandlerManager'
import Payload from './Payload'
import BridgeWindow from './BridgeWindow'

export default class Route {
    readonly manager: HandlerManager
    readonly window: BridgeWindow

    constructor(window: BridgeWindow, manager: HandlerManager) {
        this.window = window
        this.manager = manager
    }

    call(action: ActionEnum, key: string, data: string, handler?: Handler) {
        console.log(`${action} ${key}`)
        this.manager.add(action, key, handler)
        const payload = Payload.make(action, key, data)
        const text = JSON.stringify(payload)
        this.window.JavaBridge.call(text)
    }

    open(file: string, handler?: Handler) {
        this.call(ActionEnum.open, file, '', handler)
    }

    view(file: string, handler?: Handler) {
        this.call(ActionEnum.view, file, '', handler)
    }
}
