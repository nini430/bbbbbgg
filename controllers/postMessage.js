import Post from "../models/postMessage.js"

export const getPosts=async(req,res)=>{
    try {
        const posts=await Post.find({});
        res.status(200).json(posts)
    }catch(error) {
        res.status(404).json({msg:error.message})
    }

}

export const createPost=async(req,res)=>{
    const post=new Post(req.body);
    try{
        await post.save();
        res.status(201).json(post);


    }catch(err) {
        res.status(409).json({msg:err.message})
    }
    
}



