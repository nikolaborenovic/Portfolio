import './works.style.css'
import ItemImg from '../../assets/candle.jpg'
import PaintingImg from '../../assets/painting.jpg'
import UXUIimg from '../../assets/uxui.jpg'
import PacketImg from '../../assets/package1.jpg'
import PacketTwoImg from '../../assets/package2.jpg'
import CreamImg from '../../assets/cream.jpg'
import { useState } from 'react'

const Works = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [filter, setFilter] = useState('all');
    const [data, setData] = useState([
        { id: 1, title: 'Candle', description: 'Creative Candle Light', image: ItemImg, category: 'ux_design' },
        { id: 2, title: 'Paint', description: 'Creative Wall Painting', image: PaintingImg, category: 'html' },
        { id: 3, title: 'UX/UI sample', description: 'UX/UI sample mockup', image: UXUIimg, category: 'react' },
        { id: 4, title: 'Packet', description: 'Packet design mockup', image: PacketImg, category: 'node' },
        { id: 5, title: 'Packet', description: 'Packet design mockup', image: PacketTwoImg, category: 'ux_design' },
        { id: 6, title: 'Cream', description: 'Cream design mockup', image: CreamImg, category: 'linux_design' },
      ])

    const getFilteredData = () => {
        // return filter === 'all' ? data : data.filter(item => item.category === filter)
        return data
        .filter((item) => (filter === 'all' || item.category === filter))
        .filter(item => item.title.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase()))
    }
    
    return(
        <div className='works_holder'>
            <h1>WORKS</h1>
            <input 
            type='text'
            placeholder='search'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className='works_navigation'>
                <span onClick={() => setFilter('all')} className={filter === 'all' && 'active'}>ALL</span>
                <span onClick={() => setFilter('linux_design')} className={filter === 'linux_design' && 'active'}>Linux</span>
                <span onClick={() => setFilter('html')} className={filter === 'html' && 'active'}>HTML & CSS</span>
                <span onClick={() => setFilter('react')} className={filter === 'react' && 'active'}>React JS</span>
                <span onClick={() => setFilter('node')} className={filter === 'node' && 'active'}>Node JS</span>
            </div>
            <div className='items_holder'>
                {getFilteredData().map((item) => {
                    return (
                        <div className='item'>
                            <img src={item.image}/>
                            <p className='item_paragraph'>{item.title}</p>
                            <p className='bottom_item_parageraph'>{item.description}</p>
                        </div> 
                    )
                })}
            </div>
        </div>
    )
}

export default Works;