import AccordionSummary from "@mui/material/AccordionSummary";
import {ReactComponent as AccordionPlus} from "../../assets/FrequentQuestions/Union.svg";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";
import StyledFrequentQuestionsAccordion from "../styled/styledFrequentQuestions/StyledFrequentQuestionsAccordion";

const FrequentQuestionsAccordion = ()=>{
    const summaryList: string[] = [
        "Переоформить кредит на другого человека?",
        "Что необходимо для выпуска карты?","Отказаться от кредита?",
        "Получить отсрочку по кредиту?", "Узнать номер кредитного договора?",
        "Узнать о поступлении платежа по кредиту?", "Заплатить за кредит другого человека?",
        "Погасить досрочно без штрафов и комиссий?"
    ];

    return(
        <>
            {
                summaryList.map((value)=>(
                    <StyledFrequentQuestionsAccordion>
                        <AccordionSummary
                            expandIcon={<AccordionPlus/>}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>{value}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <ul>
                                    <li>Кредиты</li>
                                    <li> Карты</li>
                                    <li>Депозиты</li>
                                    <li>Переводы</li>
                                    <li>Мобильное приложение</li>
                                    <li>Тарифы</li>
                                    <li>Сейфовые ячейки</li>
                                </ul>
                            </Typography>
                        </AccordionDetails>
                    </StyledFrequentQuestionsAccordion>
                ))
            }
        </>
    )
}

export default FrequentQuestionsAccordion;