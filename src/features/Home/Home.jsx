import './home.style.css'
import profilePhoto from "../../assets/profile.jpg"
import SocialNetwork from './components/SocialNetwork';

const Home = () => {
    return(
        <div className='profile_card'>
            <img className='profile_image' src={profilePhoto}/>
            <h1>Hi, I am <span>Nikola Borenovic</span></h1>
            <p>I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more and more interactive with web animations.</p>
            <SocialNetwork/>
        </div>
    )
}

export default Home;