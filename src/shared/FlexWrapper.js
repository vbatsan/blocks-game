import styled from 'styled-components';

const FlexWrapper = styled.div`
    display: flex;
    justify-content: ${({justify}) => justify ? justify : 'start'};
    align-items: ${({align}) => align ? align : 'start'};
    flex-direction: ${({direction}) => direction ? direction : "row"};
    flex: ${({flex}) => flex}
`

export default FlexWrapper