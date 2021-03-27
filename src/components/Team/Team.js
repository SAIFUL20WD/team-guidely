import React from 'react';
import { useHistory } from 'react-router-dom';
import './Team.css';

const Team = (props) => {
    const {strTeam, strSport, strTeamBadge, idTeam} = props.teamInfo;
    const history = useHistory();
    const handleExplore = (id) => {
        const url = `/team/${id}`;
        history.push(url);
    }
    return (
        <div className="team-container">
            <div className="badge">
                <img src={strTeamBadge} alt={strTeam} />
            </div>
            <div className="team-info">
                <h2>{strTeam}</h2>
                <p>Sports Type: {strSport}</p>
                <button onClick={() => handleExplore(idTeam)} className="explore-btn">Explore &nbsp;<i className="fas fa-arrow-right"></i></button>
            </div>
        </div>
    );
};

export default Team;