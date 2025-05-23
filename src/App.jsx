import { useState, React, useEffect } from 'react';
import HotelsSearch from './components/HotelsSearch';
import HotelResultsList from './components/HotelResultsList'
import FlightSearch from './components/FlightSearch';
import FlightResultsList from './components/FlightResultsList'
import './App.css';
import Loading from './components/Loading';


function App() {

  const [searchType, setSearchType] = useState('hotel')
  const [results, setResults] = useState([]);
  const [results2, setResults2] = useState([]);
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [date, setDate] = useState('');

  const [adults, setAdults] = useState(1)
  const [childs, setChilds] = useState(0)

  const [loading, setLoading] = useState(false)



  // ---------backgroundColor----------
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollTop = window.scrollY;
  //     document.body.style.background = `linear-gradient(
  //       to bottom,
  //       #ffffff 0%,
  //       #e6e6e6 ${scrollTop * 0.1}px,
  //       #cccccc ${scrollTop * 0.2}px,
  //       #b3b3b3 ${scrollTop * 0.3}px,
  //       #999999 ${scrollTop * 0.4}px,
  //       #808080 ${scrollTop * 0.5}px,
  //       #666666 ${scrollTop * 0.6}px,
  //       #4d4d4d ${scrollTop * 0.7}px,
  //       #333333 ${scrollTop * 0.8}px,
  //       #1a1a1a ${scrollTop * 0.9}px,
  //       #000000 ${scrollTop}px
  //     )`;
  //   }

  //   window.addEventListener('scroll', handleScroll)
  //   return () => window.removeEventListener('scroll', handleScroll)
  // }, []);


  return (
    <div className="App" >
      <main className='main'
        style={{
          backgroundSize: 'cover',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "100vh",
          width: "100vw",
        }}
      >
        <FilterHotelOrFlight searchType={searchType} setSearchType={setSearchType} />

        {searchType === 'hotel' &&
          <HotelsSearch searchType={searchType}
            results={results}
            setResults={setResults}
            checkIn={checkIn}
            checkOut={checkOut}
            setCheckIn={setCheckIn}
            setCheckOut={setCheckOut}
            adults={adults}
            setAdults={setAdults}
            childs={childs}
            setChilds={setChilds}
            loading={loading}
            setLoading={setLoading}
          >

            {loading ? (<Loading />) : results.length > 0 ? (<HotelResultsList results={results} checkIn={checkIn} checkOut={checkOut} childs={childs} adults={adults} />) : (
              <p>No hotels available for the selected dates.</p>
            )}
          </HotelsSearch>}


        {searchType === 'flight' &&
          <FlightSearch results2={results2}
            setResults2={setResults2}
            date={date}
            setDate={setDate}
            searchType={searchType}
            loading={loading}
            setLoading={setLoading}>
              
            {loading ? (<Loading />) : results2.length > 0 ? (<FlightResultsList />) : (<p>No flights available for the selected date.</p>
            )}
          </FlightSearch>}

      </main>
    </div >
  );
}
export default App;



function FilterHotelOrFlight({ setSearchType, searchType }) {

  function handleClickHotel() {
    setSearchType('hotel')
  }


  return (
    <div className='filter-hotel-flight' >
      <div className='filter-btn-hotel' style={{ backgroundColor: searchType === 'hotel' ? '#C08B7D' : "#d7d7d7", color: searchType === 'hotel' ? "#d7d7d7" : "#223A60" }} onClick={handleClickHotel}>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 20 20" >
            <path style={{ fill: searchType === 'hotel' ? "#d7d7d7" : "#223A60" }} d="M2 12h18v6h-2v-2H2v2H0V2h2zm8-6h8a2 2 0 0 1 2 2v3H10zm-4 5a3 3 0 1 1 0-6a3 3 0 0 1 0 6" />
          </svg>
        </span>
        <p>Hotels</p>
      </div>
      <div className='filter-btn-flight' style={{ backgroundColor: searchType === 'flight' ? "#223A60" : "#d7d7d7", color: searchType === 'flight' ? "#d7d7d7" : "#283841" }} onClick={() => setSearchType('flight')}>
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24">
          <path style={{ fill: searchType === 'flight' ? "#d7d7d7" : "#283841" }} fill="#000" d="m9.983 20.048l-2.09-3.946l-3.966-2.11l1.083-1.077l3.452.587l3.05-3.05L4.01 7.25l1.388-1.38l9.125 1.565l3.12-3.139q.42-.421 1.03-.421t1.03.421q.422.421.422 1.028t-.421 1.028l-3.145 3.125l1.566 9.12l-1.394 1.394l-3.189-7.502l-3.05 3.05l.573 3.427z" /></svg>
        <p>Flights</p>
      </div>
    </div>
  )
}



// ---------------------------------------------------------------------
