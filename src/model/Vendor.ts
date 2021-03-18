import Route from './Bridge/ToJava/Route'

export default class Vendor {
    readonly route: Route

    constructor(route: Route) {
        this.route = route
    }
}
