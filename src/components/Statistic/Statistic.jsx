import { Notification } from "components/Notification/Notification";

export const Statistic = ({ good, neutral, bad, total, positivePercentage }) => {
   
    return (
        <>
            {total ? (<ul>
                <li>Good: {good}</li>
                <li>Neutral: {neutral}</li>
                <li>Bad: {bad}</li>
                <li>Total: {total}</li>
                <li>Positive feedback: {positivePercentage.toFixed(0)} %</li>
                
            </ul>)
            : (<Notification message="There is no feedback"/>)}
            
        </>
    )
 };