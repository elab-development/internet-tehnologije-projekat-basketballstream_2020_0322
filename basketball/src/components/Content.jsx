import React,{useState,useEffect} from 'react';
import axios from 'axios';
import "../App";

const Content = () => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard');
          const { events } = response.data;
  
          const gameData = events.map(event => {
            return {
              gameId: event.id,
              logoHome: event.competitions[0].competitors[0].team.logo,
              logoAway: event.competitions[0].competitors[1].team.logo,
              homeTeam: event.competitions[0].competitors[0].team.abbreviation,
              awayTeam: event.competitions[0].competitors[1].team.abbreviation,
              homeScore: event.competitions[0].competitors[0].score,
              awayScore: event.competitions[0].competitors[1].score,
              status: event.status.type.description,
              date: new Date(event.date).toLocaleString(), // Convert date to a readable format
              venue: event.competitions[0].venue.fullName,
              broadcast: event.competitions[0].broadcasts.map(broadcast => broadcast.names.shortName).join(', '), // Combine multiple broadcasts into a string
              period: event.status.period,
              clock: event.status.displayClock,
       
            };
          });
  
          setData(gameData);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      // Fetch data every 30 seconds (adjust as needed)
      const intervalId = setInterval(fetchData, 30000);
  
      // Fetch data immediately when the component mounts
      fetchData();
  
      // Clean up interval on component unmount
      return () => clearInterval(intervalId);
    }, []);
  
    return (
      <div className="content-container">
        <h1>NBA Live Scoreboard</h1>
        <ul className="game-list">
          {data.map((game) => (
            <li key={game.gameId} className="game-card">
              <p className="team">{game.homeTeam} vs {game.awayTeam}</p>
              <img src={game.logoHome} alt={`${game.homeTeam} Logo`} className="logoHome" />
              <img src={game.logoAway} alt={`${game.awayTeam} Logo`} className="logoAway" />
              <p className="score">{game.homeScore} - {game.awayScore}</p>
              <p className="status">{game.status}</p>
              <p className="date">{game.date}</p>
              <p className="venue">{`Stadium: ${game.venue}`}</p>
              <p className="broadcast">{game.broadcast}</p>
              <p className="period">{`Period: ${game.period}`}</p>
              <p className="clock">{`Clock: ${game.clock}`}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Content;
