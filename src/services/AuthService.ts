import Api from "../api/Api.ts";
import {LoginField, RegisterField} from "../constant.ts";

class AuthService {
    private http: ReturnType<typeof Api>;

    constructor() {
        this.http = Api();
    }

    register(data: RegisterField): Promise<RegisterField>{
        return this.http.post('/auth/register', data)
    }

    login(data: LoginField): Promise<{token: string}>{
        return this.http.post('/auth/login', data)
    }

    show(id: string){
        return this.http.get(`/auth/show/${id}`)
    }

    index(){
        return this.http.get('/organiser/index')
    }
}

export default new AuthService()