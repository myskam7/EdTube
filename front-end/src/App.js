
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import SearchBar from './Components/SearchBar'
import Dashboard from "./Components/Dashboard/index";
import SearchResults from "./Components/SearchResults/index";
import VideoPlayer from "./Components/VideoPlayer/index";
import NavBar from "./Components/NavBar";


function App() {
  return (
<>
  <Router>
    <div className="App App-header">

    <div  className=" nav screen" style={{margin: "0", }} >
        <NavBar {...navBarData}/>

        </div>
      <nav>
       
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
          <li>
            <Link to="/video-player">Player</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/search" component={SearchResults}>
          {/* <SearchResults /> */}
        </Route>
        <Route path="/video-player" component={VideoPlayer} 
        // render={({ props }) => <VideoPlayer {...props} {...videoPlayerData}/>}
        />
          {/* <VideoPlayer {...videoPlayerData}/>
        </Route> */}
        <Route path="/">
          <Dashboard {...dashboardData}/>
        </Route>
      </Switch>
    </div>
  </Router>
</>
  );
}


export default App;

const heroData = {
  title: "React Tutorial",
  regardezLaSaison3: "Regardez la saison 3 maintenant",
  leCartelDeCaliRe: "Le cartel de Cali reprend le pouvoir en Colombie. Les successeurs d’Escobar passent à l’action et déclarent la guerre au gouvernement.",
  icPlay: "/img/1-2-0-home-discovery-expanded-ic-play-960CF728-C580-481E-9A75-1269BAD9B5BA@3x.png",
  spanText: "Lectur",
  spanText2: "e",
  icPlus: "/img/1-2-0-home-discovery-expanded-ic-plus-F3587FEB-463E-4C81-BC02-1822FDB9329F@3x.png",
  myList: "My List",
};

const searchData = {
  src: "/img/search-logo.png",
};
//
const navBarData = {
  logoNetflix: "/img/edtube-logo.png",
  jeunesse: "JEUNESSE",
  icNotification: "/img/1-2-0-home-discovery-expanded-ic-notification-2F91A929-D854-4BB1-96E2-0173DA412D9B@3x.png",
  placeholderAvatar: "/img/1-2-0-home-discovery-expanded-placeholder-avatar-0517BE3B-5723-4B0D-854D-E4BB9EEA308F@2x.png",
  icDropdown: "/img/1-2-0-home-discovery-expanded-ic-dropdown-320A0D90-5167-443E-8EE7-514F01F68DA1@3x.png",
  searchProps: searchData,
};
//
const firstRowData = {
  revoir: "Revoir",
  x101: "/img/1-2-0-home-discovery-expanded-1-01-34CCBD0B-F07D-4C06-B09E-4AC67587700B@2x.png",
  x102: "/img/1-2-0-home-discovery-expanded-1-02-E608132C-AB19-4388-A737-CD0FF7697FA9@2x.png",
  x103: "/img/1-2-0-home-discovery-expanded-1-03-1898CFBC-0AE5-4FED-9B2D-AE5B8F5EA06B@2x.png",
  x104: "/img/1-2-0-home-discovery-expanded-1-04-F0D14EED-BF3D-487A-A6F9-3C13CEE48829@2x.png",
  x105: "/img/1-2-0-home-discovery-expanded-1-05-47749698-7614-4374-96D3-99812A32A12E@2x.png",
  x106: "/img/1-2-0-home-discovery-expanded-1-06-6DE4DFC1-F512-4F82-AEDA-B4AF3A005D11@2x.png",
  x107: "/img/1-2-0-home-discovery-expanded-1-07-BAFF215C-4DDF-400E-BADB-DEE019D10F38@2x.png",
};
//
const firstRow2Data = {
  revoir: "Tendances actuelles",
  x101: "/img/1-2-0-home-discovery-expanded-2-01-4FE66FD7-6DB6-4C94-AC29-DD426FB1378E@2x.png",
  x102: "/img/1-2-0-home-discovery-expanded-2-02-798E7BEC-3F4A-436E-9861-9452366DA992@2x.png",
  x103: "/img/1-2-0-home-discovery-expanded-2-03-01623950-84BF-465E-B09D-C9A9BE27DF2C@2x.png",
  x104: "/img/1-2-0-home-discovery-expanded-2-04-50FEFD10-C65C-4D68-B11C-B8C65B5EC329@2x.png",
  x105: "/img/1-2-0-home-discovery-expanded-2-05-EC9E3E30-5019-4797-B9DE-41FB73DC9A6E@2x.png",
  x106: "/img/1-2-0-home-discovery-expanded-2-06-5497B21D-8241-4077-83F9-BDBB60C6ED9A@2x.png",
  x107: "/img/1-2-0-home-discovery-expanded-2-07-082E3EF5-F780-442F-B25C-174EEA5F4A9B@2x.png",
  className: "second-row",
};

