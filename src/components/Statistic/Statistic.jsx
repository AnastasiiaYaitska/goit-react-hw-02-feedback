import { Notification } from "components/Notification/Notification";
import { StatisticList, StatisticItem } from "./Statistic.styled";

export const Statistic = ({ good, neutral, bad, total, positivePercentage }) => {
   
    return (
        <>
            {total ? (<StatisticList>
                <StatisticItem>Good: <span>{good}</span></StatisticItem>
                <StatisticItem>Neutral: <span>{neutral}</span></StatisticItem>
                <StatisticItem>Bad: <span>{bad}</span></StatisticItem>
                <StatisticItem>Total: <span>{total}</span></StatisticItem>
                <StatisticItem>Positive feedback: <span>{positivePercentage.toFixed(0)} %</span></StatisticItem>
                
            </StatisticList>)
            : (<Notification message="There is no feedback"/>)}
            
        </>
    )
 };