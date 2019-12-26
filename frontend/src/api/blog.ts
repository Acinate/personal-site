import axios, {AxiosResponse} from 'axios';
import Post from "../../../backend/src/models/post";

export const getPosts = async (): Promise<Post> => {
    return new Promise<Post>((resolve, reject) => {
        axios.get('http://localhost:3000/blog').then((response: AxiosResponse) => {
            resolve(response.data);
        }).catch((error) => {
            reject(error)
        });
    });
};