import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { ReactComponent as AccordionArrow } from '../../assets/MobileVersion/Accordion.svg';
import StyledAccordionFooter from "../styled/styledFooter/StyledAccordionFooter";

const AccordionFooter = ()=>{
    return(
        <div>
            <StyledAccordionFooter>
                <AccordionSummary
                    expandIcon={<AccordionArrow/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Частным клиентам</Typography>
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
            </StyledAccordionFooter>
            <StyledAccordionFooter>
                <AccordionSummary
                    expandIcon={<AccordionArrow/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>О нас</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <ul>
                            <li>Информация</li>
                            <li> Руководство</li>
                            <li>Отчетность</li>
                            <li>Документы</li>
                            <li>Контакты</li>
                            <li>Отделения и банкоматы</li>
                            <li>Отделения в период карантина</li>
                            <li>Вакансии</li>
                        </ul>
                    </Typography>
                </AccordionDetails>
            </StyledAccordionFooter>
            <StyledAccordionFooter>
                <AccordionSummary
                    expandIcon={<AccordionArrow/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Пресс-Центр</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <ul>
                            <li>Новости</li>
                            <li> Пресс-релизы</li>
                            <li className="coloredInfo">press@forte.bank</li>
                        </ul>
                    </Typography>
                </AccordionDetails>
            </StyledAccordionFooter>
            <StyledAccordionFooter>
                <AccordionSummary
                    expandIcon={<AccordionArrow/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Дополнительно</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <ul>
                            <li>Premier</li>
                            <li>International Relations</li>
                            <li>Реализация имущества</li>
                            <li>175-летие Абая</li>
                            <li>Apple Pay</li>
                            <li>Samsung Pay</li>
                            <li>ForteForex</li>
                            <li>Специальные предложения</li>
                        </ul>
                    </Typography>
                </AccordionDetails>
            </StyledAccordionFooter>
        </div>
    )
}

export default AccordionFooter;