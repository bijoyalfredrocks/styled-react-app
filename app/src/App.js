import GlobalStyle, {} from './globalStyles'
import { ExtraCoverTitle } from './components/ExtraCoverTitle/ExtraCoverTitle';
import { Header } from './components/Header/Header';
import { QuoteInfo } from './components/QuoteInfo/QuoteInfo';
import { QuoteSummary } from './components/QuoteSummary/QuoteSummary';
import { OptionalExtraCover } from './contanier/OptionalExtraCover';
import { InfoSection } from './components/InfoSection/InfoSection';

const App = () => {
  return (<>
      <InfoSection/>
      <OptionalExtraCover />
     </>

    // <div className="container-fluid px-0">
    //   <GlobalStyle/>
    //   <Header data-testid="header" titleText = {"HOME INSURANCE"}/>
    //   <div className="ms-4 me-4">
    //     <div className="row mt-5">
          
    //     </div>
    //     <div>
    //       <ExtraCoverTitle />
    //       
    //     </div>
    //   </div>
    // </div>
  );
}

export default App;
