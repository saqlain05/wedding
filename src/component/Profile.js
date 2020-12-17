import React from 'react'
import '../style/Profile.css'
import Grain from '@material-ui/icons/Grain';
import { Tooltip } from '@material-ui/core';
import StarHalf from '@material-ui/icons/StarHalf';


import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
  } from "@chakra-ui/react"


const Profile = () => {
    return (
        <>
            <div className="mainDiv">
                <div className="profileFirst">
                    <div className="bigImage">
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
                    </div>

                    <div className="det">
                        <div className="firstdet">
                        <h2>Mallu Farms</h2>
                        <p> <span>Delhi NCR</span> (View on Map) </p> 
                        <p>
                        Mallu Farm, Ansal Villas, New Delhi, Delhi, India
                        </p> 
                        <h5>Contact</h5>
                        </div>
                        <div className="seconddet">
                            <h2> <StarHalf /> 4.9 </h2>
                            <p>55 Reviews</p>
                        </div>

                    </div>

                    <div className="portfolioss">
                        <h3>Portfolio (36) </h3>
                        <div className="portfoliImg">
                        <img alt="missing" src="https://www.brides.com/thmb/0sOaZ3sx3JI5fdvHe3Gej0x813o=/3759x2114/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__brides__proteus__585acc1e54421cf15eb0e0b8__169-6741927d00934d1d942b4e2e8c2ab990.jpeg" />
                        <img alt="missing" src="https://www.brides.com/thmb/0sOaZ3sx3JI5fdvHe3Gej0x813o=/3759x2114/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__brides__proteus__585acc1e54421cf15eb0e0b8__169-6741927d00934d1d942b4e2e8c2ab990.jpeg" />
                        <img alt="missing" src="https://www.brides.com/thmb/0sOaZ3sx3JI5fdvHe3Gej0x813o=/3759x2114/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__brides__proteus__585acc1e54421cf15eb0e0b8__169-6741927d00934d1d942b4e2e8c2ab990.jpeg" />
                        <img alt="missing" src="https://www.brides.com/thmb/0sOaZ3sx3JI5fdvHe3Gej0x813o=/3759x2114/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__brides__proteus__585acc1e54421cf15eb0e0b8__169-6741927d00934d1d942b4e2e8c2ab990.jpeg" />
                        <img alt="missing" src="https://www.brides.com/thmb/0sOaZ3sx3JI5fdvHe3Gej0x813o=/3759x2114/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__brides__proteus__585acc1e54421cf15eb0e0b8__169-6741927d00934d1d942b4e2e8c2ab990.jpeg" />
                        <img alt="missing" src="https://www.brides.com/thmb/0sOaZ3sx3JI5fdvHe3Gej0x813o=/3759x2114/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__brides__proteus__585acc1e54421cf15eb0e0b8__169-6741927d00934d1d942b4e2e8c2ab990.jpeg" />
                        <img alt="missing" src="https://www.brides.com/thmb/0sOaZ3sx3JI5fdvHe3Gej0x813o=/3759x2114/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__brides__proteus__585acc1e54421cf15eb0e0b8__169-6741927d00934d1d942b4e2e8c2ab990.jpeg" />
                        <img alt="missing" src="https://www.brides.com/thmb/0sOaZ3sx3JI5fdvHe3Gej0x813o=/3759x2114/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__brides__proteus__585acc1e54421cf15eb0e0b8__169-6741927d00934d1d942b4e2e8c2ab990.jpeg" />
                        <img alt="missing" src="https://www.brides.com/thmb/0sOaZ3sx3JI5fdvHe3Gej0x813o=/3759x2114/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__brides__proteus__585acc1e54421cf15eb0e0b8__169-6741927d00934d1d942b4e2e8c2ab990.jpeg" />
                        <img alt="missing" src="https://www.brides.com/thmb/0sOaZ3sx3JI5fdvHe3Gej0x813o=/3759x2114/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__brides__proteus__585acc1e54421cf15eb0e0b8__169-6741927d00934d1d942b4e2e8c2ab990.jpeg" />
                        <img alt="missing" src="https://www.brides.com/thmb/0sOaZ3sx3JI5fdvHe3Gej0x813o=/3759x2114/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__brides__proteus__585acc1e54421cf15eb0e0b8__169-6741927d00934d1d942b4e2e8c2ab990.jpeg" />
                        <img alt="missing" src="https://www.brides.com/thmb/0sOaZ3sx3JI5fdvHe3Gej0x813o=/3759x2114/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__brides__proteus__585acc1e54421cf15eb0e0b8__169-6741927d00934d1d942b4e2e8c2ab990.jpeg" />

                        
                        </div>
                        <div className="button">
                        <button>VIEW MORE</button>
                        </div>
                    </div>
                    
                </div>
                <div className="profileSec">
                        <div className="profileSecFIrst">
                            <img src="https://images.wedmegood.com/images/book-venue-shape-5.svg" />
                            <p><span>WedMeGood</span> has a best price gurantee at this venue</p>
                            <p>Call +918010858858</p>
                            
                            <h4>View our Venue Booking Service</h4>
                        </div>
                        
                        <div className="profileSecSec">
                                <Accordion allowToggle >
                                    <AccordionItem>
                                            <AccordionButton className="acco">
                                                <Box flex="1" textAlign="left" fontSize="1rem" fontWeight="700" color="#4a4a4a" padding="1rem">
                                                    Starting Price
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        <AccordionPanel pb={4} mt={5} className="accop"  padding="1rem">
                                        <h4>Starting Price Of Decor</h4>
                                        <p>3500</p>
                                        </AccordionPanel>
                                    </AccordionItem>
                            </Accordion>
                            <div className="price">
                            <div className="prices"><h3>$ 1400</h3> <p>Per Plate <span>(taxes extra)</span></p></div>
                                
                                <span>Veg Price</span>
                                
                            </div>
                            <div className="price">
                            <div className="prices"><h3>$ 1400</h3> <p>Per Plate <span>(taxes extra)</span></p></div>
                                
                                <span>Non Veg Price</span>
                                
                            </div>
                        </div>

                        <div className="profileThird">
                            <h3>
                                CONTACT
                            </h3>
                            <form>
                                <input placeholder="full Name" type="text" />
                                <input placeholder="Mobile" type="number" />
                                <input placeholder="Email " type="email" />
                                <input placeholder="function Date" type="text" />
                                <input placeholder="No of Guest" type="number" />
                                <input placeholder="No of Room" type="number" />
                                <input placeholder="Fuction Type" type="text" />
                                <input placeholder="Function Time" type="text" />

                                <button>Check Availability & Prices</button>
                            </form>
                        </div>
                </div>

            </div>
        </>
    )
}

export default Profile
