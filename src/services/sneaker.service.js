import createApiClient from './api.service'

//lay du lieu tu server
class SneakerService {
    constructor(baseUrl = "/sneakershop/auth") {
        this.api = createApiClient(baseUrl);
    }

    async register(data) {
        return (await this.api.post("/register")).data;
    }

    async login() {
        return (await this.api.post("/login")).data;
    }

    async logout() {
        return (await this.api.post("/logout")).data
    }
}

export default new SneakerService();