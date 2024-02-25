import React ,{useState,useEffect,useRef} from 'react'
import styled from 'styled-components'
import emailjs from '@emailjs/browser';
import SpaceAnimation from './Star'
const Contact = () => {
    const [isVisible1, setIsVisible1] = useState(false);
    const [formData, setFormData] = useState({
        from_name: '',
        from_email: '',
        from_phone:'',
        from_subject:'',
        message:'',
      })
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    const form = useRef();
    useEffect(() => {
        const handleScroll = () => {
          const scrollPosition = window.scrollY;
          const threshold = 1000; 
          setIsVisible1(scrollPosition > threshold && scrollPosition < 2000);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
      const sendEmail = (e) => {
        e.preventDefault();   
        emailjs
          .sendForm('service_93nofbn', 'template_0n6rets', form.current, {
            publicKey: 'p8ypLRlrAKz-mq9nm',
          })
          .then(
            () => {
              alert('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
          setFormData({
            from_name: '',
            from_email: '',
            from_phone:'',
            from_subject:'',
            message:'',
          })
      }
    return (
        <Container id='contact'>
            <Contactme>Contact <span>Me!</span></Contactme>
            <form ref={form} onSubmit={sendEmail}>
                <NameandEmail>
                    <Inputone type='text' placeholder='Full Name' name='from_name' value={formData.from_name} onChange={handleChange}  isVisible1={isVisible1}/>
                    <InputTwo type='text' placeholder='Email Address' name='from_email' value={formData.from_email} onChange={handleChange}  isVisible1={isVisible1}/>
                </NameandEmail>
                <NumberandEmail>
                    <InputThree type='text' placeholder='Mobile Number' name='from_phone' value={formData.from_phone} onChange={handleChange}  isVisible1={isVisible1}/>
                    <InputFour type='text' placeholder='Email Subject' name='from_e_subject' value={formData.from_subject} onChange={handleChange} isVisible1={isVisible1}/>
                </NumberandEmail>
                <YourMessege placeholder='Your Message' name='message' value={formData.message} onChange={handleChange}  isVisible1={isVisible1}/>
                <SubmitButton type='submit' value='send'>Submit</SubmitButton>
            </form>
            <SpaceAnimation/>
        </Container>
    )
}

export default Contact
const YourMessege = styled.textarea`
        transition: transform 3s ease-in;
        transform: ${(props) => (props.isVisible1 ? 'translateX(0)' : 'translateX(-800px)')};
        opacity: ${(props) => (props.isVisible1 ? '1' : '0')}; 
`
const Inputone = styled.input`
        transition: transform 1s ease-in;
        transform: ${(props) => (props.isVisible1 ? 'translateX(0)' : 'translateX(-800px)')};
        opacity: ${(props) => (props.isVisible1 ? '1' : '0')}; 
`
const InputTwo = styled.input`
        transition: transform 2s ease-in;
        transform: ${(props) => (props.isVisible1 ? 'translateX(0)' : 'translateX(800px)')};
        opacity: ${(props) => (props.isVisible1 ? '1' : '0')}; 
`
const InputThree = styled.input`
        transition: transform 2.15s ease-in;
        transform: ${(props) => (props.isVisible1 ? 'translateX(0)' : 'translateX(-800px)')};
        opacity: ${(props) => (props.isVisible1 ? '1' : '0')}; 
`
const InputFour = styled.input`
        transition: transform 3s ease-in;
        transform: ${(props) => (props.isVisible1 ? 'translateX(0)' : 'translateX(800px)')};
        opacity: ${(props) => (props.isVisible1 ? '1' : '0')}; 
`
const SubmitButton = styled.button`
font-size: 15px;
  width: 250px;
  height: 50px;
  border-radius: 4px;
  cursor: pointer;
  font-family: lato;
  color: #fff;
  background-color: transparent;
  -webkit-transition: 0.3s all ease-in;
  transition: 0.3s all ease-in;
  border: 3px solid #0073e9;
  &:hover{
    color: #14203d;
    -webkit-box-shadow: 0px 0px 20px 15px #3cc6d8;
  box-shadow: 0px 0px 30px 20px #3cc6d8;
  background-color: #3cc6d8;
  }
`
const NameandEmail = styled.div`
display: flex;
align-items: center;
width: 100%;
justify-content: space-between;
height: 50px;
@media  only screen  and (max-width:450px) {
    flex-direction: column;
    box-sizing: border-box;
    padding: 0 20px;
    height: 160px;
    }
input{
    @media  only screen  and (max-width:450px) {
        width: 90%;
        height: 50px;
    }
    &:focus{
        outline: none;
        border: #00eaff 3px solid;
        &::placeholder{
        color: #fff;
        opacity: 0.5;
        letter-spacing: 3px;
    }
    }
    color: #fff;
    caret-color: #fff;
    height: 100%;
    width: 45%;
    background: transparent;
    border-radius: 5px;
    border: solid 3px #0073e9;
    padding-left: 10px;
    &::placeholder{
        color: #fff;
    }
}
`
const NumberandEmail = styled.div`
display: flex;
align-items: center;
width: 100%;
justify-content: space-between;
height: 50px;
@media  only screen  and (max-width:450px) {
    flex-direction: column;
    box-sizing: border-box;
    padding: 0 20px;
    height: 160px;
    }
input{
    @media  only screen  and (max-width:450px) {
        width: 90%;
        height: 50px;
    }
    color: #fff;
    caret-color: #fff;
    height: 100%;
    width: 45%;
    background: transparent;
    border-radius: 5px;
    border: solid 3px #0073e9;
    padding-left: 10px;
    &:focus{
        border: #00eaff 3px solid;
        &::placeholder{
        color: #fff;
        opacity: 0.5;
        letter-spacing: 3px;
    }
            outline: none;
        }
    &::placeholder{
        color: #fff;
    }
}
`
const Contactme = styled.h1`
  color: #fff;
  font-size: 45px;
  letter-spacing: 2px;
  span{
    cursor: pointer;
    color: #3cc6d8;
    &:hover{
        color: #1834ef;
    }
  }
`
const Container = styled.div`
form{
    textarea{
        @media  only screen  and (max-width:450px) {
        width: 85%;
        }
        color: #fff;
        caret-color: #fff;
        height: 300px;
        border-radius: 5px;
        width: 100%;
        background-color: transparent;
        border: solid 3px #0073e9;
        box-sizing: border-box;
        padding-left: 10px;
        padding-top: 10px;
        &:focus{
            border: #00eaff 3px solid;
            outline: none;
            &::placeholder{
        color: #fff;
        opacity: 0.5;
        letter-spacing: 5px;
    }
        }
        &::placeholder{
            color: #fff;
        }
    }
    margin-top: 50px;
    width: 700px;
    @media  only screen  and (max-width:450px) {
        width: 400px;
        height: 800px;
    }
    height: 550px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    color:#fff;
    width: 100%;
    min-height: 100vh;
    box-sizing: border-box;
    margin: 0;
    padding: 0;

`