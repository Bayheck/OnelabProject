import StyledFrequentQuestions from "../styled/styledFrequentQuestions/StyledFrequentQuestions";
import FrequentQuestionsAccordion from "./FrequentQuestionsAccordion";

const FrequentQuestions = ()=>{
    return(
        <StyledFrequentQuestions>
            <h3>Частые вопросы про кредит</h3>
            <FrequentQuestionsAccordion/>
            <div className="info">Если не нашли ответа на свой вопрос, позвоните на <span>7575</span> или напишите на электронный адрес <span>callcenter@forte.bank</span></div>
        </StyledFrequentQuestions>
    )
}

export default FrequentQuestions;