const headData = {
  logoAgePolonais: "/img/1-2-0-home-discovery-expanded-logo-age-polonais-D4F17E6B-9525-4BD9-AFD0-4D0A48E16830@3x.png",
  netflixDcouvert: "Netflix Découverte - Juillet 2018",
  andrzejWajdaRoman: "Andrzej Wajda, Roman Polański, Agnieszka Holland, Paweł Pawlikowski… Découvrez ceux qui ont fait connaitre le cinéma polonais sur la scène internationale.",
};

const ilsAimaientLaVieData = {
  ilsAimaientLaVie: "/img/1-2-0-home-discovery-expanded-hq720-2-9C55C34C-40E1-43AC-A3EF-0D46E387CB53.jpg",
  icPlayCopy4: "/img/1-2-0-home-discovery-expanded-ic-play-16820540-032C-45D6-9A37-4281A8268F96@3x.png",
  ilsAimaientLaVie2: "Ils aimaient la vie",
  spanText: "1957 ",
  spanText2: "‧",
  spanText3: " Drame ",
  spanText4: "‧",
  spanText5: " 1h 35m",
};

const coldWarData = {
  coldWar: "/img/1-2-0-home-discovery-expanded-hq720-3-F70D0E9B-E1FB-4AD0-A55E-C79DDD4F4211.jpg",
  icPlayCopy2: "/img/1-2-0-home-discovery-expanded-ic-play-16820540-032C-45D6-9A37-4281A8268F96@3x.png",
  coldWar2: "Cold War",
  text_Label: "2018 ‧ Drame/Mélodrame ‧ 1h 25m",
};




const leCouteauDansLeauData = {
  hq7204: "/img/1-2-0-home-discovery-expanded-hq720-4-BD523338-E0E6-44D4-AEF6-87CF9A5BB985.jpg",
  icPlayCopy3: "/img/1-2-0-home-discovery-expanded-ic-play-copy-3-102A36E1-4498-41EC-A828-5F360785961D@3x.png",
  leCouteauDansLEa: "Le Couteau dans l'eau",
  spanText: "1962 ",
  spanText2: "‧",
  spanText3: " Thriller/Drame ",
  spanText4: "‧",
  spanText5: " 1h 41m",
};

const tabsData = {
  text_Label: "L’âge d’or du cinéma polonais (juillet 2018)",
  laNouvelleVagueFr: "La nouvelle vague française (juin 2018)",
  directionCannesMa: "Direction Cannes (mai 2018)",
  bollywoodClassiques: "Bollywood Classiques (mai 2018)",
};

const thirdRowChannelsData = {
  programmesOriginaux: "PROGRAMMES ORIGINAUX NETFLIX",
  icArrowCopy: "/img/1-2-0-home-discovery-expanded-ic-arrow-copy-3C6DD94F-D253-4840-B8A4-8BB46D5A75C9@3x.png",
  x302: "/img/1-2-0-home-discovery-expanded-3-02-16E176B4-6F38-4BD9-8121-163F944CF8E7@2x.png",
  x301: "/img/1-2-0-home-discovery-expanded-3-01-21ABF04A-66E9-416D-9762-D289768B6F7A@2x.png",
  x307: "/img/1-2-0-home-discovery-expanded-3-07-CC84984F-4280-4BC7-828C-2FBC2476FE85@2x.png",
  x305: "/img/1-2-0-home-discovery-expanded-3-05-055943DA-E55E-4FF7-A485-0DDC08CDDC50@2x.png",
  x306: "/img/1-2-0-home-discovery-expanded-3-06-48852C3B-09ED-461E-B1D3-CAC883834B62@2x.png",
  x304: "/img/1-2-0-home-discovery-expanded-3-04-9E0E7395-D4C9-4EC8-85F1-77089B9A1C33@2x.png",
  x303: "/img/1-2-0-home-discovery-expanded-3-03-DB583BE1-3B51-4D94-8CF0-3AAD512D7D66@2x.png",
};

