import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Import các thành phần
import NavBar from './NavBar';
import HeaderContent from './HeaderContent';
import ShippingInfo from './ShippingInfo';
import ProductList from './ProductList';
import Banner from './Banner';
import Services from './Services ';   
import Footer from './Footer ';
import WhatsNew from './WhatsNew';
import Skincare from './Skincare';
import Makeup from './Makeup';
import JustArrived from './JustArrived';
import BestSellers from './BestSellers';
import OnlineExclusives from './OnlineExclusives';
import CleansersToners from './CleansersToners';
import Serums from './Serums';
import Moisturizers from './Moisturizers ';
import Bodycontouring from './Bodycontouring';
import Bodyfirming from './Bodyfirming';
import HairCare from './HairCare';
import SunProtection from './SunProtection';
import AfterSun from './AfterSun';
import SelfTanning from './SelfTanning';
import Cleanse from './Cleanse';
import Shave from './Shave';
import MakeupHighlighters from './MakeupHighlighters';
import Concearels from './Concearels';
import EyeShadows from './EyeShadows';
import Eyeliners from './Eyeliners';
import Mascaras from './Mascaras';
import LipOils from './LipOils';
import LipGlosse from './LipGlosse';
import LipBalms from './LipBalms';
import TrustClarins from './TrustClarins';
import ProductDetail from './ProductDetail';
import BodyCare from './BodyCare';
import Login from "./Login";
import Signup from "./Signup"; 
import Holiday from './Holiday';
import ShoppingCart from './ShoppingCart';
import { CartProvider } from "./CartContext";
import AboutsBeauty from './AboutsBeauty';
import Offers from './Offers';
import Live from './Live';
import ServicesSpa from './ServicesSpa';
import OfferaTreatment from './OfferaTreatment';
import BookaSkinSpa from './BookaSkinSpa';
import Breadcrumb from './Breadcrumb';
import ClarinsLiveStream from './ClarinsLiveStream';




const HomePage = () => (
  
  <div> 
    <body
  style={{
    backgroundImage: `url(/IMG/bkgd.webp)`,
  }}
>
      <HeaderContent />
      <ShippingInfo />
      <ProductList />
      <Banner />
      <Services />
      
    </body>
 
  </div>
);

const Whatnew = () => (
  <div> 
    <body>
      <WhatsNew />
    </body>
  </div>
);
const Just = () => (
  <div> 
    <body>
      <JustArrived />
    </body>
  </div>
);
const Best = () => (
  <div> 
    <body>
      <BestSellers />
    </body>
  </div>
);
const Online = () => (
  <div> 
    <body>
      <OnlineExclusives />
    </body>
  </div>
);
const Skin = () => (
  <div> 
    <body>
      <Skincare />
    </body>
  </div>
);
const Make = () => (
  <div> 
    <body>
      <Makeup />
    </body>
  </div>
);
const ClearToner = () => (
  <div> 
    <body>
      <CleansersToners/>
    </body>
  </div>
);
const Ser = () => (
  <div> 
    <body>
      <Serums/>
    </body>
  </div>
);
const Moistur = () => (
  <div> 
    <body>
      <Moisturizers/>
    </body>
  </div>
);
const BodyC = () => (
  <div> 
    <body>
      <Bodycontouring/>
    </body>
  </div>
);
const BodyF = () => (
  <div> 
    <body>
      <Bodyfirming/>
    </body>
  </div>
);
const Hair = () => (
  <div> 
    <body>
      <HairCare/>
    </body>
  </div>
);
const Sun = () => (
  <div> 
    <body>
      <SunProtection/>
    </body>
  </div>
);
const After = () => (
  <div> 
    <body>
      <AfterSun/>
    </body>
  </div>
);

