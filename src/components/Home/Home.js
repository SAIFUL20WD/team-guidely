import React, { useEffect, useState } from 'react';
import Team from '../Team/Team';
import './Home.css';
import stadium from "../../images/stadium-bg.jpg";

const Home = () => {
    const [teams, setTeams] = useState([]);

    useEffect( () => {
        const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League';
        fetch(url)
        .then(res => res.json())
        .then(data => setTeams(data.teams))
    }, []);

    const background = {
        backgroundImage: `url(${stadium})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
        height: "400px"
    }

    return (
        <div className="home">
            <div style={background}>
                <h1 className="title">Football Team Guide</h1>
            </div>
            <div className="all-team-container">
                {
                    teams.map(team => <Team teamInfo={team} key={team.idTeam}></Team>)
                }
            </div>
        </div>
    );
};

export default Home;