const categoriesData = {
  catgories: "Catégories",
  comdie: "/img/1-2-0-home-discovery-expanded-bg-copy-7AAC0C93-BD1A-4908-BF38-8FCF94E29098@2x.png",
  react: "React",
  icArrowCopy2: "/img/1-2-0-home-discovery-expanded-ic-arrow-copy-4-604EDDFD-2FF2-431B-BBD3-5A93533F73C0@3x.png",
  action: "/img/1-2-0-home-discovery-expanded-bg-copy-2-05D0AC4F-D9F0-43EA-87C0-718126A007C7@2x.png",
  javascript: "Javascript",
  icArrowCopy3: "/img/1-2-0-home-discovery-expanded-ic-arrow-copy-4-604EDDFD-2FF2-431B-BBD3-5A93533F73C0@3x.png",
  drame: "/img/1-2-0-home-discovery-expanded-bg-copy-3-81BD1CEC-4255-4A56-A198-2E3C13BA0497@2x.png",
  nodejs: "NodeJS",
  icArrowCopy4: "/img/1-2-0-home-discovery-expanded-ic-arrow-copy-4-604EDDFD-2FF2-431B-BBD3-5A93533F73C0@3x.png",
  sciFi: "/img/1-2-0-home-discovery-expanded-bg-copy-4-11DC7FE1-A9DC-4EBB-9BCA-E57B2949CB08@2x.png",
  mongodb: "MongoDB",
  icArrowCopy5: "/img/1-2-0-home-discovery-expanded-ic-arrow-copy-4-604EDDFD-2FF2-431B-BBD3-5A93533F73C0@3x.png",
  romance: "/img/1-2-0-home-discovery-expanded-bg-copy-5-0F969F2B-A38C-4BF0-BCB9-276181207448@2x.png",
  price: "R",
  icArrowCopy6: "/img/1-2-0-home-discovery-expanded-ic-arrow-copy-4-604EDDFD-2FF2-431B-BBD3-5A93533F73C0@3x.png",
  thriller: "/img/1-2-0-home-discovery-expanded-bg-copy-6-6DC8D222-C210-424A-9C22-0319FF79C69E@2x.png",
  sql: "SQL",
  icArrowCopy7: "/img/1-2-0-home-discovery-expanded-ic-arrow-copy-4-604EDDFD-2FF2-431B-BBD3-5A93533F73C0@3x.png",
  python: "/img/1-2-0-home-discovery-expanded-bg-copy-7-BF75858C-B60B-48A7-9C6B-7F6E2C341161@2x.png",
  python2: "Python",
  icArrow: "/img/1-2-0-home-discovery-expanded-ic-arrow-copy-4-604EDDFD-2FF2-431B-BBD3-5A93533F73C0@3x.png",
};

const footerData = {
  icFacebook: "/img/1-2-0-home-discovery-expanded-ic-facebook-4EE09591-D191-4382-9E84-656B7C7DCC1C@3x.png",
  icInstagram: "/img/1-2-0-home-discovery-expanded-ic-instagram-5AE46F6D-4980-4089-82FB-FAB24B29E8A4@3x.png",
  icTwitter: "/img/1-2-0-home-discovery-expanded-ic-twitter-707BB0AD-A8B9-458C-85B0-52917F1662E0@3x.png",
  icYoutube: "/img/1-2-0-home-discovery-expanded-ic-youtube-CF8FCD8C-5EA7-4169-BCF7-76D613EAE1BE@3x.png",
  text1: "Audio et sous-titres",
  presse: "Presse",
  confidentialit: "Confidentialité",
  nousContacter: "Nous contacter",
  serviceCode: "Service Code",
  x19972018Netfl: " © 1997-2018 Netflix, Inc.",
  autodescription: "Autodescription",
  relationsInvestisse: "Relations investisseurs",
  informationsLga: "Informations légales",
  centreDaide: "Centre d’aide",
  recrutement: "Recrutement",
  prfrencesDe: "Préférences de cookies",
  cartesCadeaux: "Cartes cadeaux",
  conditionsDut: "Conditions d’utilisation",
  mentionsLgales: "Mentions légales",
};

const dashboardData = {
  bgPoland: "/img/1-2-0-home-discovery-expanded-bg-poland-DBA77BB1-1269-4D94-8821-56F0F51381F8@2x.png",
  icClose: "/img/1-2-0-home-discovery-expanded-ic-close-AC1E90C4-2A69-4E59-9216-79737FEC474E@3x.png",
  ida: "/img/1-2-0-home-discovery-expanded-hq720-70C2492F-79C4-48AC-928F-1490F52D9B2B.jpg",
  icPlay: "/img/dashboard-ic-play-4289FE00-9175-4FDC-9F26-33069B4994DF@3x.png",
  name: "Ida",
  text_Label: "2013 ‧ Drame ‧ 1h 22m",
  heroProps: heroData,
  navBarProps: navBarData,
  firstRowProps: firstRowData,
  firstRow2Props: firstRow2Data,
  headProps: headData,
  ilsAimaientLaVieProps: ilsAimaientLaVieData,
  coldWarProps: coldWarData,
  leCouteauDansLeauProps: leCouteauDansLeauData,
  tabsProps: tabsData,
  thirdRowChannelsProps: thirdRowChannelsData,
  categoriesProps: categoriesData,
  footerProps: footerData,
};
//
const iconsChevronLeftData = {
  src: "/img/searchresults-color-D069FF42-2EEF-4126-B61F-BAB62AB29D01@2x.png",
};

