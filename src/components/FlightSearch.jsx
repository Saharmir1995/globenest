import './FlightSearch.css'
import { React, useState } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

export default function FlightSearch({ children, date, setDate, searchType ,results2 ,setResults2 }) {

    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [openCard2, setOpenCard2] = useState(false)
    const [guests, setGuests] = useState(1)


    function handleDate(selectedDate) {
        setDate(selectedDate);
    }

    function handleIncreaseGuests() {
        if (guests < 4) {
            setGuests(prevGuests => prevGuests + 1)
        }
    }

    function handleDecreaseGuests() {
        if (guests > 1) {
            setGuests(prevGuests => prevGuests - 1)
        }
    }

    const handleSubmitFlight = async (e) => {
        e.preventDefault();

        if (to && from && date && guests !== null) {
            const url = `http://localhost:3001/flights?from=${from}&to=${to}&date=${date}&guests=${guests}`;
            try {
                const response = await fetch(url);
                const data = await response.json();

                console.log(data);
                // setResults2(data);
            } catch (err) {
                console.error('there is an error for fetching flights data!' , err)
            }
        }

    }

    return (
        <div className='flight'>
            <form className='search' onSubmit={handleSubmitFlight}>

                <div className='search-from'>
                    <div className='search-from-text'>
                        <p>From</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20">
                            <path fill="#292D32" d="M10.103 12.778L16.81 6.08a.69.69 0 0 1 .99.012a.726.726 0 0 1-.012 1.012l-7.203 7.193a.69.69 0 0 1-.985-.006L2.205 6.72a.727.727 0 0 1 0-1.01a.69.69 0 0 1 .99 0z" />
                        </svg>
                    </div>
                    <input className='input' placeholder='From Where?' type='text' value={from} onChange={(e) => setFrom(e.target.value)} />
                </div>

                <Divider />

                <div className='search-to'>
                    <div className='search-to-text'>
                        <p>To</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20">
                            <path fill="#292D32" d="M10.103 12.778L16.81 6.08a.69.69 0 0 1 .99.012a.726.726 0 0 1-.012 1.012l-7.203 7.193a.69.69 0 0 1-.985-.006L2.205 6.72a.727.727 0 0 1 0-1.01a.69.69 0 0 1 .99 0z" />
                        </svg>
                    </div>
                    <input className='input' placeholder='Where To?' type='text' value={to} onChange={(e) => setTo(e.target.value)} />
                </div>

                <Divider />

                <div className='search-date'>
                    <p>Date</p>
                    <DatePicker
                        selected={date}
                        onChange={handleDate}
                        dateFormat="yyyy-MM-dd"
                        placeholderText="Select a date"
                        className='input'
                        selectsStart
                        minDate={new Date()}
                    />
                </div>

                <Divider />

                <div className='search-guest'>
                    <div className='search-guest-text'>
                        <p>Guest</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20">
                            <path fill="#292D32" d="M10.103 12.778L16.81 6.08a.69.69 0 0 1 .99.012a.726.726 0 0 1-.012 1.012l-7.203 7.193a.69.69 0 0 1-.985-.006L2.205 6.72a.727.727 0 0 1 0-1.01a.69.69 0 0 1 .99 0z" />
                        </svg>
                    </div>

                    <div className='input guest-input' onClick={() => setOpenCard2(!openCard2)}>{guests} Guests</div>


                    <div className={`search-guest-card  ${openCard2 ? "active" : ''}`}>
                        <div className='search-guest-card-row'>

                            <div className='search-guest-card-text'>{guests < 2 ? 'Guest' : 'Guests'}</div>

                            <div className='search-guest-card-counter'>
                                <div className='search-guest-card-counter-btns' onClick={handleDecreaseGuests}> - </div>
                                <div className='search-guest-card-counter-num'>{guests}</div>
                                <div className='search-guest-card-counter-btns' onClick={handleIncreaseGuests}> + </div>
                            </div>

                        </div>
                    </div>
                </div>


                <button className='search-btn'
                    type="submit"
                    style={{ backgroundColor: searchType === 'hotel' ? '#C08B7D' : "#d7d7d7", backgroundColor: searchType === 'flight' ? "#223A60" : '#C08B7D' }}
                >
                    Search
                </button>

            </form>
            <div>
                {children}
            </div>
        </div>
    )
}



function Divider() {
    return (
        <div className='divider'></div>
    )
}
