import { useState } from "react"

export function Card({userName, name}){
    const [isFollowing, setIsFollowing] = useState(false)
    const text = isFollowing?'Siguiendo':'Seguir'
    const buttonClass = isFollowing? 'card-button card-button-following':'card-button'

    const handClick = ()=>{
        setIsFollowing(!isFollowing)
    }
    
    return(
        <article className='card'>
            <header className='card-body'>
                <img className='card-img' src="https://scontent.fgua13-1.fna.fbcdn.net/v/t1.18169-9/17796083_1230430200387683_7453936123348465579_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=be3454&_nc_ohc=mlk7qpAUuYwAX-E4fZL&_nc_ht=scontent.fgua13-1.fna&oh=00_AfBWPzNoLYZZ1mP4rU7hX3PshOBmQ9p_NCuS5CkaYb79OA&oe=65BBCF74" alt=""/>
                <div>
                    <strong>{name}</strong>
                    <span>{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClass} onClick={handClick}>{text}</button>
            </aside>
        </article>
    )
}