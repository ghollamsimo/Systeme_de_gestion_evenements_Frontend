import Api from "../api/Api.ts";

class ParticipantService {
    private http: ReturnType<typeof Api>;

    constructor() {
        this.http = Api();
    }

    store(data: FormData){
        return this.http.post('/organiser/store', data)
    }

    update(id: string, data: FormData){
        return this.http.patch(`/organiser/update/${id}`, data)
    }

    delete(id: string){
        return this.http.delete(`/organiser/delete/${id}`)
    }
}

export default new ParticipantService()