import './contact.style.css'
import PhoneImg from '../../assets/contactPhone.png'
import EmailImg from '../../assets/email.png'
import LocationImg from '../../assets/location.png'


const Contact = () => {
    return(
        <div className='contacts_holder'>
            <h1>CONTACT US</h1>
            <div className='contacts_main'>
                <div className='contacts_list'>
                    <div className='contacts_list_header'>
                        <h3>Contact Information</h3>
                        <p>Please use provided contacts to reach out to us regarding any questions or inquieries. We will be happe to answer your questions and set up a meeting with you.</p>
                    </div>
                    <div className='contact_option'>
                        <img src={PhoneImg}/>
                        <div>
                            <p className='phone_email_location_header'>Contact on phone</p>
                            <div className='phone_email_location'>
                                <p>+012-3456-7891</p>
                                <p>+012-3456-7891</p>
                            </div>
                        </div>
                    </div>
                    <div className='contact_option'>
                        <img src={EmailImg}/>
                        <div>
                            <p className='phone_email_location_header'>Contact on email</p>
                            <div className='phone_email_location'>
                                <p>demomail@demomail.com</p>
                                <p>demomail2@demomail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className='contact_option'>
                        <img src={LocationImg}/>
                        <div>
                            <p className='phone_email_location_header'>Contact address</p>
                            <div className='phone_email_location'>
                                <p>121 Example street, Demo, Demo</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='contacts_form'>
                    <div className='contact_form_component'>
                        <p>Name</p>
                        <input placeholder='Enter name..'/>
                    </div>
                    <div className='contact_form_component'>
                        <p>Email</p>
                        <input placeholder='Enter email..'/>
                    </div>
                    <div className='contact_form_component'>
                        <p>Subject</p>
                        <input placeholder='Enter subject..'/>
                    </div>
                    <div className='contact_form_component'>
                        <p>Message</p>
                        <textarea className='message_input' placeholder='Enter your message..'></textarea>
                    </div>
                    <button>Send email</button>
                </div>
            </div>
        </div>
    )
}

export default Contact;