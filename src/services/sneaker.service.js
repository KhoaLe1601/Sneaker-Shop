import createApiClient from "./api.service"

//lay du lieu tu server
class ShopService {
    constructor(baseUrl = "/api/sneakershop") {
        this.api = createApiClient(baseUrl);
    }
}