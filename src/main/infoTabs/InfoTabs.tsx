import StyledInfoTabs from "../styled/styledInfoTabs/StyledInfoTabs";

const InfoTabs = ()=>{
    return(
        <StyledInfoTabs>
            <div className="tab chosen">Условия</div>
            <div className="tab">Документы</div>
            <div className="tab">Возможности</div>
            <div className="tab">Важно</div>
            <div className="tab">Типовые условия</div>
        </StyledInfoTabs>
    )
}

export default InfoTabs;