import styled from 'styled-components';
import { pallete } from '../../utils/colors'

export const LinkButton= styled.button`
    border: none;
    outline: none;
    color: ${pallete.font_color};
    background-color: transparent;
    font-size: 14px;
    letter-spacing: 0.5px;
    font-weight: bold;
    font-family: 'Lato';
    margin: 10px;
    cursor: pointer;
    padding: 5px;
    text-transform: uppercase;
    &:hover{
        transition: 0.5s;
        color: ${pallete.red_primary};
    }
`;

export const Nav = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: fixed;
    top: 0px;
    left: 0px;
    padding-left: 50px;
    height: 70px;
    width: 100vw;
    background-color: ${pallete.grey_medium};
`

export const LogoBox = styled.div`
        margin: 20px;
        height: 42px;
        width: 35px;
        position: relative;
`

export const LogoInsideBox = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 3px;
    right: 3px;
    width: 30px;
    height: 25px;
    border-radius: 10px;
    background-color: ${pallete.font_color};
`
export const InsideBox = styled.div`
    width: 18px;
    height: 12px;
    border-radius: 4px;
    background-color: ${pallete.grey_medium};
`
export const Ball = styled.div`
    height: 7px;
    width: 7px;
    border-radius: 50%;
    background-color: ${pallete.red_primary};
    position: absolute;
    bottom: 3px;
    left: 0px;
`
export const Logo = ()=>{
    return <LogoBox>
        <LogoInsideBox><InsideBox/></LogoInsideBox>
        <Ball/>
    </LogoBox>
}
