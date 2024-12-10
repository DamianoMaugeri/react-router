
import { Link } from 'react-router-dom';
import { BASE_URI } from '../../config';
import Button from '../Button/Button';
import style from './Card.module.css';
import { useState } from 'react';








export function Card({ post = {}, deleteFunction = () => { }, onUpdateTitle = () => { } }) {
    // console.log(tags)

    console.log('Rendering Card');
    console.log(post)


    const { id, title = '', image = '', content = '', tags = [], author = '', isPublished = true } = post
    console.log(id)


    const [cardtitle, setCardTitle] = useState(title)

    const [isActive, setIsActive] = useState(false)



    function updateCardTitle(e) {
        e.preventDefault();
        if (cardtitle.trim()) {
            //onUpdateTitle(cardtitle, id);
            onUpdateTitle(cardtitle);
            setCardTitle(cardtitle);
            toggleActive()
        }
    };


    function toggleActive() {
        setIsActive(!isActive)
    };


    return (
        <div className={style.card}>
            <div className={style.card_header}>
                <div className="figure">
                    <img src={image ? `${BASE_URI}/${image}` : placeHolderSrc} alt="" />
                </div>
            </div>
            <div className={style.card_body}>
                <div className={style.title}>
                    {!isActive ?
                        <h3 className={''} onClick={toggleActive}>{cardtitle}</h3> :
                        <form action="" onSubmit={updateCardTitle} className={''}>
                            <input type="text" name="title" value={cardtitle} onChange={(e) => setCardTitle(e.target.value)} />
                            <input type="submit" value="Aggiorna" />
                        </form>
                    }

                </div>
                {tags.length ? <div className={style.tags_list}>{tags.map((tag, i) => <div key={i} className={`${style.tags} setClass(tag_css, tag)`}>{tag}</div>)}</div> : <div>Nessun tag </div>}
                <p className={style.description}>
                    {content}
                </p>
                <div className={style.author}>Autore: <h4 className={style.author_title}>{author}</h4></div>
                <div className={style.ends_buttons}>
                    <Link to={`/posts/${id}`}>
                        <Button />

                    </Link>
                    <button className={style.delete_button} onClick={deleteFunction}>elimina</button>
                </div>

                {isPublished ?
                    <div className={style.published}>Pubblicato</div> :
                    <div className={style.draft}>Draft</div>
                }


            </div>
        </div>

    )

}
