import StyledAccordionExpress from "../styled/styledAdvantagesExpressCredit/StyledAccordionExpress";
import AccordionSummary from "@mui/material/AccordionSummary";
import {ReactComponent as AccordionArrow} from "../../assets/MobileVersion/Accordion.svg";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";

const AccordionExpress = ()=>{
    return(
        <div>
            <StyledAccordionExpress>
                <AccordionSummary
                    expandIcon={<AccordionArrow/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Без залога и на любые цели</Typography>
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
            </StyledAccordionExpress>
            <StyledAccordionExpress>
                <AccordionSummary
                    expandIcon={<AccordionArrow/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Доставка денег и документов домой</Typography>
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
            </StyledAccordionExpress>
            <StyledAccordionExpress>
                <AccordionSummary
                    expandIcon={<AccordionArrow/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Погашение без походов в отделение</Typography>
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
            </StyledAccordionExpress>
        </div>
    )
}

export default AccordionExpress;