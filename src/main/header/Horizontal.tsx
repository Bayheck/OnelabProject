import StyledHorizontal from "../styled/styledHeader/StyledHorizontal";

const Horizontal = () =>{
    return(
        <StyledHorizontal>
            <li className="current">
                Банк
            </li>
            <li>
                Маркет
            </li>
            <li>
                Mobile
            </li>
            <li>
                Путешествия
            </li>
            <li>
                Бизнес
            </li>
            <li>
                Club
            </li>
        </StyledHorizontal>
    )
}

export default Horizontal;