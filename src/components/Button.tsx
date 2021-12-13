interface ButtonProps {
    text: string, 
    onClick: () => void, 
    className?: string
}

export const Button = ({text, onClick, className = ""}: ButtonProps) => {


    return(
        <button className={"myButton " + className} onClick={onClick}>{text}</button>
    )
}