import React from 'react'
import Layout from '../utils/layout'
import FaqSection from '../components/FaqSection'
import HeroSection2 from '../components/HeroSection2'

function FAQ(props) {
    return(
        <Layout>
                    <HeroSection2
          textColor="light"
          bgImage="https://res.cloudinary.com/dexdumfqy/image/upload/v1596089148/mack.network/crisoforo-gaspar-hernandez-lMX5vchHvdo-unsplash-oaxaca_vbqo6r.jpg"
          bgImageOpacity="1"
          size="lg"
        />
            
            <FaqSection
                bg="light"
                textColor="dark"
                size="md"
                title="FAQ"
                subtitle="Questions Answered"



/>


        </Layout>
    )
}

export default FAQ