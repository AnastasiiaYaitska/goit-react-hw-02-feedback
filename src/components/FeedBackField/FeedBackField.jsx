import { ControlList,Button } from "./FeedBackField.styled";

export const FeedBackField = ({onLeaveFeedback, options}) => {
    const btnTypes = Object.keys(options);
    return ( 
           
        <ControlList>
            {btnTypes.map(btnType => {
                return (
                    <li>
                        <Button onClick={() => { onLeaveFeedback(btnType) }}>{btnType.charAt(0).toUpperCase() + btnType.slice(1)}</Button>
                    </li>)
            })}
            
        </ControlList>

       )    
    
 };