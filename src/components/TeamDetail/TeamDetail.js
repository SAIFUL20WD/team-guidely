import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './TeamDetail.css';
import stadium from "../../images/stadium-bg.jpg";
import male from '../../images/male.png';
import female from '../../images/female.png';


const TeamDetail = () => {
    const {id} = useParams();

    const [team, setTeam] = useState([]);

    useEffect( () => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setTeam(data.teams[0]))
    }, [id]);

    const background = {
        backgroundImage: `url(${stadium})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
        height: "400px"
    }

    return (
        <div>
            <div style={background}>
                <div className="team-badge">
                    <img src={team.strTeamBadge} alt="Team Badge"/> 
                </div>
            </div>
            <div className="team-overview">  
                <div className="team-card">
                    <div className="team-detail">
                        <h2>{team.strTeam}</h2>
                        <h4><i className="fas fa-map-marker-alt"></i> &nbsp;&nbsp;Founded: {team.intFormedYear}</h4>
                        <h4><i className="far fa-flag"></i> &nbsp;Country: {team.strCountry}</h4>
                        <h4><i className="fas fa-futbol"></i> &nbsp;Sport Type: {team.strSport}</h4>
                        <h4><i className="fas fa-mars"></i> &nbsp;&nbsp;Gender: {team.strGender}</h4>
                    </div>
                    <div className="gender">
                        {
                            team.strGender === 'Male' ? <img src={male} alt=""/>  
                            : team.strGender === 'Female' ? <img src={female} alt=""/> : null
                        }
                    </div>
                </div>
                <div className="team-description">
                    <p>{team.strDescriptionEN}</p>
                    <br/>
                    <p>{team.strStadiumDescription}</p>
                </div>
                <div className="social-icon">
                    <a href={`//${team.strFacebook}`}><i className="fab fa-facebook"></i></a>&nbsp;
                    <a href={`//${team.strTwitter}`}><i className="fab fa-twitter-square"></i></a>&nbsp;
                    <a href={`//${team.strInstagram}`}><i className="fab fa-instagram"></i></a>&nbsp;
                    <a href={`//${team.strYoutube}`}><i className="fab fa-youtube"></i></a>
                </div>
            </div>
        </div>
    );
};

export default TeamDetail;