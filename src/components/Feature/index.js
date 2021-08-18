import React from 'react'
import { FeatureContainer, FeatureButton }
from './FeatureElements'

const Feature = () => {
    return (
        <FeatureContainer>
            <h1>New Seasonal Drink</h1>
            <p>Oreo blended beverage with milk 
                and coffee topped with whip cream 
            </p>
            <FeatureButton>Order Now</FeatureButton>
        </FeatureContainer>
    )
}

export default Feature
