import React from 'react'

const driverImages = {
    "Alexander ALBON": "/driverImages/albon.png",
    "Lewis HAMILTON": "/driverImages/hamilton.png",
    "Andrea Kimi ANTONELLI": "/driverImages/antonelli.png",
    "Charles LECLERC": "/driverImages/leclerc.png",
    "Esteban OCON": "/driverImages/ocon.png",
    "Fernando ALONSO": "/driverImages/alonso.png",
    "Gabriel BORTOLETO": "/driverImages/bortoleto.png",
    "George RUSSELL": "/driverImages/russell.png",
    "Isack HADJAR": "/driverImages/hadjar.png",
    "Jack DOOHAN": "/driverImages/doohan.png",
    "Lance STROLL": "/driverImages/stroll.png",
    "Lando NORRIS": "/driverImages/norris.png",
    "Max VERSTAPPEN": "/driverImages/verstappen.png",
    "Nico HULKENBERG": "/driverImages/hulkenberg.png",
    "Oliver BEARMAN": "/driverImages/bearman.png",
    "Oscar PIASTRI": "/driverImages/piastri.png",
    "Pierre GASLY": "/driverImages/gasly.png",
    "Yuki TSUNODA": "/driverImages/tsunoda.png"
}


const DriverCard = ({driver: {full_name, team_name, driver_number, country_code}}) => {
    const driverImage = driverImages[full_name] || '/No-Team.png';

    return (
        <div className="driver-card">
            <img src={driverImage} alt="driver image"/>


            <div className="mt-4 content">
                <h3>{full_name}</h3>

                <div className="content">
                    <div className="rating">
                        <img src="star.svg" alt="Star Icon"/>
                        <p>{team_name ? team_name : 'N/A'}</p>
                    </div>
                    <span>●</span>
                    <p className="lang">{country_code}</p>
                    <span>●</span>
                    <p className="year">{driver_number}</p>
                </div>
            </div>
        </div>
    )
}
export default DriverCard

