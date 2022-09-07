import React from 'react'
import CollectionCard from './CollectionCard'
import './PunkList.css'
const PunkList = ({ punkListData, setSelectedPunk }) => {
    console.log(punkListData)
    return (
        <section className='punkList' >{
            punkListData.map((punk) => {
                return (
                    <div key={punk.token_id} onClick={() => setSelectedPunk(punk.token_id)} >
                        <CollectionCard id={punk.token_id} name={punk.name} traits={punk.traits} image={punk.image_original_url} />
                    </div>
                )
            })
        }</section>
    )
}

export default PunkList