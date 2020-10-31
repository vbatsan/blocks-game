import styled from 'styled-components';

const Input = styled.input`
    background: none;
    border: ${({isError}) => isError ? '1px solid red': '1px solid black'};
    padding: 15px;
    width: 200px;
    font-size: 18px;
    border-radius: 5px;
    outline: none;
    margin: 0 10px
`

export default Input