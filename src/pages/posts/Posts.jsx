import { useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { BASE_URI } from '../../config';
import { Card } from '../../components/Card/Card';





export default function Posts() {

    const [posts, setPosts] = useState([])


    useEffect(() => fetchPosts(), []);

    function fetchPosts() {
        axios.get(`${BASE_URI}/posts`)
            .then(res => setPosts(res.data))
            .catch(err => console.log(err))
    }



    return (
        <main>
            <section>
                <div className="container">
                    <h1> I MIEI POST</h1>
                </div>
            </section>
            <div className="container">
                <div className="row">
                    {posts.map((post) => (
                        <div key={post.id} className="col_4">
                            <Card post={post} deleteFunction={() => deletePost(post)} onUpdateTitle={(title) => updateTitle(title, post.id)} />
                        </div>
                    ))}
                </div>
            </div>
        </main>

    )
}