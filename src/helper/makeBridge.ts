import BridgeWindow from '@/model/Bridge/ToJava/BridgeWindow'

export default function(window: BridgeWindow) {
    window.JavaBridge = {
        call(text: string) {
            const json = JSON.parse(text)
            console.log(json.data)
            json.data = ''
            json.status = 400
            json.message = 'Echo OK'
            window.bridge.call(json)
        },
    }
}
