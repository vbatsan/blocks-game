import styled from  'styled-components';

const FieldWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 40px 0;
    width: ${({blocks}) => Math.sqrt(blocks)  * 50}px
`

export default FieldWrapper