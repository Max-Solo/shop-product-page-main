import { Navbar } from './components/navbar/Navbar';
import { Gallery } from './components/gallery/Gallery';
import { Information } from './components/information/Information';
import { Basket } from './components/basket/Basket';
import {MainPageStage} from './context/mainPage/MainPageStage'

function App() {
    return (
		<MainPageStage>
        <main className='main'>
            <div className='container'>
                <Navbar />
                {/* <div className='body'>
                    <Gallery />
                    <Information />
                </div> */}
                <Basket />
            </div>
        </main>
		</MainPageStage>
    );
}

export default App;
