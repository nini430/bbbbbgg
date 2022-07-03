import express from "express";
const postRouter=express.Router();
import {getPosts,createPost} from "../controllers/postMessage.js"

postRouter.get("/",getPosts);
postRouter.post("/",createPost);


export default postRouter;

