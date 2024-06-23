import { Component } from "react";

// import '../search-box/search-box.styles.css'

import './search-box.styles.css'


const SearchBox =({searchBo}) =>(
    
        //const {searchBo}=this.props;
        
            <input 
            className="search-box"
            
            type="search" 
            placeholder="Search..."
            onChange={searchBo}
        />
        
    
    );

export default SearchBox;