const result1Data = {
  ilsAimaientLaVie: "/img/searchresults-hq720-2-B188B246-923D-4C4F-8226-0338CBA208E4.jpg",
  ils: "Ils",
  spanText: "1957 ",
  spanText2: "‧",
  spanText3: " Drame ",
  spanText4: "‧",
  spanText5: " 1h 35m",
  netflixDcouvert: "Netflix Découverte - Juillet 2018",
  icPlay: "/img/videoplayer-ic-play-0A9625AB-A985-4E77-AD89-A650B16476F6@3x.png",
  codeNinja: "Code Ninja",
  andrzejWajdaRoman: "Andrzej Wajda, Roman Polański, Agnieszka Holland, Paweł Pawlikowski… Découvrez ceux qui ont fait connaitre le cinéma polonais sur la scène internationale.",
};

const result12Data = {
  ilsAimaientLaVie: "/img/searchresults-hq720-2-B188B246-923D-4C4F-8226-0338CBA208E4.jpg",
  ils: "Ils",
  spanText: "1957 ",
  spanText2: "‧",
  spanText3: " Drame ",
  spanText4: "‧",
  spanText5: " 1h 35m",
  netflixDcouvert: "Netflix Découverte - Juillet 2018",
  icPlay: "/img/videoplayer-ic-play-0A9625AB-A985-4E77-AD89-A650B16476F6@3x.png",
  codeNinja: "Code Ninja",
  andrzejWajdaRoman: "Andrzej Wajda, Roman Polański, Agnieszka Holland, Paweł Pawlikowski… Découvrez ceux qui ont fait connaitre le cinéma polonais sur la scène internationale.",
  className: "result1-copy",
};

const result13Data = {
  ilsAimaientLaVie: "/img/searchresults-hq720-2-B188B246-923D-4C4F-8226-0338CBA208E4.jpg",
  ils: "Ils",
  spanText: "1957 ",
  spanText2: "‧",
  spanText3: " Drame ",
  spanText4: "‧",
  spanText5: " 1h 35m",
  netflixDcouvert: "Netflix Découverte - Juillet 2018",
  icPlay: "/img/videoplayer-ic-play-0A9625AB-A985-4E77-AD89-A650B16476F6@3x.png",
  codeNinja: "Code Ninja",
  andrzejWajdaRoman: "Andrzej Wajda, Roman Polański, Agnieszka Holland, Paweł Pawlikowski… Découvrez ceux qui ont fait connaitre le cinéma polonais sur la scène internationale.",
  className: "result1-copy",
};

const searchResultsData = {
  logoNetflix: "/img/edtube-logo.png",
  jeunesse: "JEUNESSE",
  icNotification: "/img/1-2-0-home-discovery-expanded-ic-notification-2F91A929-D854-4BB1-96E2-0173DA412D9B@3x.png",
  placeholderAvatar: "/img/1-2-0-home-discovery-expanded-placeholder-avatar-0517BE3B-5723-4B0D-854D-E4BB9EEA308F@2x.png",
  icDropdown: "/img/1-2-0-home-discovery-expanded-ic-dropdown-320A0D90-5167-443E-8EE7-514F01F68DA1@3x.png",
  spanText: "React",
  spanText2: " ",
  spanText3: "Tutorial",
  search: "Search:",
  line: "/img/searchresults-line-6E53E2D2-5F7A-4B7B-A0E9-50C6D53E3CBF.png",
  iconsChevronLeftProps: iconsChevronLeftData,
  result1Props: result1Data,
  result12Props: result12Data,
  result13Props: result13Data,
};

const search2Data = {
  src: "/img/search-logo.png",
};

const navBar2Data = {
  logoNetflix: "/img/edtube-logo.png",
  jeunesse: "JEUNESSE",
  icNotification: "/img/1-2-0-home-discovery-expanded-ic-notification-2F91A929-D854-4BB1-96E2-0173DA412D9B@3x.png",
  placeholderAvatar: "/img/1-2-0-home-discovery-expanded-placeholder-avatar-0517BE3B-5723-4B0D-854D-E4BB9EEA308F@2x.png",
  icDropdown: "/img/1-2-0-home-discovery-expanded-ic-dropdown-320A0D90-5167-443E-8EE7-514F01F68DA1@3x.png",
  className: "nav-bar-1",
  searchProps: search2Data,
};

