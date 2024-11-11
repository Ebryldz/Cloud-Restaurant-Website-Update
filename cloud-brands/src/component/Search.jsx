import React from 'react'
import Searchicon from '../images/search-icon.png';
import '../css/Search.css';
import Button from './Button';

export default function Search() {
    return (
        <div>
            <Button  >
                <img src={Searchicon} alt="search" width="30px" height="30px" />
            </Button>
        </div>
    )
}
