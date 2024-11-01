import './about.style.css'
import AboutImg from '../../assets/aboutimg.jpg'

const About = () => {
    return(
        <div className='about_holder'>
            <h1>ABOUT ME</h1>
            <div className='about_content'>
                <img src={AboutImg}/>
                <div className='about_info'>
                    <h3>Hi, I am <span className='about_name'>Nikola Borenovic</span></h3>
                    <ul>
                        <li><span className='info_list'>First name</span>:Nikola</li>
                        <li><span className='info_list'>Last name</span>:Borenovic</li>
                        <li><span className='info_list'>Age</span>:27</li>
                        <li><span className='info_list'>Nationality</span>:Serb</li>
                        <li><span className='info_list'>Address</span>:Garsije Lorke 9</li>
                        <li><span className='info_list'>Freelance</span>:Available</li>
                    </ul>
                    <button className='resume_button'>DOWNLOAD RESUME</button>
                </div>
            </div>
        </div>
    )
}

export default About;