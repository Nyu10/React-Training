export default function AnswerChoice(props){
    const [selected, setSelected] = React.useState(false);

    
    return (
        <div className="answer-choice">
        <button onClick={props.handleClick}>{props.answer}</button>
        </div>
    )
}