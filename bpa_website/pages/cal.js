import { useState, useEffect, useRef } from 'react';

export default function Calendar() {
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(8); // August is initially displayed (zero-based index)
  const inputRefs = useRef([]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key === 'c') {
        handleCellCopy();
      } else if (e.ctrlKey && e.key === 'v') {
        handleCellPaste();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const handleMonthChange = (increment) => {
    setCurrentMonth((prevMonth) => prevMonth + increment);
  };

  const handleInputChange = (date, value) => {
    setEvents((prevEvents) => {
      const updatedEvents = [...prevEvents];
      const existingEventIndex = updatedEvents.findIndex((event) => event.date === date);

      if (existingEventIndex !== -1) {
        updatedEvents[existingEventIndex].event = value;
      } else {
        updatedEvents.push({ date, event: value });
      }

      return updatedEvents;
    });
  };

  const handleCellCopy = () => {
    navigator.clipboard.writeText(
      inputRefs.current
        .filter((ref) => ref.checked)
        .map((ref) => ref.value)
        .join('\t')
    );
  };

  const handleCellPaste = () => {
    navigator.clipboard.readText().then((clipboardData) => {
      const clipboardRows = clipboardData.split('\n');
      setEvents((prevEvents) => {
        const updatedEvents = [...prevEvents];
        clipboardRows.forEach((clipboardRow, rowIndex) => {
          const clipboardCols = clipboardRow.split('\t');
          clipboardCols.forEach((clipboardValue, colIndex) => {
            const date = selectedDate + colIndex;
            const existingEventIndex = updatedEvents.findIndex((event) => event.date === date);

            if (existingEventIndex !== -1) {
              updatedEvents[existingEventIndex].event = clipboardValue;
            } else {
              updatedEvents.push({ date, event: clipboardValue });
            }
          });
        });
        return updatedEvents;
      });
    });
  };

  const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

  const daysInCurrentMonth = getDaysInMonth(2023, currentMonth);
  const daysArray = Array.from({ length: daysInCurrentMonth }, (_, index) => index + 1);

  return (
    <div className="flex justify-center">
      <div className="bg-white w-full max-w-md px-6 py-4 shadow-md rounded-md">

        <div className="flex justify-between items-center mb-4">
          <button
            className="btn btn-sm btn-primary"
            onClick={() => handleMonthChange(-1)}
          >
            Previous
          </button>
          <span className="font-bold text-black text-lg">
            {new Date(2023, currentMonth, 1).toLocaleString('default', { month: 'long' })}
          </span>
          <button
            className="btn btn-sm btn-primary"
            onClick={() => handleMonthChange(1)}
          >
            Next
          </button>
        </div>

        <div className="overflow-x-auto">
          <div className="grid grid-cols-7 gap-2">
            <div className="flex flex-col justify-center items-center p-2 text-gray-500">
              Sun
            </div>
            <div className="flex flex-col justify-center items-center p-2 text-black">
              Mon
            </div>
            <div className="flex flex-col justify-center items-center p-2 text-black">
              Tue
            </div>
            <div className="flex flex-col justify-center items-center p-2 text-black">
              Wed
            </div>
            <div className="flex flex-col justify-center items-center p-2 text-black">
              Thu
            </div>
            <div className="flex flex-col justify-center items-center p-2 text-black">
              Fri
            </div>
            <div className="flex flex-col justify-center items-center p-2 text-gray-500">
              Sat
            </div>
          </div>

          <div className="grid grid-cols-7 gap-2">
            {daysArray.map((date, colIndex) => (
              <div
                key={date}
                className={`flex flex-col justify-center items-center p-2 ${
                  date % 2 === 0 ? 'bg-gray-200' : ''
                } text-black cursor-pointer`}
                onClick={() => handleDateClick(date)}
              >
                <span className="mb-1">{date}</span>
                <input
                  type="text"
                  className="text-xs text-gray-500 w-16 p-1 border rounded-md cell-input"
                  value={
                    events.find((event) => event.date === date)
                      ? events.find((event) => event.date === date).event
                      : ''
                  }
                  onChange={(e) => handleInputChange(date, e.target.value)}
                  ref={(inputRef) => (inputRefs.current[colIndex] = inputRef)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
