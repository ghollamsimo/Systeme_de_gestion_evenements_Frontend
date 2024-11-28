export interface ConfigOptions {
    baseURL: string;
    headers: {
        'Content-Type': string;
        'Authorization': string;
    };
}

export interface RegisterField{
    name: string;
    email: string;
    password: string;
    role: string;
}

export interface LoginField{
    email: string;
    password: string;
}

export interface EventFields{
    title: string
    image: string
    description: string
    organiser: string
}