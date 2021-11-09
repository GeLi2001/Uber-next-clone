import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import tw from 'tailwind-styled-components'
import Map from './components/Map.js'
import Link from 'next/link'
export default function Home() {
  return (
    <Wrapper>
      <Map /> 
      <ActionItems>
         <Header>
           <Uberlogo src = 'https://seekvectorlogo.net/wp-content/uploads/2019/07/uber-technologies-inc-vector-logo.png'></Uberlogo>
          <Profile>
             <Name>Ge(Donny) Li</Name>
             <Userimage src ='https://seekvectorlogo.net/wp-content/uploads/2019/07/uber-technologies-inc-vector-logo.png' />
          </Profile>



         </Header>
        <ActionButtons>
          <Link href = '/search'>
          <ActionButton >
            <ActionButtonImage src  = 'https://i.ibb.co/cyvcpfF/uberx.png'/>
            Ride</ActionButton>
            </Link>
          <ActionButton>
          <ActionButtonImage src  = 'https://i.ibb.co/n776JLm/bike.png'/>
            Wheels</ActionButton>
          <ActionButton>
          <ActionButtonImage src  = 'https://i.ibb.co/5RjchBg/uberschedule.png'/>
          Reserve</ActionButton>

        </ActionButtons>
        <InputButton>
        Where to?
        </InputButton>
      </ActionItems>
    </Wrapper>
  )
}
const InputButton =tw.div`
h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8
`
const ActionButtonImage = tw.img`
h-3/5
`
const ActionButton = tw.div`
flex bg-gray-200 flex-1 m-1 h-32 items-center flex-col justify-center
rounded-lg
transform hover:scale-105 transition text-xl
`
const ActionButtons = tw.div`
flex 
`
const Wrapper = tw.div`
flex flex-col  h-screen
`
const ActionItems = tw.div`
flex-1 p-5

` 
const Header = tw.div`
flex  items-center justify-between
`
const Profile = tw.div` 
flex items-center 
`
const Uberlogo = tw.img`
h-10
`
const Name = tw.div`
 

 `
const Userimage = tw.img`
h-12 w-12 rounded-full
`