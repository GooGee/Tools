import Bridge from '@/model/Bridge/FromJava/Bridge'
import HandlerManager from '@/model/Bridge/FromJava/HandlerManager'
import Route from '@/model/Bridge/ToJava/Route'
import Vendor from '@/model/Vendor'

export default function() {
    const hm = new HandlerManager()
    const route = new Route(window as any, hm)
    route.window.bridge = new Bridge(hm)
    const vendor = new Vendor(route)
    return vendor
}
