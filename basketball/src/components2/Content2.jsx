import React, { useState, useEffect } from 'react';
import "../drugastrana";
import "../App2.css";

const Content2 = () => {
  const [teams, setTeams] = useState([]);
  const apiUrl = 'https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setTeams(data.sports[0].leagues[0].teams);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [apiUrl]);

  return (
    <div className="content-container">
      <h1>NBA Teams</h1>
      <ul className="team-list">
        {teams.map((team) => (
          <li key={team.team.id} className="team-card">
            <img src={team.team.logos[0].href} alt={team.team.displayName} />
            <h2>{team.team.displayName}</h2>
            <p>{team.team.location}</p>
            <a href={team.team.links[2].href}>Team Statistics</a>
            <br></br>
            <a href={team.team.links[1].href}>Roster</a>
            {/* Add more information or links as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Content2;
