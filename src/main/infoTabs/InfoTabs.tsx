import StyledInfoTabs from "../styled/styledInfoTabs/StyledInfoTabs";

const InfoTabs = ()=>{
    return(
        <StyledInfoTabs>
            <div className="tab chosen">Условия</div>
            <div className="tab">Документы</div>
            <div className="tab mobile">Возможности</div>
            <div className="tab mobile">Важно</div>
            <div className="tab mobile">Типовые условия</div>
        </StyledInfoTabs>
    )
}

export default InfoTabs;