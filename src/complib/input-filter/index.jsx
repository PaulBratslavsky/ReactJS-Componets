import React, { useState, useEffect } from 'react';
import styles from './input-filter.module.scss';
const endpoint = 'https://picsum.photos/v2/list';

function InputFilter({collection = [], renderTemplate, searchTerm, keyId}) {
    const [ query, setQuery ] = useState('');
    return (
        <div className={styles['input-filter']}>
            <div className={styles['input']}>
                <input 
                    type="search"
                    placeholder="search movies" 
                    value={query} 
                    onChange={(e) => 
                    setQuery(e.target.value)}
                ></input>
            </div>
            
            <ul className={styles['grid']}>
                    { collection.length > 1 && collection
                        .filter(item => item[searchTerm].toLowerCase().indexOf(query.toLowerCase()) > -1)
                        .map(item => <li key={item[keyId]}>{renderTemplate(item)}</li>)}        
            </ul>
        </div>
    )
}

const authorTemplate = (item) => (
    <div>
        <h1>{item.author}</h1>
        <img src={item.download_url} alt={item.author} height={100}/>
    </div>
)


export default function InputFilterContainer() {
    useEffect( () => {
        fetch(endpoint)
        .then( res => res.json())
        .then( data => setData(data))
        .catch(err => console.error(err));
    },[]);

    const [ data, setData ] = useState([]);

    console.log(data);

    return <>
        <InputFilter 
            collection={data}
            searchTerm="author"
            renderTemplate={item => authorTemplate(item)}
            keyId="id"
        />
    </>

   
}
