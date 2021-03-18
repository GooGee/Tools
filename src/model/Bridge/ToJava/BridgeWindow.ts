import Bridge from '../FromJava/Bridge'
import JavaBridge from './JavaBridge'

export default interface BridgeWindow extends Window {
    bridge: Bridge
    JavaBridge: JavaBridge
}
