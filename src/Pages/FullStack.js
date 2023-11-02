import React from 'react' 
import FutureSkills from '../Components/FullStack/FutureSkills/FutureSkills'
import SelectBatch from '../Components/FullStack/SelectBatch/SelectBatch'
import Languages from '../Components/FullStack/Languages/Languages'
import Journey from '../Components/FullStack/Journey/Journey'
import AfterFinish from '../Components/FullStack/AfterFinish/AfterFinish'

const FullStack = () =>{
    return(
        <>
            <FutureSkills />
            <SelectBatch />
            <Languages />
            <Journey />
            <AfterFinish />
        </>
    )
}

export default FullStack