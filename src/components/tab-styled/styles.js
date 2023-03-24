import styled from 'styled-components';


const StyledTabStyled = styled.div`
    border: 0 1px solid black 0 0;
    padding: 15px 0;
    cursor: pointer;
    background-color: ${({isActive})=>isActive ? 'red' : 'transparent'};


`;

export {StyledTabStyled}