const iconsChevronLeft2Data = {
  src: "/img/videoplayer-color-93128290-AE49-403D-812E-8767E878CF17@2x.png",
  className: "icons-chevron-left-1",
};

const iconsChevronLeft3Data = {
  src: "/img/videoplayer-color-21E787DB-1579-44C3-9178-732C101A70EE@2x.png",
  className: "icons-chevron-left-copy",
};

const commentData = {
  andrzejWajdaRoman: "Andrzej Wajda, Roman Polański, Agnieszka Holland, Paweł Pawlikowski… Découvrez ceux qui ont fait connaitre le cinéma polonais sur la scène internationale………",
  reply: "Reply",
};

const comment2Data = {
  andrzejWajdaRoman: "Andrzej Wajda, Roman Polański, Agnieszka Holland, Paweł Pawlikowski… Découvrez ceux qui ont fait connaitre le cinéma polonais sur la scène internationale………",
  reply: "Reply",
  className: "comment-copy-3",
};

const comment3Data = {
  andrzejWajdaRoman: "Andrzej Wajda, Roman Polański, Agnieszka Holland, Paweł Pawlikowski… Découvrez ceux qui ont fait connaitre le cinéma polonais sur la scène internationale………",
  reply: "Reply",
  className: "comment-copy-2",
};

const comment4Data = {
  andrzejWajdaRoman: "Andrzej Wajda, Roman Polański, Agnieszka Holland, Paweł Pawlikowski… Découvrez ceux qui ont fait connaitre le cinéma polonais sur la scène internationale………",
  reply: "Reply",
  className: "comment-copy",
};

const result1CopyData = {
  hq7202: "/img/videoplayer-hq720-2-EC6216A5-3258-4D5F-A07D-765BEF994333.jpg",
  netflixDcouvert: <>Netflix Découverte <br />- Juillet 2018</>,
  codeNinja: "Code Ninja",
  icPlayCopy: "/img/videoplayer-ic-play-copy-B17A744C-C55A-4506-BC14-F205AA916739@3x.png",
};

const result1Copy2Data = {
  hq7202: "/img/videoplayer-hq720-2-EC6216A5-3258-4D5F-A07D-765BEF994333.jpg",
  netflixDcouvert: <>Netflix Découverte <br />- Juillet 2018</>,
  codeNinja: "Code Ninja",
  icPlayCopy: "/img/videoplayer-ic-play-copy-B17A744C-C55A-4506-BC14-F205AA916739@3x.png",
  className: "result1-copy-2",
};

const result1Copy3Data = {
  hq7202: "/img/videoplayer-hq720-2-EC6216A5-3258-4D5F-A07D-765BEF994333.jpg",
  netflixDcouvert: <>Netflix Découverte <br />- Juillet 2018</>,
  codeNinja: "Code Ninja",
  icPlayCopy: "/img/videoplayer-ic-play-copy-B17A744C-C55A-4506-BC14-F205AA916739@3x.png",
  className: "result1-copy-3",
};

const result1Copy4Data = {
  hq7202: "/img/videoplayer-hq720-2-EC6216A5-3258-4D5F-A07D-765BEF994333.jpg",
  netflixDcouvert: <>Netflix Découverte <br />- Juillet 2018</>,
  codeNinja: "Code Ninja",
  icPlayCopy: "/img/videoplayer-ic-play-copy-B17A744C-C55A-4506-BC14-F205AA916739@3x.png",
  className: "result1-copy-4",
};

const iconsChevronLeft4Data = {
  src: "/img/videoplayer-color-C1FE37DE-E872-43D3-9EFC-40287E2D4BC6@2x.png",
  className: "icons-chevron-left-copy-1",
};

const videoPlayerData = {
  player: "/img/videoplayer-hq720-2-E72C10D5-D54E-49F6-839B-918B3D7270EF.jpg",
  icNotification: "/img/videoplayer-ic-play-copy-4-13A87171-8DF4-492D-9DC8-B45FD1C261A6@3x.png",
  placeholderAvatar: "/img/videoplayer-ic-play-0A9625AB-A985-4E77-AD89-A650B16476F6@3x.png",
  netflixDcouvert: "Netflix Découverte - Juillet 2018",
  codeNinja: "Code Ninja",
  andrzejWajdaRoman: "Andrzej Wajda, Roman Polański, Agnieszka Holland, Paweł Pawlikowski… Découvrez ceux qui ont fait connaitre le cinéma polonais sur la scène internationale………",
  icDropdown: "/img/videoplayer-line-BB283E26-E09D-4D2C-8DE4-6FFBF082ABA1.png",
  address: "378 Comments",
  jeunesse: "Add a public comment",
  leaveacomment: "/img/videoplayer-line-26527D42-BC97-40D1-9882-7AC88F551B0B.png",
  logoNetflix: "/img/videoplayer-rectangle-54CC1732-E272-4818-B10C-13B372EDBB02.png",
  iconsChevronLeftProps: navBar2Data,
  iconsChevronLeftProps2: iconsChevronLeft2Data,
  iconsChevronLeft2Props: iconsChevronLeft3Data,
  commentProps: commentData,
  comment2Props: comment2Data,
  comment3Props: comment3Data,
  comment4Props: comment4Data,
  result1CopyProps: result1CopyData,
  result1Copy2Props: result1Copy2Data,
  result1Copy3Props: result1Copy3Data,
  result1Copy4Props: result1Copy4Data,
  iconsChevronLeft3Props: iconsChevronLeft4Data,
};

