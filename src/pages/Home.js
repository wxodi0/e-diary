import { useState,useContext,useEffect } from "react";
import {DiaryStateContext} from "../App";
import Button from "../components/Button";
import Header from "../components/Header";
import {getMonthRangeByDate} from "../util";
import DiaryList from "../components/DiaryList";

const Home =() => {
    const data =useContext(DiaryStateContext);
    const [pivotDate,setPivotDate] = useState(new Date());
    const headerTitle = `${pivotDate.getFullYear()}년 ${pivotDate.getMonth()+1}월`
    const [filterDate, setFilterData] = useState([]);

    useEffect(()=> {
        if(data.length >= 1){
            const {beginTimeStamp, endTimeStamp} = getMonthRangeByDate(pivotDate);
            setFilterData(data.filter((it)=> beginTimeStamp <= it.date && it.date <= endTimeStamp)) 
        }
        else{
            setFilterData([]);
        }
    },[data,pivotDate])

    const onIncreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(),pivotDate.getMonth()+1))
    }
    const onDecreaseMonth = () =>{
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth()-1));
    }

    return(
        <div>
            <Header
                title={headerTitle}
                leftChild={<Button text={"<"} onClick={onDecreaseMonth}/>}
                rightChild={<Button text={">"} onClick={onIncreaseMonth}/>}
            />
            <DiaryList data={filterDate} />
        </div>
    )
}

export default Home;