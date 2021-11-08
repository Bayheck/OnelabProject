import StyledApp from "./StyledApp";
import Header from './main/header/Header';
import Subheader from './main/subheader/Subheader';
import Footer from "./main/footer/Footer";
import Banner from "./main/banner/Banner";
import CreditConditions from "./main/creditConditions/CreditConditions";
import AdvantagesExpressCredit from "./main/advantagesExpressCredit/AdvantagesExpressCredit";
import ExpressCalculator from "./main/expressCalculator/ExpressCalculator";
import InfoTabs from "./main/infoTabs/InfoTabs";
import Stonks from "./main/stonks/Stonks";
import DocumentsForCredit from "./main/documentsForCredit/DocumentsForCredit";
import CitizenInfo from "./main/citizenInfo/CitizenInfo";
import FrequentQuestions from "./main/frequentQuestions/FrequentQuestions";

const App = () =>{
    return(
        <StyledApp>
            <div className="allWrapper">
                <Header></Header>
                <Subheader></Subheader>
                <Banner/>
                <CreditConditions/>
                <AdvantagesExpressCredit/>
                <ExpressCalculator/>
                <InfoTabs/>
                <Stonks/>
                <DocumentsForCredit/>
                <CitizenInfo/>
                <FrequentQuestions/>
                <Footer></Footer>
            </div>
        </StyledApp>
    )
}

export default App;