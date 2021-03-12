import styled from 'styled-components';
import { pallete } from '../../utils/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 45%;
  height: 350px;
  border-radius: 35px;
  background-color:  white;
`

export const Title = styled.p`
    font-family: 'Lato';
    font-weight: lighter; 
    letter-spacing: 1px;
    font-size: 18px;
    color : ${pallete.font_color};
`