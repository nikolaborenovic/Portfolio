import './works.style.css'
import ItemImg from '../../assets/candle.jpg'
import PaintingImg from '../../assets/painting.jpg'
import UXUIimg from '../../assets/uxui.jpg'
import PacketImg from '../../assets/package1.jpg'
import PacketTwoImg from '../../assets/package2.jpg'
import CreamImg from '../../assets/cream.jpg'

const Works = () => {
    return(
        <div className='works_holder'>
            <h1>WORKS</h1>
            <div className='works_navigation'>
                <span>ALL</span>
                <span>Linux</span>
                <span>HTML & CSS</span>
                <span>React JS</span>
                <span>Node JS</span>
            </div>
            <div className='items_holder'>
                <div className='item'>
                    <img src={ItemImg}/>
                    <p className='item_paragraph'>Candle</p>
                    <p className='bottom_item_parageraph'>Creative Candle Light</p>
                </div>
                <div className='item'>
                    <img src={PaintingImg}/>
                    <p className='item_paragraph'>Painting</p>
                    <p className='bottom_item_parageraph'>Creative Wall Painting</p>
                </div>
                <div className='item'>
                    <img src={UXUIimg}/>
                    <p className='item_paragraph'>UX/UI Sample</p>
                    <p className='bottom_item_parageraph'>UX/UI sample mockup</p>
                </div>
                <div className='item'>
                    <img src={PacketImg}/>
                    <p className='item_paragraph'>Packet</p>
                    <p className='bottom_item_parageraph'>Packet design mockup</p>
                </div>
                <div className='item'>
                    <img src={PacketTwoImg}/>
                    <p className='item_paragraph'>Packet</p>
                    <p className='bottom_item_parageraph'>Packet design mockup</p>
                </div>
                <div className='item'>
                    <img src={CreamImg}/>
                    <p className='item_paragraph'>Cream</p>
                    <p className='bottom_item_parageraph'>Cream design mockup</p>
                </div>
            </div>
        </div>
    )
}

export default Works;