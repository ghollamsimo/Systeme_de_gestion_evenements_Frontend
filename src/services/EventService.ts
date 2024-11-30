import Api from "../api/Api.ts";
import {EventFields} from "../constant.ts";

class EventService {
    private http: ReturnType<typeof Api>;

    constructor() {
        this.http = Api();
    }

    delete(id: string){
        return this.http.delete(`/event/delete/${id}`)
    }

    store(data: FormData): Promise<any> {
        return this.http.post('event/store', data, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
    }

    update(id: string, data: FormData){
        return this.http.patch(`event/update/${id}`, data , {
            headers: { 'Content-Type': 'multipart/form-data' },
        })
    }

    stats(){
        return this.http.get(`/event/stats`)
    }

    index(){
        return this.http.get('/event/index')
    }
}

export default new EventService()