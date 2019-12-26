import showdown from 'showdown';
import {Request, Response} from "express";
import * as fs from 'fs';
import Post from 'models/post';

const converter = new showdown.Converter();

export const posts = (req: Request, res: Response) => {
    fs.readFile('src/posts/ubuntu_java.md', 'utf8', async (error, data: Buffer) => {
        if (error) {
            res.status(400).json(error);
        } else {
            const contents: string = data.toString();
            const html = converter.makeHtml(contents);
            const post: Post = {
                title: "How to install Java on Ubuntu Linux 18.04",
                author: "Jason Efthimiou",
                description: "Oracle now makes you register for an account to download some versions of JDK. " +
                    "This means you cannot use a PPA Repository or apt install command to download and install some versions of Java. " +
                    "This tutorial will walk you through how to manually install JDK on your computer. You will be able to " +
                    "setup multiple Java versions and switch between them with a single command.",
                html: html,
                date: new Date('2019-12-26').toDateString()
            }
            await fs.writeFile('src/posts/ubuntu_java.html', html, (error) => {
            });
            res.status(200).json(post);
        }
    });
};