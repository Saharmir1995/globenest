import { Children, useState } from 'react';
import './App.css';

function App() {

  const [searchType, setSearchType] = useState('hotel')

  return (
    <div className="App">
      <main className='main'
        style={{
          backgroundImage: "url('/assets/background-desktop.png')",
          backgroundSize: 'contain',
          backgroundPosition: "center",
          height: "100vh",
          width: "100vw",
        }}
      >
        <FilterHotelOrFlight searchType={searchType} setSearchType={setSearchType} />

        {searchType === 'hotel' && <HotelsSearch />}
        {searchType === 'hotel' && <Search searchType={searchType} />}

        {searchType === 'flight' && <FlightsSearch />}
        {searchType === 'flight' && <Search searchType={searchType} />}
      </main>
    </div >
  );
}
export default App;

function FilterHotelOrFlight({ setSearchType, searchType }) {
  return (
    <div className='filter-hotel-flight' >
      <div className='filter-btn-hotel' style={{ backgroundColor: searchType === 'hotel' ? '#C08B7D' : "#d7d7d7", color: searchType === 'hotel' ? "#d7d7d7" : "#223A60" }} onClick={() => setSearchType('hotel')}>
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


function FlightsSearch({ Children }) {
  return (
    <div>
      {Children}
    </div>
  )
}

function HotelsSearch({ Children }) {
  return (
    <div>
      {Children}
    </div>
  )
}

function Search({ searchType }) {
  return (
    <div className='search'>
      <div className='search-destination'>
        <div className='search-destination-text'>
          <p>Destination</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20">
            <path fill="#292D32" d="M10.103 12.778L16.81 6.08a.69.69 0 0 1 .99.012a.726.726 0 0 1-.012 1.012l-7.203 7.193a.69.69 0 0 1-.985-.006L2.205 6.72a.727.727 0 0 1 0-1.01a.69.69 0 0 1 .99 0z" />
          </svg>
        </div>
        <input className='input' placeholder='Where Are You Going?' />
      </div>

      <Divider />

      <div className='search-check-in'>
        <p>Check in</p>
        <input className='input' placeholder='Choose Dates' />
      </div>

      <Divider />

      <div className='search-check-out'>
        <p>Check out</p>
        <input className='input' placeholder='Choose Dates' />
      </div>

      <Divider />

      <div className='search-guest'>
        <div className='search-guest-text'>
          <p>Guest</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20">
            <path fill="#292D32" d="M10.103 12.778L16.81 6.08a.69.69 0 0 1 .99.012a.726.726 0 0 1-.012 1.012l-7.203 7.193a.69.69 0 0 1-.985-.006L2.205 6.72a.727.727 0 0 1 0-1.01a.69.69 0 0 1 .99 0z" />
          </svg>        </div>
        <input className='input' placeholder='Add Guest' />
      </div>

      <div className='search-btn' style={{ backgroundColor: searchType === 'hotel' ? '#C08B7D' : "#d7d7d7", backgroundColor: searchType === 'flight' ? "#223A60" : '#C08B7D' }} >
        Search
      </div>
    </div>
  )
}


function Divider() {
  return (
    <div className='divider'></div>
  )
}
