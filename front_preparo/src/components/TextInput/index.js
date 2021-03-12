import styled from 'styled-components';
import { pallete } from '../../utils/colors';

export const TextInput = styled.input`
    outline: none;
    border: none;
    background-color: ${pallete.grey_light};
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 1px;
    width: 70%;
    padding-left: 20px;
    border-radius: 10px;
    height: 35px;
`;

export const TextInputContainer = styled.div`
    width: 90%;
    height: max-content;
    padding: 2px 0px;
    margin-bottom: 30px;
    border-radius: 10px;
    background-color: ${pallete.grey_light};

`