const Self = () => (
  <div> 
    <body>
      <SelfTanning/>
    </body>
  </div>
);
const Clean = () => (
  <div> 
    <body>
      <Cleanse/>
    </body>
  </div>
);
const Sha = () => (
  <div> 
    <body>
      <Shave/>
    </body>
  </div>
);
const Bodycaa = () => (
  <div> 
    <body>
      <BodyCare/>
    </body>
  </div>
);
const Prihigh = () => (
  <div> 
    <body>
      <MakeupHighlighters/>
    </body>
  </div>
);
const Concea = () => (
  <div> 
    <body>
      <Concearels/>
    </body>
  </div>
);
const Eye = () => (
  <div> 
    <body>
      <EyeShadows/>
    </body>
  </div>
);
const Eyeli = () => (
  <div> 
    <body>
      <Eyeliners/>
    </body>
  </div>
);
const Masca = () => (
  <div> 
    <body>
      <Mascaras/>
    </body>
  </div>
);
const LipO = () => (
  <div> 
    <body>
      <LipOils/>
    </body>
  </div>
);
const LipGlo = () => (
  <div> 
    <body>
      <LipGlosse/>
    </body>
  </div>
);
const Lipba = () => (
  <div> 
    <body>
      <LipBalms/>
    </body>
  </div>
);
const TrustC = () => (
  <div> 
    <body>
      <TrustClarins/>
    </body>
  </div>
);
const Beauty = () => (
  <div> 
    <body>
      <AboutsBeauty/>
    </body>
  </div>
);
const Offe = () => (
  <div> 
    <body>
      <Offers/>
    </body>
  </div>
);
const Lve = () => (
  <div> 
    <body>
      <Live/>
    </body>
  </div>
);
const Servic = () => (
  <div> 
    <body>
      <ServicesSpa/>
    </body>
  </div>
);
const Offera = () => (
  <div> 
    <body>
      <OfferaTreatment/>
    </body>
  </div>
);
const BookasSkin = () => (
  <div> 
    <body>
      <BookaSkinSpa/>
    </body>
  </div>
);
const  LiveStream = () => (
  <div> 
    <body>
      < ClarinsLiveStream/>
    </body>
  </div>
);




const App = () => (
  <CartProvider>
  <Router>
    <div>
    <header>
      <NavBar />
      <Breadcrumb/>
    </header>
      {/* Cấu hình route */}
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Trang chính */}
        <Route path="/whats-new" element={<Whatnew />} /> 
        <Route path="/JustArrived" element={<Just />} /> 
        <Route path="/BestSellers" element={<Best />} /> 
        <Route path="/OnlineExclusives" element={<Online />} /> 
        <Route path="/Skin-care" element={<Skin />} /> 
        <Route path="/Make-up" element={<Make />} /> 
        <Route path="/Cleansers&Toners" element={<ClearToner />} /> 
        <Route path="/Serums" element={<Ser />} /> 
        <Route path="/Moisturizers" element={<Moistur />} /> 
        <Route path="/BodyContouring" element={<BodyC />} /> 
        <Route path="/BodyFirming" element={<BodyF />} /> 
        <Route path="/HairCare" element={<Hair />} /> 
        <Route path="/SunProtection" element={<Sun />} /> 
        <Route path="/AfterSun" element={<After />} /> 
        <Route path="/SelfTanning" element={<Self/>} /> 
        <Route path="/Cleanse" element={<Clean/>} /> 
        <Route path="/Shave" element={<Sha/>} /> 
        <Route path="/Primers&Highlighters" element={<Prihigh/>} /> 
        <Route path="//Concealers" element={<Concea/>} /> 
        <Route path="/EyeShadows" element={<Eye/>} /> 
        <Route path="/Eyeliners" element={<Eyeli/>} /> 
        <Route path="/Mascaras" element={<Masca/>} /> 
        <Route path="/LipOils" element={<LipO/>} /> 
        <Route path="/LipGlosses" element={<LipGlo/>} /> 
        <Route path="/LipBalms" element={<Lipba/>} /> 
        <Route path="/10 Reasons to Trust Clarins" element={< TrustC/>} />
        <Route path="/product/:id" element={<ProductDetail />} /> 
        <Route path="/BodyCare" element={<Bodycaa />} /> 
        <Route path="/Login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> 
        <Route path="/Holiday" element={<Holiday />} /> 
        <Route path="/shopping-cart" element={<ShoppingCart />} /> 
        <Route path="/About Responsible Beauty" element={<Beauty />} /> 
        <Route path="/Offers" element={<Offe />} /> 
        <Route path="/LiveConsultation" element={<Lve />} /> 
        <Route path="/Services&Spa" element={<Servic  />} /> 
        <Route path="/offer-treatment" element={<Offera  />} /> 
        <Route path="/book-skin-spa" element={<BookasSkin />} /> 
        <Route path="/ Clarins Live Stream" element={< LiveStream />} /> 
      </Routes>
      <footer>
        <Footer />
      </footer>
    </div>
  </Router>
  </CartProvider>
);

export default App;
