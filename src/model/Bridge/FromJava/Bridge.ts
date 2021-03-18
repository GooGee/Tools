import toast from '@/helper/toast'
import HandlerManager from './HandlerManager'
import Response from './Response'

export default class Bridge {
    readonly manager: HandlerManager

    constructor(manager: HandlerManager) {
        this.manager = manager
    }

    call(response: Response) {
        if ('string' === typeof response) {
            response = JSON.parse(response)
        }
        console.log(`${response.status} ${response.action} ${response.key} ${response.message}`)
        const handler = this.manager.find(response.action, response.key)
        if (handler) {
            try {
                if (response.data.length > 0) {
                    const data = JSON.parse(response.data)
                    return handler(data)
                }
                handler(response)
            } catch (error) {
                toast.error(error)
            }
        } else {
            const message = 'No handler'
            toast.error(message)
        }
    }

    error(code: number, message: string) {
        console.log(`${code} ${message}`)
        toast.error(message)
    }
}
