import React, { useEffect, useState } from 'react'
import instagramLogo from '../assets/owner/instagram.png'
import twitterLogo from '../assets/owner/twitter.png'
import moreIcon from '../assets/owner/more.png'
import './Main.css'
const Main = ({ selectedPunk, punkListData }) => {
    const [activePunk, setActivePunk] = useState(punkListData[0])

    useEffect(() => {
        setActivePunk(punkListData[selectedPunk])
    }, [punkListData, selectedPunk])

    return (
        <section className='main'>
            <div className="mainContent">
                <div className="punkHighlight">
                    <div className="punkContainer">
                        <img src={activePunk.image_original_url} className="selectedPunk" alt="" />
                    </div>
                </div>

                <div className="punkDetails" style={{ color: '#fff' }}>
                    <div className="punkName">
                        <div className="title">
                            {activePunk.name}
                        </div>
                        <span className='itemNumber'>.#{activePunk.token_id}</span>
                    </div>

                    <div className="owner">
                        <div className="ownerImageContainer">
                            <img src={activePunk.owner.profile_img_url} alt="" />
                        </div>
                        <div className="ownerDetails">
                            <div className="ownerNameAndHandle">
                                <div className="ownerAddress">{activePunk.owner.address}</div>
                                <div className="ownerHandle">@SyNK</div>
                            </div>
                            <div className="ownerLinks">
                                <div className="ownerLink">
                                    <img src={instagramLogo} alt="" />
                                </div>
                                <div className="ownerLink">
                                    <img src={twitterLogo} alt="" />
                                </div>
                                <div className="ownerLink">
                                    <img src={moreIcon} alt="" />
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section >
    )
}

export default Main