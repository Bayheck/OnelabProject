import StyledDocumentsForCredit from "../styled/styledDocumentsForCredit/StyledDocumentsForCredit";
import { ReactComponent as IdIcon } from '../../assets/DocumentsForCredit/id.svg';
import { ReactComponent as EditIcon } from '../../assets/DocumentsForCredit/edit.svg';

const DocumentsForCredit = ()=>{
    return(
        <StyledDocumentsForCredit>
            <h3>Документы для получения кредита</h3>
            <div>
                <div className="point">
                    <IdIcon/>
                    Удостоверение личности
                </div>
                <div className="point">
                    <EditIcon/>
                    Заполнить анкету
                </div>
            </div>
            <div className="info">
                Задать вопросы можете по номеру <span>7575</span> или письмом на электронный адрес <span>callcenter@forte.bank</span>
            </div>
        </StyledDocumentsForCredit>
    )
}

export default DocumentsForCredit;