export const HangmanDrawing = (props: {errors: number}) => {

    return (
        <div className="container large">
            <div className="test1"></div>
            <div className="test2"></div>
            <div className="test3"></div>
            <div className="test4"></div>
            <div className={"test5 " + (props.errors < 1 ? 'visibility-hidden' : "")}>
                <div className="eye left-eye"></div>
                <div className="eye right-eye"></div>
                <div className="mouth"></div>
            </div>
            <div className={"test6 " + (props.errors < 2 ? 'visibility-hidden' : "")}></div>
            <div className={"test7 " + (props.errors < 3 ? 'visibility-hidden' : "")}></div>
            <div className={"test8 " + (props.errors < 4 ? 'visibility-hidden' : "")}></div>
            <div className={"test9 " + (props.errors < 5 ? 'visibility-hidden' : "")}></div>
            <div className={"test10 " + (props.errors < 6 ? 'visibility-hidden' : "")}></div>
        </div>
    )
}