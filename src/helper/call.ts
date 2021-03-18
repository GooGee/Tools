import Route from '@/model/Bridge/ToJava/Route'
import * as Toast from './toast'
import VendorStore from '../store/VendorStore'
import wait from './wait'

interface CallBack {
    (route: Route, toast: typeof Toast): void
}

export default function(callback: CallBack) {
    const data = wait(() => {
        callback(VendorStore.route, Toast)
        data.stopWaiting()
    })
    return data
}
