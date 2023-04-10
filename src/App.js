import "./App.css";
import Schedules from "./Components/Schedules/Schedules";
import { useState, useEffect } from "react";
import ScheduleTable from "./Components/ScheduleTable/ScheduleTable";
import schedulesService from './Services/Schedules'
function App() {
  const [scheduleList, setScheduleList] = useState([]);
  const [currentScheduleId, setCurrentScheduleId] = useState();
  const [currentScheduleLog, setCurrentScheduleLog] = useState([]);

  useEffect(() => {
    const getSchedules = async() => {
      const schedules = await schedulesService.getSchedules();
      console.log('schedules',schedules)
      setScheduleList(schedules);
      setCurrentScheduleId(schedules[0].id)
    } 
    getSchedules();
   
  }, []);

  useEffect(() => {
    const getScheduleLog = async() => {
      const scheduleLog = await schedulesService.getScheduleLogs(currentScheduleId);
      console.log('currentScheduleLog',currentScheduleLog)
      setCurrentScheduleLog(scheduleLog);
    } 
    getScheduleLog();

  }, [currentScheduleId]);

  return (
    <div>
       
      <header className="App-header">Logo</header>
     <div className="main">
      <h3>Schedules</h3>
        <div className="content">
         <aside>
         {
              setScheduleList && setScheduleList.length?(
                <Schedules
              scheduleList={scheduleList}
              setScheduleList={setScheduleList}
              setCurrentScheduleId={setCurrentScheduleId}
              currentScheduleId={currentScheduleId}
            />
              ):(
                <div className="lds-container">LOADING<span class="lds-dual-ring"></span></div>
              )
            } </aside>
          <section>
            {
              currentScheduleLog && currentScheduleLog.length?(
                <ScheduleTable tabledata={currentScheduleLog} />
              ):(
                <div className="lds-container">LOADING<span class="lds-dual-ring"></span></div>
              )
            }
           
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
