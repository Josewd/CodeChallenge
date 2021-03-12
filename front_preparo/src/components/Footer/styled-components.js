import styled from 'styled-components';
import { pallete }from '../../utils/colors'
import { LinkButton } from '../NavBar/styled-components';


export const Footer = styled.div`
    width: 100vw;
    height: 50vh;
    background-color: ${pallete.footer_grey};
    display: flex;
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    width: 40%;
    height: 100%;
    padding-right: 60px;
`

export const DoubtContainerQuestion = styled(InfoContainer)`
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 60%;
`

export const IconBox = styled.div`
    height: 30px;
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    margin: 3px;
    font-size: 40px;
    color: white;
    cursor: pointer;
    &:hover{
        transition: 0.5s;
        filter: opacity(70%);
    }
`
export const FacebookBox = styled(IconBox)`
    height: 30px;
    width: 30px;
    border-radius: 50%;
    overflow: hidden;
`
export const InstagramBox = styled(IconBox)`
    color: ${pallete.footer_grey};
    font-size: 25px;
    background-color: white;
`
export const IconsContainer = styled.div`
    display: flex;
    align-items: center;
    width: max-content;
    justify-content: center;
`

export const LinkButtonFooter = styled.button`
    font-family: 'Lato';
    border: none;
    outline: none;
    background-color: transparent;
    color: white;
    text-transform: capitalize;
    font-weight: normal;
    font-size: 16px;
    margin: 10px 0px;
`




