import { ReactComponent as MyLocationIcon } from '../../assets/Location.svg';
import styled from 'styled-components';

const StyledLocation = styled.div`
  font-size: 14px;
  line-height: 17px;
`

const Location = () =>{
    return(
        <StyledLocation>
            <MyLocationIcon/>
            Усть-Каменогорск
        </StyledLocation>
    )
}

export default  Location;