import { ControlList,Button } from "./FeedBackField.styled";

export const FeedBackField = ({onLeaveFeedback, options}) => {
    const btnType = Object.keys(options);
   
    return (
        
        <ControlList>
             <li><Button onClick={()=>{onLeaveFeedback(btnType[0])}}>Good</Button></li>
             <li><Button onClick={()=>{onLeaveFeedback(btnType[1])}}>Neutral</Button></li>
             <li><Button onClick={()=>{onLeaveFeedback(btnType[2])}}>Bad</Button></li>
        </ControlList>
    
    );
 };