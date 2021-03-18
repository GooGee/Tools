import { ActionEnum } from './Action'

export default class Response {
    constructor(
        public action: ActionEnum,
        public key: string,
        public data: string,
        public message: string,
        public status: number,
    ) {}
}
