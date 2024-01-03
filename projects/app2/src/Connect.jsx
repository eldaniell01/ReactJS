import { useState } from "react"

export function Users({name}){

    const [state, setState] = useState(true)

    const text = state? 'Activo':'Inactivo'
    const classButton = state? 'chat-state-active': 'chat-state'
    const textButton = state? 'Desconectar': 'Activar'

    const handClick = () =>{
        setState(!state)
    }

    return(
        <article className="chat">
            <header className="chat-body">
                <div>
                    <img className="chat-img" src="https://scontent.fgua3-5.fna.fbcdn.net/v/t1.18169-9/17796083_1230430200387683_7453936123348465579_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=be3454&_nc_ohc=mlk7qpAUuYwAX-E4fZL&_nc_ht=scontent.fgua3-5.fna&oh=00_AfBJ6KwMIawjOtnTm6MKnPE2kGuABvC99a7py3isI2d8fw&oe=65BD20F4" alt="" />
                    <div className={classButton}></div>
                </div>
                <div>
                    <strong>{name}</strong>
                    <span>{text}</span>
                </div>
            </header>
            <aside>
                <button className="chat-button" onClick={handClick}>{textButton}</button>
            </aside>
        </article>
    )
}