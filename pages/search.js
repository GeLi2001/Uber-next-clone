import React from 'react'
import tw from 'tailwind-styled-components'
const search = () => {
    return (
        <Wrapper>
            <ButttonContainer>
                <BackButton src = 'https://image.shutterstock.com/z/stock-vector-user-interface-ui-ux-back-button-icon-1414395617.jpg'/>
            </ButttonContainer>
            <InputContainer>
            <FromToIcons>
                <Circle src = 'https://image.shutterstock.com/z/stock-vector-user-interface-ui-ux-back-button-icon-1414395617.jpg'/>
                <Line src = 'https://image.shutterstock.com/z/stock-vector-user-interface-ui-ux-back-button-icon-1414395617.jpg'/>
                <Square src = 'https://image.shutterstock.com/z/stock-vector-user-interface-ui-ux-back-button-icon-1414395617.jpg'/>
            </FromToIcons>
            <InputBoxes>
                <Input placeholder = 'Enter pickup location'/>
                <Input placeholder = 'Where to?'/>

            </InputBoxes>
            <Plus src = 'https://image.shutterstock.com/z/stock-vector-user-interface-ui-ux-back-button-icon-1414395617.jpg'/>
            </InputContainer>
            <SavedPlace>
                Saved Places
            </SavedPlace>
        </Wrapper>
    )
}

export default search
const SavedPlace = tw.div`
bg-white mt-2 px-2 py-3
`
const Plus = tw.img`
h-10 flex bg-gray-200 rounded-full 
`

const Wrapper = tw.div`
bg-gray-200 h-screen 
`
const ButttonContainer = tw.div`
bg-white px-4
`
const BackButton = tw.img`
h-10

`
const InputContainer = tw.div`
bg-white flex items-center
`
const FromToIcons = tw.div`

`
const Circle = tw.img`
h-10 px-4
`
const Line = tw.img`
h-10  px-4
`
const Square = tw.img`
h-10 px-4
`
const InputBoxes = tw.div`
flex flex-col flex-1 
`
const Input = tw.input`
h-10 bg-gray-200 px-4 my-2 rounded-lg p-2 outline-none border-none
`