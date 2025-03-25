import { use } from "react"

export default function Posts({ posts }) {
    const postss = use(posts);
    console.log(postss);


    return (
        <div className="post">


            <h2>All Posts {postss.length}</h2>
            <div className="post">
                {
                    postss.map(post => {
                        return (
                            <div className="singlePost">
                                <h3>{post.title}</h3>
                                <p>{post.body}</p>
                            </div>
                        )
                    })
                }

            </div>



        </div>

    )
}