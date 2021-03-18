import Noty from 'noty'

export function error(message: string) {
    new Noty({
        text: message,
        theme: 'bootstrap-v4',
        type: 'error',
    }).show()
}

export function toast(message: string) {
    new Noty({
        text: message,
        theme: 'bootstrap-v4',
        timeout: 2333,
        type: 'info',
    }).show()
}

export function show(message: string, status: number) {
    if (status === 200) {
        toast(message)
        return
    }

    error(message)
}

export function warn(message: string) {
    new Noty({
        text: message,
        theme: 'bootstrap-v4',
        type: 'warning',
    }).show()
}

export default {
    error,
    toast,
    warn,
}
