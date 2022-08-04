import React, {useState, useEffect} from 'react'
import PersonForm from './PersonForm';
import PersonList from './PersonList';
import axios from 'axios';

const Main = () => {
    const [people, setPeople] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/people')
            .then(res=>{
                setPeople(res.data);
                setLoaded(true);
            });
    },[])
    return (
        <div>
        <PersonForm/>
        <hr/>
        {loaded && <PersonList people={people}/>}
        </div>
    )
}

export default Main;