const hero2Data = {
  title: "React Tutorial",
  regardezLaSaison3: "Regardez la saison 3 maintenant",
  leCartelDeCaliRe: "Le cartel de Cali reprend le pouvoir en Colombie. Les successeurs d’Escobar passent à l’action et déclarent la guerre au gouvernement.",
  icPlay: "/img/1-2-0-home-discovery-expanded-ic-play-960CF728-C580-481E-9A75-1269BAD9B5BA@3x.png",
  spanText: "Lectur",
  spanText2: "e",
  icPlus: "/img/1-2-0-home-discovery-expanded-ic-plus-F3587FEB-463E-4C81-BC02-1822FDB9329F@3x.png",
  myList: "My List",
};

const search3Data = {
  src: "/img/search-logo.png",
  className: "search-2",
};

const firstRow3Data = {
  revoir: "Revoir",
  x101: "/img/1-2-0-home-discovery-expanded-1-01-34CCBD0B-F07D-4C06-B09E-4AC67587700B@2x.png",
  x102: "/img/1-2-0-home-discovery-expanded-1-02-E608132C-AB19-4388-A737-CD0FF7697FA9@2x.png",
  x103: "/img/1-2-0-home-discovery-expanded-1-03-1898CFBC-0AE5-4FED-9B2D-AE5B8F5EA06B@2x.png",
  x104: "/img/1-2-0-home-discovery-expanded-1-04-F0D14EED-BF3D-487A-A6F9-3C13CEE48829@2x.png",
  x105: "/img/1-2-0-home-discovery-expanded-1-05-47749698-7614-4374-96D3-99812A32A12E@2x.png",
  x106: "/img/1-2-0-home-discovery-expanded-1-06-6DE4DFC1-F512-4F82-AEDA-B4AF3A005D11@2x.png",
  x107: "/img/1-2-0-home-discovery-expanded-1-07-BAFF215C-4DDF-400E-BADB-DEE019D10F38@2x.png",
};

const firstRow4Data = {
  revoir: "Tendances actuelles",
  x101: "/img/1-2-0-home-discovery-expanded-2-01-4FE66FD7-6DB6-4C94-AC29-DD426FB1378E@2x.png",
  x102: "/img/1-2-0-home-discovery-expanded-2-02-798E7BEC-3F4A-436E-9861-9452366DA992@2x.png",
  x103: "/img/1-2-0-home-discovery-expanded-2-03-01623950-84BF-465E-B09D-C9A9BE27DF2C@2x.png",
  x104: "/img/1-2-0-home-discovery-expanded-2-04-50FEFD10-C65C-4D68-B11C-B8C65B5EC329@2x.png",
  x105: "/img/1-2-0-home-discovery-expanded-2-05-EC9E3E30-5019-4797-B9DE-41FB73DC9A6E@2x.png",
  x106: "/img/1-2-0-home-discovery-expanded-2-06-5497B21D-8241-4077-83F9-BDBB60C6ED9A@2x.png",
  x107: "/img/1-2-0-home-discovery-expanded-2-07-082E3EF5-F780-442F-B25C-174EEA5F4A9B@2x.png",
  className: "second-row-1",
};

const head2Data = {
  logoAgePolonais: "/img/1-2-0-home-discovery-expanded-logo-age-polonais-D4F17E6B-9525-4BD9-AFD0-4D0A48E16830@3x.png",
  netflixDcouvert: "Netflix Découverte - Juillet 2018",
  andrzejWajdaRoman: "Andrzej Wajda, Roman Polański, Agnieszka Holland, Paweł Pawlikowski… Découvrez ceux qui ont fait connaitre le cinéma polonais sur la scène internationale.",
};

