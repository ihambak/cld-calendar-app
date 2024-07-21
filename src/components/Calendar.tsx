import React, { useRef, useEffect, useState } from 'react';
import Calendar from '@toast-ui/react-calendar';
import '@toast-ui/calendar/dist/toastui-calendar.min.css';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #f5f5f5;
`;

const ButtonGroup = styled.div`
    display: flex;
    gap: 10px;
`;

const Button = styled.button`
    padding: 8px 16px;
    background-color: #4b96e6;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
        background-color: #3a75b5;
    }
`;

const CalendarContainer = styled.div`
    flex-grow: 1;
`;

type ViewType = 'month' | 'week' | 'day';

const CalendarPage: React.FC = () => {
    const calendarRef = useRef<Calendar>(null);
    const [view, setView] = useState<ViewType>('month');
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const calendarInstance = calendarRef.current?.getInstance();
        if (calendarInstance) {
            calendarInstance.setDate(currentDate);
            calendarInstance.changeView(view);
        }
    }, [view, currentDate]);

    const handleClickToday = () => {
        setCurrentDate(new Date());
    };

    const handleClickPrev = () => {
        const newDate = new Date(currentDate);
        if (view === 'month') {
            newDate.setMonth(newDate.getMonth() - 1);
        } else if (view === 'day')  {
            newDate.setDate(newDate.getDate() - 1);
        } else {
            newDate.setDate(newDate.getDate() - 7);
        }
        setCurrentDate(newDate);
    };

    const handleClickNext = () => {
        const newDate = new Date(currentDate);
        if (view === 'month') {
            newDate.setMonth(newDate.getMonth() + 1);
        } else if (view === 'day') {
            newDate.setDate(newDate.getDate() + 1);
        } else {
            newDate.setDate(newDate.getDate() + 7);
        }
        setCurrentDate(newDate);
    };

    const handleChangeView = (newView: ViewType) => {
        setView(newView);
    };

    return (
        <Container>
            <Header>
                <ButtonGroup>
                    <Button onClick={handleClickToday}>Today</Button>
                    <Button onClick={handleClickPrev}>Prev</Button>
                    <Button onClick={handleClickNext}>Next</Button>
                </ButtonGroup>
                <h2>{currentDate.toLocaleDateString()}</h2>
                <ButtonGroup>
                    <Button onClick={() => handleChangeView('month')}>Month</Button>
                    <Button onClick={() => handleChangeView('week')}>Week</Button>
                    <Button onClick={() => handleChangeView('day')}>Day</Button>
                </ButtonGroup>
            </Header>
            <CalendarContainer>
                <Calendar
                    ref={calendarRef}
                    height="100%"
                    view={view}
                    useDetailPopup={true}
                    // useCreationPopup={true}
                    week={{
                        startDayOfWeek: 0,
                        dayNames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                        narrowWeekend: true,
                        workweek: false,
                    }}
                    month={{
                        startDayOfWeek: 0,
                        dayNames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                        narrowWeekend: true,
                    }}
                />
            </CalendarContainer>
        </Container>
    );
};

export default CalendarPage;