import axios, {AxiosResponse} from 'axios';
import Post from "../../../backend/src/models/post";
import {baseUrl} from "./_api";

export const getPosts = async (): Promise<Post> => {
    return new Promise<Post>((resolve, reject) => {
        axios.get(`${baseUrl}/blog`).then((response: AxiosResponse) => {
            resolve(response.data);
        }).catch((error) => {
            reject(error)
        });
    });
};