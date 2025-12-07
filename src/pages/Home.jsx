import React from 'react'
import HeroBanner from '../components/HeroBanner'
import CustomerFeedback from '../components/CustomerFeedback'
import WhyChooseUs from '../components/WhyChooseUs'
import FactoryWorkflow from '../components/FactoryWorkflow'



export default function Home() {
    return (
        <div>
            <HeroBanner />
            <CustomerFeedback />
            <WhyChooseUs />
            <FactoryWorkflow />
        </div>
    )
}
