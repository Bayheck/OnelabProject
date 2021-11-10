import StyledCitizenInfo from "../styled/styledCitizenInfo/StyledCitizenInfo";

const CitizenInfo = () =>{
    return(
        <StyledCitizenInfo>
            <h2>Кредит выдаём гражданам Казахстана</h2>
            <div className="container">
                <div className="box">
                    <div className="category">Пол</div>
                    <div className="info">Мужчины/Женщины</div>
                </div>
                <div className="box mobile">
                    <div className="category">Стаж работы</div>
                    <div className="info">Не менее 6 месяцев</div>
                </div>
                <div className="box mobile">
                    <div className="category">Возраст</div>
                    <div className="info">От 21 до 63 лет</div>
                </div>
            </div>
        </StyledCitizenInfo>
    )
}

export default CitizenInfo;