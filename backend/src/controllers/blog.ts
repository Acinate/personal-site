import showdown from 'showdown';
import * as fs from 'fs';
import {Request, Response} from "express";

const converter = new showdown.Converter();

export const posts = (req: Request, res: Response) => {
    fs.readFile('src/posts/ubuntu_java.md', 'utf8', async (error, data: Buffer) => {
        if (error) {
            res.status(400).json(error);
        } else {
            const contents: string = data.toString();
            const html = converter.makeHtml(contents);
            await fs.writeFile('src/posts/ubuntu_java.html', html, (error) => {
            });
            res.send({html});
        }
    });
};