import { Post } from '../models';

const Posts = {
    list: (req, res) => {
        Post.all()
            .then(posts => res.status(200).send(posts))
            .catch(error => res.status(400).send(error));
    },

    create: (req, res) => {
        Post.create({
            content: req.body.content
        })
            .then(post => res.status(200).send(post))
            .catch(error => res.status(400).send(error));
    }
};

export default Posts;
