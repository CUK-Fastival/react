import FullCalendar from '@fullcalendar/react';
import './Schedule.css';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import dayGridPlugin from '@fullcalendar/daygrid';

const Schedule = () => {
    return(
        <div className="schedule-container">
            <h1>Schedule</h1>

            <div className="calendar">
                <FullCalendar
                    plugins={[dayGridPlugin, googleCalendarPlugin]}
                    googleCalendarApiKey='AIzaSyAmpeIqxK-BSBtckYnbZnJ9BfMX1lWVzd8'
                    events={{
                        googleCalendarId: 'cider0819@naver.com'
                    }}
                    initialView="dayGridMonth"
                    eventDisplay={'block'}
                    eventTextColor={'#FFF'}
                    eventColor={'#F2921D'}
                    height={'660px'}
                    Toolbar
                    style={{
                        position:'relative'
                    }}
                />
            </div>

            <div className="schedule-line">
                02 <hr></hr> SCHEDULE
            </div>
        </div>
    );
}

export default Schedule;