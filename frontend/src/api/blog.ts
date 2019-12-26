import axios, {AxiosResponse} from 'axios';

export const getPosts = async (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        axios.get('http://localhost:3000/blog').then((response: AxiosResponse) => {
            resolve(response.data.html);
        }).catch((error) => {
            reject(error)
        });
    });
};