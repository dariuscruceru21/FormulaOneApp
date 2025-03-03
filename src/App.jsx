import React, {useEffect, useState} from 'react'
import Search from "./components/Search.jsx";

const API_BASE_URL = 'https://api.openf1.org/v1';

const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
    }
}

const App = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [errorMesage, setErrorMesage] = useState('');
    const [driverList, setDriverList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchDrivers = async () => {
        setIsLoading(true);
        setErrorMesage('');

        try {
            const endpoint = `${API_BASE_URL}/drivers?session_key=latest`;
            const response = await fetch(endpoint, API_OPTIONS);

            if(!response.ok) {
                throw Error('Failed to fetch Drivers');
            }

            const data = await response.json();


            if(data.Response ==='False'){
                setErrorMesage(data.Error || 'Failed to fetch movies');
                setDriverList([]);
                return;
            }

            setDriverList(data || []);

        } catch (error) {
            console.error(`Error fetching drivers: ${error}`);
            setErrorMesage('Error fetching drivers. Please try again');
        }finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchDrivers();
    }, [])

    return (
        <main>
            <div className="pattern"/>

            <div className="wrapper">
                <header>
                    <img src="./hero.png" alt="Hero Banner"/>
                    <h1>Find <span className="text-gradient">Formula One</span> Teams
                        without the hassle</h1>

                    <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
                </header>
                <section className="all-drivers">
                    <h2>All Drivers</h2>

                    {isLoading ? (
                        <p className="text-white">Loading...</p>
                    ) : errorMesage ? (
                        <p className="tex-red-500">{errorMesage}</p>
                    ) : (
                        <ul>
                            {driverList.map((driver) => (
                                <p className="text-white">{driver.broadcast_name}</p>
                            ))}
                        </ul>
                    )}

                    {errorMesage && <p className="text-red-500">{errorMesage}</p>}
                </section>
            </div>
        </main>
    )
}
export default App
