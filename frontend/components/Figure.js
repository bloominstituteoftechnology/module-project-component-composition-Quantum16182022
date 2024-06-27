import React from 'react'
import styled from 'styled-components'

const StyledFigure = styled.figure`
    max-width: 360%;

    figcaption {
        font-style: italic;
    }

`

export default function Figure({image, author, date }){

    return (
                
    <StyledFigure>
        <imag src={image}/>
        <figcaption>
        The photo of the Day by{author} on {date}
        </figcaption>

    </StyledFigure>
)
}