const ilsAimaientLaVie2Data = {
  ilsAimaientLaVie: "/img/1-2-0-home-discovery-expanded-hq720-2-9C55C34C-40E1-43AC-A3EF-0D46E387CB53.jpg",
  icPlayCopy4: "/img/1-2-0-home-discovery-expanded-ic-play-16820540-032C-45D6-9A37-4281A8268F96@3x.png",
  ilsAimaientLaVie2: "Ils aimaient la vie",
  spanText: "1957 ",
  spanText2: "‧",
  spanText3: " Drame ",
  spanText4: "‧",
  spanText5: " 1h 35m",
};

const coldWar2Data = {
  coldWar: "/img/1-2-0-home-discovery-expanded-hq720-3-F70D0E9B-E1FB-4AD0-A55E-C79DDD4F4211.jpg",
  icPlayCopy2: "/img/1-2-0-home-discovery-expanded-ic-play-16820540-032C-45D6-9A37-4281A8268F96@3x.png",
  coldWar2: "Cold War",
  text_Label: "2018 ‧ Drame/Mélodrame ‧ 1h 25m",
};

const leCouteauDansLeau2Data = {
  hq7204: "/img/1-2-0-home-discovery-expanded-hq720-4-BD523338-E0E6-44D4-AEF6-87CF9A5BB985.jpg",
  icPlayCopy3: "/img/1-2-0-home-discovery-expanded-ic-play-copy-3-102A36E1-4498-41EC-A828-5F360785961D@3x.png",
  leCouteauDansLEa: "Le Couteau dans l'eau",
  spanText: "1962 ",
  spanText2: "‧",
  spanText3: " Thriller/Drame ",
  spanText4: "‧",
  spanText5: " 1h 41m",
};

const tabs2Data = {
  text_Label: "L’âge d’or du cinéma polonais (juillet 2018)",
  laNouvelleVagueFr: "La nouvelle vague française (juin 2018)",
  directionCannesMa: "Direction Cannes (mai 2018)",
  bollywoodClassiques: "Bollywood Classiques (mai 2018)",
};

const thirdRowChannels2Data = {
  programmesOriginaux: "PROGRAMMES ORIGINAUX NETFLIX",
  icArrowCopy: "/img/1-2-0-home-discovery-expanded-ic-arrow-copy-3C6DD94F-D253-4840-B8A4-8BB46D5A75C9@3x.png",
  x302: "/img/1-2-0-home-discovery-expanded-3-02-16E176B4-6F38-4BD9-8121-163F944CF8E7@2x.png",
  x301: "/img/1-2-0-home-discovery-expanded-3-01-21ABF04A-66E9-416D-9762-D289768B6F7A@2x.png",
  x307: "/img/1-2-0-home-discovery-expanded-3-07-CC84984F-4280-4BC7-828C-2FBC2476FE85@2x.png",
  x305: "/img/1-2-0-home-discovery-expanded-3-05-055943DA-E55E-4FF7-A485-0DDC08CDDC50@2x.png",
  x306: "/img/1-2-0-home-discovery-expanded-3-06-48852C3B-09ED-461E-B1D3-CAC883834B62@2x.png",
  x304: "/img/1-2-0-home-discovery-expanded-3-04-9E0E7395-D4C9-4EC8-85F1-77089B9A1C33@2x.png",
  x303: "/img/1-2-0-home-discovery-expanded-3-03-DB583BE1-3B51-4D94-8CF0-3AAD512D7D66@2x.png",
};

const categories2Data = {
  catgories: "Catégories",
  comdie: "/img/1-2-0-home-discovery-expanded-bg-copy-7AAC0C93-BD1A-4908-BF38-8FCF94E29098@2x.png",
  react: "React",
  icArrowCopy2: "/img/1-2-0-home-discovery-expanded-ic-arrow-copy-4-604EDDFD-2FF2-431B-BBD3-5A93533F73C0@3x.png",
  action: "/img/1-2-0-home-discovery-expanded-bg-copy-2-05D0AC4F-D9F0-43EA-87C0-718126A007C7@2x.png",
  javascript: "Javascript",
  icArrowCopy3: "/img/1-2-0-home-discovery-expanded-ic-arrow-copy-4-604EDDFD-2FF2-431B-BBD3-5A93533F73C0@3x.png",
  drame: "/img/1-2-0-home-discovery-expanded-bg-copy-3-81BD1CEC-4255-4A56-A198-2E3C13BA0497@2x.png",
  nodejs: "NodeJS",
  icArrowCopy4: "/img/1-2-0-home-discovery-expanded-ic-arrow-copy-4-604EDDFD-2FF2-431B-BBD3-5A93533F73C0@3x.png",
  sciFi: "/img/1-2-0-home-discovery-expanded-bg-copy-4-11DC7FE1-A9DC-4EBB-9BCA-E57B2949CB08@2x.png",
  mongodb: "MongoDB",
  icArrowCopy5: "/img/1-2-0-home-discovery-expanded-ic-arrow-copy-4-604EDDFD-2FF2-431B-BBD3-5A93533F73C0@3x.png",
  romance: "/img/1-2-0-home-discovery-expanded-bg-copy-5-0F969F2B-A38C-4BF0-BCB9-276181207448@2x.png",
  price: "R",
  icArrowCopy6: "/img/1-2-0-home-discovery-expanded-ic-arrow-copy-4-604EDDFD-2FF2-431B-BBD3-5A93533F73C0@3x.png",
  thriller: "/img/1-2-0-home-discovery-expanded-bg-copy-6-6DC8D222-C210-424A-9C22-0319FF79C69E@2x.png",
  sql: "SQL",
  icArrowCopy7: "/img/1-2-0-home-discovery-expanded-ic-arrow-copy-4-604EDDFD-2FF2-431B-BBD3-5A93533F73C0@3x.png",
  python: "/img/1-2-0-home-discovery-expanded-bg-copy-7-BF75858C-B60B-48A7-9C6B-7F6E2C341161@2x.png",
  python2: "Python",
  icArrow: "/img/1-2-0-home-discovery-expanded-ic-arrow-copy-4-604EDDFD-2FF2-431B-BBD3-5A93533F73C0@3x.png",
};

