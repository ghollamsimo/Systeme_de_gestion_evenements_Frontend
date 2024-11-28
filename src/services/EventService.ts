import Api from "../api/Api.ts";
import {EventFields} from "../constant.ts";

class EventService {
    private http: ReturnType<typeof Api>;

    constructor() {
        this.http = Api();
    }

    stats(){
        return this.http.get(`/event/stats`)
    }

    store(data: EventFields): Promise<EventFields>{
        return this.http.post('event/store', data)
    }
}

export default new EventService()