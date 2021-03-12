import styled from "styled-components"
import { pallete } from "../../utils/colors"

export const PrimaryButton = styled.button`
    width: 99%;
    outline: none;
    border: none;
    background-color: ${pallete.red_primary};
    color: white;
    text-align: center;
    border-radius: 12px;
    font-size: 14px;
    letter-spacing: 1px;
    text-transform: uppercase;
    height: 38px;
`

export const SecondaryButton = styled(PrimaryButton)`
    width: 50%;
    margin:0px 5px;
    height: 35px;
    font-size: 12px;
    background-color: ${pallete.grey_dark};
`

export const ButtonContainer = styled.div`
margin: 5px;
    display: flex;
    align-items: center;
    justify-content:center;
    width: 90%;
`