import React from 'react'
import DashboardSection from '../../DashboardSection'
import MyServices from './MyServices'
import { AuthUserContext } from '../../../utils/Session';


const Home = (props) => {
    return(
        <>
        
        <DashboardSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity=""
        title="Dashboard"
        subtitle="Welcome"
        />
        
        <MyServices
        items={[
            {
                image: "https://res.cloudinary.com/dexdumfqy/image/upload/v1598156485/mack.network/Firm-Central-Cloud_kbhhxm.png",
                alt: "my cloud drive",
                title: "My Cloud",
                text: "Go to my cloud drive",
                link: "https://cloud.mackintosh.network",
            },
            {
                image: "https://res.cloudinary.com/dexdumfqy/image/upload/v1598156489/mack.network/netflix-tv-screen-sm_h3a4p7.jpg",
                alt: "my media hub",
                title: "My Media Hub",
                text: "Go to Media Hub",
                link: "https://watch.mackintosh.network",
            },
        ]} />




</>
    )
}


export default Home