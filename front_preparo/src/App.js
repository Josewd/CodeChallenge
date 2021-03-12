
import './App.css';
import NavBar from './components/NavBar';
import { Title, Container } from './components/BoxLogin';
import { ButtonContainer, PrimaryButton, SecondaryButton } from './components/Buttons';
import  {MainContainer } from './components/MainBox'
import { TextInput, TextInputContainer } from './components/TextInput';
import { DoubtContainerQuestion, 
         Footer, 
         IconBox, 
         IconsContainer, 
         InfoContainer, 
         InstagramBox, 
         FacebookBox,
        LinkButtonFooter} from './components/Footer/styled-components';
import { Logo } from './components/Footer/logo';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

function App() {
  const menus = ['entrar', 'cadastre-se', 'empresa', 'sobre nós', 'explorar']
  return (
    <>
    <MainContainer>
  <NavBar menus={menus}/>
  <Container>
    <Title>LOGIN</Title>
    <TextInputContainer>
      <TextInput
        placeholder='email'/>
    </TextInputContainer>
    <TextInputContainer>
      <TextInput
        placeholder='senha'
        type='password'/>
    </TextInputContainer>
    <ButtonContainer><PrimaryButton>Entrar</PrimaryButton></ButtonContainer>
    <ButtonContainer>
      <SecondaryButton>recuperar senha</SecondaryButton>
      <SecondaryButton>cadastrar</SecondaryButton>
      </ButtonContainer>
  </Container>
  </MainContainer>
  <Footer>
    <DoubtContainerQuestion/>
    <InfoContainer>
      <Logo/>
      <IconsContainer>
        <IconBox><LinkedInIcon fontSize='inherit' color='inherit'/></IconBox>
        <InstagramBox><InstagramIcon fontSize='inherit' color='inherit'/></InstagramBox>
        <FacebookBox><FacebookIcon fontSize='inherit' color='inherit'/></FacebookBox>
      </IconsContainer>
        <LinkButtonFooter>Sobre nos</LinkButtonFooter>
        <LinkButtonFooter>Para empresas</LinkButtonFooter>
        <LinkButtonFooter><em>preparando voce para o futuro</em></LinkButtonFooter>

    </InfoContainer>
  </Footer>
  </>
  );
}

export default App;
