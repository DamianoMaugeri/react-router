import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { BASE_URI } from "../../config"




export default function Show() {

    const { id } = useParams()
    const navigate = useNavigate()

    const [post, setPost] = useState(null)

    useEffect(() => {
        axios.get(`${BASE_URI}/posts/${id}`)
            .then(res => setPost(res.data))
    }, [id]);











    return (
        <main>
            {post ?
                <>
                    <div className="container">
                        <button onClick={() => navigate('/posts')}>Indietro</button>
                        {post.prevId !== null && <button onClick={() => navigate('/posts/' + post.prevId)}>post Precedente</button>}
                        {post.nextId !== null && <button onClick={() => navigate('/posts/' + post.nextId)}>Post Successivo </button>}
                        {/* {post && <Delete id={post.id} onDelete={() => { navigate('/posts') }}/>} */}
                    </div>

                    <section>
                        <div className="container">

                            <figure>
                                <img src={`${BASE_URI}/${post.image}`} alt="" />
                            </figure>
                            <div className="title">
                                <h1>{post.title}</h1>
                            </div>
                            <div className="tags">
                                <ul>
                                    {post.tags.map((tag, i) => <li key={i}>{tag}</li>)}
                                </ul>
                            </div>
                            <div className="description">
                                {post.content}
                            </div>
                            <div className="author">
                                {post.author}
                            </div>
                            {post.isAvaible ? <div>publicato</div> : <div>Draft</div>}



                        </div>
                    </section>

                </>

                : <div>loading</div>


            }

        </main>
    )
}