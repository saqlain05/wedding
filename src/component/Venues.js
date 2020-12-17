import React from 'react'
import '../style/Venue.css'
import SearchIcon from '@material-ui/icons/Search';
import Grain from '@material-ui/icons/Grain';
import StarHalf from '@material-ui/icons/StarHalf';
import { Tooltip } from '@material-ui/core';


const Venues = () => {
    return (
        <div className="mainDiv">
        
            <div className="venueFirst">
                <div className="venueFirst1">
                    <h3>Wedding Venue</h3>
                    <p>Showing <b>22220</b> Results as per your search criteria</p>
                </div>
                <div className="venueSearch">
                    <p> <SearchIcon fontSize="small" /> </p>
                    <input placeholder="Search Wedding Venue" type="text" />
                </div>
            </div>

            <div className="venueCards">
                <div className="venueCard">
                    <div className="venueImage">
                        <img src="https://www.brides.com/thmb/0sOaZ3sx3JI5fdvHe3Gej0x813o=/3759x2114/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__brides__proteus__585acc1e54421cf15eb0e0b8__169-6741927d00934d1d942b4e2e8c2ab990.jpeg" alt="missing" />
                        <div className="venueImageTop">
                        <Tooltip  title={
                        
                        <>
                        <h2>About Vendor</h2>
                        <p style={{color:'white'}}>lorem10 lorem10 lorem10 lorem10 lorem10 lorem10</p>
                        <p style={{color:'white'}}>lorem10 lorem10 lorem10 lorem10 lorem10 lorem10</p>
                        </>
                        } 
                        placement="right" arrow>
                        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                        <p ><Grain /></p>
                            <h6 className="h6">HandPicked</h6>
                        </div>
                        </Tooltip>
                        
                        </div>
                        <div className="venueImageright">
                        <Tooltip  title={
                      
                        <>
                        <h2>About Vendor</h2>
                        <p style={{color:'white'}}>lorem10 lorem10 lorem10</p>
                        </>
                        } 
                        placement="right" arrow>
                        <p><Grain /></p>
                        </Tooltip>
                            
                            
                        </div>
                        
                    </div>

                    <div className="venueContaint">
                        <div className="venuehead">
                            <h3>Western Inn</h3>
                            <p>New Delhi</p>
                        </div>
                        <div className="venueReview">
                            <span className="star"> <StarHalf /> 4.3 </span>
                            <p>6 Reviews</p>
                        </div>
                        <div className="venuePrices">
                            <p> $2000 </p> 
                        </div>
                        
                    </div>
                    {/* <hr style={{ width:'90%', margin:'auto', padding:'0rem', backgroundColor:'black' }}/> */}
                    <hr className="hr" style={{marginTop:'1rem', borderTop:" 1px dashed #4a4a4a"}} />
                        <div className="venuePrice">
                            <p> $2000 </p> 
                        </div>
                </div>
                <div className="venueCard">
                    <div className="venueImage">
                        <img src="https://www.brides.com/thmb/0sOaZ3sx3JI5fdvHe3Gej0x813o=/3759x2114/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__brides__proteus__585acc1e54421cf15eb0e0b8__169-6741927d00934d1d942b4e2e8c2ab990.jpeg" alt="missing" />
                        <div className="venueImageTop">
                        <Tooltip  title={
                        
                        <>
                        <h2>About Vendor</h2>
                        <p style={{color:'white'}}>lorem10 lorem10 lorem10 lorem10 lorem10 lorem10</p>
                        <p style={{color:'white'}}>lorem10 lorem10 lorem10 lorem10 lorem10 lorem10</p>
                        </>
                        } 
                        placement="right" arrow>
                        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                        <p ><Grain /></p>
                            <h6 className="h6">HandPicked</h6>
                        </div>
                        </Tooltip>
                        
                        </div>
                        <div className="venueImageright">
                        <Tooltip  title={
                      
                        <>
                        <h2>About Vendor</h2>
                        <p style={{color:'white'}}>lorem10 lorem10 lorem10</p>
                        </>
                        } 
                        placement="right" arrow>
                        <p><Grain /></p>
                        </Tooltip>
                            
                            
                        </div>
                        
                    </div>

                    <div className="venueContaint">
                        <div className="venuehead">
                            <h3>Western Inn</h3>
                            <p>New Delhi</p>
                        </div>
                        <div className="venueReview">
                            <span className="star"> <StarHalf /> 4.3 </span>
                            <p>6 Reviews</p>
                        </div>
                        <div className="venuePrices">
                            <p> $2000 </p> 
                        </div>
                        
                    </div>
                    {/* <hr style={{ width:'90%', margin:'auto', padding:'0rem', backgroundColor:'black' }}/> */}
                    <hr className="hr" style={{marginTop:'1rem', borderTop:" 1px dashed #4a4a4a"}} />
                        <div className="venuePrice">
                            <p> $2000 </p> 
                        </div>
                </div>
                <div className="venueCard">
                    <div className="venueImage">
                        <img src="https://www.brides.com/thmb/0sOaZ3sx3JI5fdvHe3Gej0x813o=/3759x2114/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__brides__proteus__585acc1e54421cf15eb0e0b8__169-6741927d00934d1d942b4e2e8c2ab990.jpeg" alt="missing" />
                        <div className="venueImageTop">
                        <Tooltip  title={
                        
                        <>
                        <h2>About Vendor</h2>
                        <p style={{color:'white'}}>lorem10 lorem10 lorem10 lorem10 lorem10 lorem10</p>
                        <p style={{color:'white'}}>lorem10 lorem10 lorem10 lorem10 lorem10 lorem10</p>
                        </>
                        } 
                        placement="right" arrow>
                        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                        <p ><Grain /></p>
                            <h6 className="h6">HandPicked</h6>
                        </div>
                        </Tooltip>
                        
                        </div>
                        <div className="venueImageright">
                        <Tooltip  title={
                      
                        <>
                        <h2>About Vendor</h2>
                        <p style={{color:'white'}}>lorem10 lorem10 lorem10</p>
                        </>
                        } 
                        placement="right" arrow>
                        <p><Grain /></p>
                        </Tooltip>
                            
                            
                        </div>
                        
                    </div>

                    <div className="venueContaint">
                        <div className="venuehead">
                            <h3>Western Inn</h3>
                            <p>New Delhi</p>
                        </div>
                        <div className="venueReview">
                            <span className="star"> <StarHalf /> 4.3 </span>
                            <p>6 Reviews</p>
                        </div>
                        <div className="venuePrices">
                            <p> $2000 </p> 
                        </div>
                        
                    </div>
                    {/* <hr style={{ width:'90%', margin:'auto', padding:'0rem', backgroundColor:'black' }}/> */}
                    <hr className="hr" style={{marginTop:'1rem', borderTop:" 1px dashed #4a4a4a"}} />
                        <div className="venuePrice">
                            <p> $2000 </p> 
                        </div>
                </div>
                <div className="venueCard">
                    <div className="venueImage">
                        <img src="https://www.brides.com/thmb/0sOaZ3sx3JI5fdvHe3Gej0x813o=/3759x2114/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__brides__proteus__585acc1e54421cf15eb0e0b8__169-6741927d00934d1d942b4e2e8c2ab990.jpeg" alt="missing" />
                        <div className="venueImageTop">
                        <Tooltip  title={
                        
                        <>
                        <h2>About Vendor</h2>
                        <p style={{color:'white'}}>lorem10 lorem10 lorem10 lorem10 lorem10 lorem10</p>
                        <p style={{color:'white'}}>lorem10 lorem10 lorem10 lorem10 lorem10 lorem10</p>
                        </>
                        } 
                        placement="right" arrow>
                        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                        <p ><Grain /></p>
                            <h6 className="h6">HandPicked</h6>
                        </div>
                        </Tooltip>
                        
                        </div>
                        <div className="venueImageright">
                        <Tooltip  title={
                      
                        <>
                        <h2>About Vendor</h2>
                        <p style={{color:'white'}}>lorem10 lorem10 lorem10</p>
                        </>
                        } 
                        placement="right" arrow>
                        <p><Grain /></p>
                        </Tooltip>
                            
                            
                        </div>
                        
                    </div>

                    <div className="venueContaint">
                        <div className="venuehead">
                            <h3>Western Inn</h3>
                            <p>New Delhi</p>
                        </div>
                        <div className="venueReview">
                            <span className="star"> <StarHalf /> 4.3 </span>
                            <p>6 Reviews</p>
                        </div>
                        <div className="venuePrices">
                            <p> $2000 </p> 
                        </div>
                        
                    </div>
                    {/* <hr style={{ width:'90%', margin:'auto', padding:'0rem', backgroundColor:'black' }}/> */}
                    <hr className="hr" style={{marginTop:'1rem', borderTop:" 1px dashed #4a4a4a"}} />
                        <div className="venuePrice">
                            <p> $2000 </p> 
                        </div>
                </div>
                <div className="venueCard">
                    <div className="venueImage">
                        <img src="https://www.brides.com/thmb/0sOaZ3sx3JI5fdvHe3Gej0x813o=/3759x2114/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__brides__proteus__585acc1e54421cf15eb0e0b8__169-6741927d00934d1d942b4e2e8c2ab990.jpeg" alt="missing" />
                        <div className="venueImageTop">
                        <Tooltip  title={
                        
                        <>
                        <h2>About Vendor</h2>
                        <p style={{color:'white'}}>lorem10 lorem10 lorem10 lorem10 lorem10 lorem10</p>
                        <p style={{color:'white'}}>lorem10 lorem10 lorem10 lorem10 lorem10 lorem10</p>
                        </>
                        } 
                        placement="right" arrow>
                        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                        <p ><Grain /></p>
                            <h6 className="h6">HandPicked</h6>
                        </div>
                        </Tooltip>
                        
                        </div>
                        <div className="venueImageright">
                        <Tooltip  title={
                      
                        <>
                        <h2>About Vendor</h2>
                        <p style={{color:'white'}}>lorem10 lorem10 lorem10</p>
                        </>
                        } 
                        placement="right" arrow>
                        <p><Grain /></p>
                        </Tooltip>
                            
                            
                        </div>
                        
                    </div>

                    <div className="venueContaint">
                        <div className="venuehead">
                            <h3>Western Inn</h3>
                            <p>New Delhi</p>
                        </div>
                        <div className="venueReview">
                            <span className="star"> <StarHalf /> 4.3 </span>
                            <p>6 Reviews</p>
                        </div>
                        <div className="venuePrices">
                            <p> $2000 </p> 
                        </div>
                        
                    </div>
                    {/* <hr style={{ width:'90%', margin:'auto', padding:'0rem', backgroundColor:'black' }}/> */}
                    <hr className="hr" style={{marginTop:'1rem', borderTop:" 1px dashed #4a4a4a"}} />
                        <div className="venuePrice">
                            <p> $2000 </p> 
                        </div>
                </div>

               
            </div>
           

        </div>
    )
}

export default Venues
