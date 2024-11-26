import {ConfigOptions} from '../constant.ts'
export const Config = (token: string | null = null) : ConfigOptions => {
    return <ConfigOptions>{
        baseURL: 'http://localhost:8080/',
        headers: {
            'Content-Type': 'application/json',
            ...(token ? {'Authorization': `Bearer ${token}`} : {}),
        },
    };
};