import Api from "../api/Api.ts";

class EventService {
    private http: ReturnType<typeof Api>;

    constructor() {
        this.http = Api();
    }

    stats(){
        return this.http.get(`/event/stats`)
    }
}

export default new EventService()