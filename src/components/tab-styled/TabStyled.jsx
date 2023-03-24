import { StyledTabStyled } from "./styles"

const TabStyled = ({text, isActive, setValue, index}) => {
    return <StyledTabStyled onClick={()=>setValue(index)} isActive={isActive}>{text}</StyledTabStyled>
}
export default TabStyled