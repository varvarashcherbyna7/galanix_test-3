import React, {useState, useEffect} from 'react';
import Loader from "./components/Loader/Loader";
import './App.sass';

const App = () => {

    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [univers, setUnivers] = useState([]);
    const [searchUnivers, setSearchUnivers] = useState([]);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            let res = await fetch('http://universities.hipolabs.com/search?name');
            let data = await res.json();
            let filterNames = data.filter(univer => univer.country.toLowerCase().includes(search.toLowerCase()));
            setUnivers(filterNames);
            setLoading(false);
        }
        fetchData();
    }, [search]);

    const onHandlerChange = e => {
        e.preventDefault();
        setSearch(e.target.value);
    }

    const setValue = () => {
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
                            <div key={index} className="container">
                                <h1 className="nameUniversity"><span>{index + 1}.</span> {d.name}</h1>

                                <div className="infoUniversity">
                                    <div><h3>Country:</h3>{d.alpha_two_code} - {d.country}</div>
                                    <div><h3>Domain:</h3>{d.domains.map((d, i) => {
                                        return (
                                            <div key={i}>{i + 1}. {d}</div>
                                        )
                                    })}</div>

                                    <div><h3>Web pages:</h3>
                                        {
                                            d.web_pages.map((page, index) => {
                                                return (
                                                    <>
                                                        <div key={index}>
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
