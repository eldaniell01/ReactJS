export const Button = ({handlClick, text})=>{
    return(
        <>
            <button onClick={handlClick}>{text}</button>
        </>
    )
}