import React, {useState, useEffect} from 'react';
import Loader from "./components/Loader/Loader";
import './App.sass';

const App = () => {

    const [data, setData] = useState([]);

    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [univers, setUnivers] = useState([]);
    const [searchUnivers, setSearchUnivers] = useState([]);

    useEffect(() => {
        try {
            async function fetchData() {
                let res = await fetch(`http://universities.hipolabs.com/search?name/?format=json`, {
                    // method: 'GET', // *GET, POST, PUT, DELETE, etc.
                    // mode: 'same-origin', // no-cors, *cors, same-origin
                    //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                    //credentials: 'same-origin', // include, *same-origin, omit
                    // headers: {
                    //     'Content-Type': 'application/json'
                    //     // 'Content-Type': 'application/x-www-form-urlencoded',
                    // },
                    //redirect: 'follow', // manual, *follow, error
                    referrerPolicy: 'no-referrer', // no-referrer, *client
                    //body: "Content-Type" // body data type must match "Content-Type" header
                });
                let data = await res.json();
                setData(data);
            }
            fetchData();

            let filterNames = data.filter(univer => univer.country.toLowerCase().includes(search.toLowerCase()));
            setUnivers(filterNames);

        } catch (err) {
            console.log(err);
        }

    }, [search]);

    const onHandlerChange = e => {
        e.preventDefault();
        setSearch(e.target.value);
    }

    const setValue = () => {
        console.log(univers);
        setLoading(true);
        setSearchUnivers([...univers]);
        setLoading(false);
    }

    const deleteValue = () => {
        setSearchUnivers([]);
        setSearch('');
        setLoading(true);
    }

    return (
        <>
            <div className='container'>
                <form>
                    <div className='inputContainer'>
                        <input type="text"
                               placeholder=''
                               value={search}
                               onChange={onHandlerChange}
                        />
                    </div>
                    <div className='btn' onClick={setValue}>Отправить</div>
                    <div className='btn' onClick={deleteValue}>Сбросить</div>
                </form>
            </div>
            {
                loading
                    ? <Loader/>
                    :
                    searchUnivers.map((d, index) => {
                        return (
                            <div key={d.name + index} className="container">
                                <h1 className="nameUniversity"><span>{index + 1}.</span> {d.name}</h1>
                                <div className="infoUniversity">
                                    <div><h3>Country:</h3>{d.alpha_two_code} - {d.country}</div>
                                    <div><h3>Domain:</h3>{d.domains.map((d, i) => {
                                        return (
                                            <div key={`domain${i}`}>{i + 1}. {d}</div>
                                        )
                                    })}</div>
                                    <div><h3>Web pages:</h3>
                                        {
                                            d.web_pages.map((page, index) => {
                                                return (
                                                    <>
                                                        <div key={`page${index}`}>
                                                            <div>{index + 1}. <a href={page}>{page}</a></div>
                                                        </div>
                                                    </>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    })}
        </>
    )
};

export default App;
