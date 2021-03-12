import styled from "styled-components"
import { pallete } from "../../utils/colors"

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
    background-color: white;
`
export const InsideBox = styled.div`
    width: 18px;
    height: 12px;
    border-radius: 4px;
    background-color: ${pallete.footer_grey};
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
export const LogoBox = styled.div`
        margin: 0px;
        height: 42px;
        width: 35px;
        position: relative;
`
export const LogoTitle = styled.p`
    font-family: 'Orbitron';
    margin-top: -10px;
    font-size: 25px;
    color: white;
`
export const LogoContainer  =styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   
`

export const Logo = ()=>{
    return <LogoContainer>
    <LogoBox>
        <LogoInsideBox><InsideBox/></LogoInsideBox>
        <Ball/>
    </LogoBox>
        <LogoTitle>preparo</LogoTitle>
    </LogoContainer>
}