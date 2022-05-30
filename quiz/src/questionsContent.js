export default function QuestionsContent(props) {
  const questionsContent = props.questions.map((questionInfo, index) => {
    let listItems = [];
    for (let i = 0; i < 4; i++) {
      let background_color = "white";
      if (questionInfo[i].isSelected) {
        if (!props.submitted.bool) {
          background_color = "#ff99e6";
        } else {
          if (questionInfo[i].correct) {
            background_color = "lightgreen";
          }
          else if (!questionInfo[i].correct) {
            background_color = "#ff3333";
          }
        }
      }

      const styles = {
        backgroundColor: background_color,
      };
      listItems.push(
        <li style={styles} onClick={() => props.handleClick(i, index)}>
          {questionInfo[i].choice}
        </li>
      );
    }

    return (
      <div className="question">
        <h1>{`${questionInfo[0].question}`}</h1>
        <ul>{listItems}</ul>
        <hr></hr>
      </div>
    );
  });
  return questionsContent;
}