const footer2Data = {
  icFacebook: "/img/1-2-0-home-discovery-expanded-ic-facebook-4EE09591-D191-4382-9E84-656B7C7DCC1C@3x.png",
  icInstagram: "/img/1-2-0-home-discovery-expanded-ic-instagram-5AE46F6D-4980-4089-82FB-FAB24B29E8A4@3x.png",
  icTwitter: "/img/1-2-0-home-discovery-expanded-ic-twitter-707BB0AD-A8B9-458C-85B0-52917F1662E0@3x.png",
  icYoutube: "/img/1-2-0-home-discovery-expanded-ic-youtube-CF8FCD8C-5EA7-4169-BCF7-76D613EAE1BE@3x.png",
  text1: "Audio et sous-titres",
  presse: "Presse",
  confidentialit: "Confidentialité",
  nousContacter: "Nous contacter",
  serviceCode: "Service Code",
  x19972018Netfl: " © 1997-2018 Netflix, Inc.",
  autodescription: "Autodescription",
  relationsInvestisse: "Relations investisseurs",
  informationsLga: "Informations légales",
  centreDaide: "Centre d’aide",
  recrutement: "Recrutement",
  prfrencesDe: "Préférences de cookies",
  cartesCadeaux: "Cartes cadeaux",
  conditionsDut: "Conditions d’utilisation",
  mentionsLgales: "Mentions légales",
};

const x120HomeDiscoveryExpandedData = {
  leCartelDeCaliRe: "JEUNESSE",
  icNotification: "/img/1-2-0-home-discovery-expanded-ic-notification-2F91A929-D854-4BB1-96E2-0173DA412D9B@3x.png",
  placeholderAvatar: "/img/1-2-0-home-discovery-expanded-placeholder-avatar-0517BE3B-5723-4B0D-854D-E4BB9EEA308F@2x.png",
  icDropdown: "/img/1-2-0-home-discovery-expanded-ic-dropdown-320A0D90-5167-443E-8EE7-514F01F68DA1@3x.png",
  logoNetflix: "/img/edtube-logo.png",
  icPlay2: "/img/1-2-0-home-discovery-expanded-bg-poland-DBA77BB1-1269-4D94-8821-56F0F51381F8@2x.png",
  bgPoland: "/img/1-2-0-home-discovery-expanded-ic-close-AC1E90C4-2A69-4E59-9216-79737FEC474E@3x.png",
  ida: "/img/1-2-0-home-discovery-expanded-hq720-70C2492F-79C4-48AC-928F-1490F52D9B2B.jpg",
  icPlus: "/img/1-2-0-home-discovery-expanded-ic-play-16820540-032C-45D6-9A37-4281A8268F96@3x.png",
  regardezLaSaison3: "Ida",
  title: "2013 ‧ Drame ‧ 1h 22m",
  firstRowProps2: hero2Data,
  firstRowProps: search3Data,
  firstRowProps22: firstRow3Data,
  firstRow2Props: firstRow4Data,
  firstRowProps3: head2Data,
  firstRowProps4: ilsAimaientLaVie2Data,
  firstRowProps5: coldWar2Data,
  firstRowProps6: leCouteauDansLeau2Data,
  firstRow2Props2: tabs2Data,
  firstRow2Props3: thirdRowChannels2Data,
  firstRow2Props4: categories2Data,
  firstRow2Props5: footer2Data,
};


