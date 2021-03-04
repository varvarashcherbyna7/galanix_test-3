import React, {useState, useEffect} from 'react';
import './App.sass';
//import LoaderWebPages from "./components/LoaderWebPages/LoaderWebPages";
import Loader from "./components/Loader/Loader";
import Universities from "./components/Universities/Universities";

const App = () => {
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [univers, setUnivers] = useState([]);
    const [searchUnivers, setSearchUnivers] = useState([]);

    useEffect(() => {

        async function fetchData() {
            let res = await fetch('http://universities.hipolabs.com/search?name');
            let data = await res.json();
            let filterNames = data.filter(univer => univer.country.toLowerCase().includes(search.toLowerCase()));
            setUnivers(filterNames);
        }

        fetchData();

    }, [search]);

    const onHandlerChange = e => {
        e.preventDefault();
        setSearch(e.target.value);
    }

    const setValue = () => {
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

            { loading
                ? <Loader/>
                :
                searchUnivers.map((d, index) => {
                return <Universities d={d} index={index}/>
            })}
        </>
    )
};

export default App;
