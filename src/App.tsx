import './App.css'
import { Footer } from './components/footer'
import { Header } from './components/header'
import { ShoeCard } from './components/ShoeCard'

function App() {
  return (
    <>
    <Header/>
    <ShoeCard
    model='Air Jordan 1'
    brand='Nike'
    isLimitedEdition = {true}
    releaseYear= {1985}
    sports={['kosárlabda']}
    />
    <ShoeCard
    model='Stan Smith'
    brand='Adidas'
    isLimitedEdition = {false}
    releaseYear= {1971}
    sports={['tenisz']}
    />
    <ShoeCard
    model='Chuck Taylor All Star'
    brand='Converse'
    isLimitedEdition = {false}
    releaseYear= {1917}
    sports={['kosárlabda', 'divat']}
    />
    <ShoeCard
    model='Yeezy Boost 350'
    brand='Adidas'
    isLimitedEdition = {true}
    releaseYear= {2015}
    sports={['lifestyle']}
    />
    <ShoeCard
    model='Air Max 1'
    brand='Nike'
    isLimitedEdition = {false}
    releaseYear= {1987}
    sports={['futás', 'streetwear']}
    />
    <ShoeCard
    model='Puma Suede'
    brand='Puma'
    isLimitedEdition = {false}
    releaseYear= {1968}
    sports={['breaktánc', 'divat']}
    />
    <ShoeCard
    model='Reebok Pump'
    brand='Reebok'
    isLimitedEdition = {true}
    releaseYear= {1989}
    sports={['kosárlabda']}
    />
    <Footer/>
    </>
  )
}

export default App
