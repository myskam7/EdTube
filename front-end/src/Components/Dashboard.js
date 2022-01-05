// import React, {Component} from 'react';
// import PropTypes from 'prop-types';
// import SearchBar from "./SearchBar";
// import SearchResults from "./SearchResults/index";
// import './dashboard.css'
// import FirstRow from "./FirstRow";
// import NavBar from "./NavBar";
//
//
// class Dashboard extends Component {
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             searchResults : [],
//             error: false,
//         }
//         this.dataHandler = this.dataHandler.bind(this);
//         this.clearResults = this.clearResults.bind(this);
//     }
//
//     //listerner to check if search came back with data
//     async dataHandler(data) {
//
//         for(var key in data.items) {
//             let item = data.items[key];
//
//             // console.log("res sample data", data.items[key])
//             // console.log("searchResults", this.state.searchResults)
//
//                await this.setState({searchResults: [...this.state.searchResults, {
//                         id: item.id.videoId,
//                         channelTitle: item.snippet.channelTitle,
//                         publishedAt: item.snippet.publishedAt,
//                         title: item.snippet.title,
//                         channelId: item.snippet.channelId,
//                         description: item.snippet.description,
//                         link: `https://www.youtube.com/watch?v=${item.id.videoId}`,
//                         thumbnails: item.snippet.thumbnails
//                     }]
//                 })
//         }
//
//         // this.setState({isLoading: false});
//     }
//
//
//     //clear results when searching
//     clearResults () {
//         this.setState({   searchResults : []})
//    }
//
//
//
//
//     render() {
//         const {searchResults} = this.state;
//         const {
//             title,
//             regardezLaSaison3,
//             leCartelDeCaliRe,
//             icPlay,
//             spanText,
//             spanText2,
//             icPlus,
//             myList,
//             icSearch,
//             jeunesse,
//             icNotification,
//             placeholderAvatar,
//             icDropdown,
//             logoNetflix,
//             bgPoland,
//             icClose,
//             logoAgePolonais,
//             netflixDcouvert,
//             andrzejWajdaRoman,
//             ida,
//             icPlay2,
//             name,
//             text_Label,
//             ilsAimaientLaVie,
//             icPlayCopy4,
//             ilsAimaientLaVie2,
//             spanText3,
//             spanText4,
//             spanText5,
//             spanText6,
//             spanText7,
//             coldWar,
//             icPlayCopy2,
//             coldWar2,
//             text_Label2,
//             hq7204,
//             icPlayCopy3,
//             leCouteauDansLEa,
//             spanText8,
//             spanText9,
//             spanText10,
//             spanText11,
//             spanText12,
//             text_Label3,
//             laNouvelleVagueFr,
//             directionCannesMa,
//             bollywoodClassiques,
//             programmesOriginaux,
//             icArrowCopy,
//             x302,
//             x301,
//             x307,
//             x305,
//             x306,
//             x304,
//             x303,
//             catgories,
//             comdie,
//             react,
//             icArrowCopy2,
//             action,
//             javascript,
//             icArrowCopy3,
//             drame,
//             nodejs,
//             icArrowCopy4,
//             sciFi,
//             mongodb,
//             icArrowCopy5,
//             romance,
//             price,
//             icArrowCopy6,
//             thriller,
//             sql,
//             icArrowCopy7,
//             python,
//             python2,
//             icArrow,
//             icFacebook,
//             icInstagram,
//             icTwitter,
//             icYoutube,
//             text1,
//             presse,
//             confidentialit,
//             nousContacter,
//             serviceCode,
//             x19972018Netfl,
//             autodescription,
//             relationsInvestisse,
//             informationsLga,
//             centreDaide,
//             recrutement,
//             prfrencesDe,
//             cartesCadeaux,
//             conditionsDut,
//             mentionsLgales,
//             firstRowProps,
//             firstRow2Props,
//         } = {
//             s:"./Components/img/1-2-0-home-discovery-expanded-ic-play-copy-3-102A36E1-4498-41EC-A828-5F360785961D@3x.png",
//             title: "React Tutorial",
//             regardezLaSaison3: "Regardez la saison 3 maintenant",
//             leCartelDeCaliRe: "Le cartel de Cali reprend le pouvoir en Colombie. Les successeurs d’Escobar passent à l’action et déclarent la guerre au gouvernement.",
//             icPlay: "/img/1-2-0-home-discovery-expanded-ic-play-960CF728-C580-481E-9A75-1269BAD9B5BA@3x.png",
//             spanText: "Lectur",
//             spanText2: "e",
//             icPlus: "/img/1-2-0-home-discovery-expanded-ic-plus-F3587FEB-463E-4C81-BC02-1822FDB9329F@3x.png",
//             myList: "My List",
//             icSearch: "/img/search-logo.png",
//             jeunesse: "JEUNESSE",
//             icNotification: "/img/1-2-0-home-discovery-expanded-ic-notification-2F91A929-D854-4BB1-96E2-0173DA412D9B@3x.png",
//             placeholderAvatar: "/img/1-2-0-home-discovery-expanded-placeholder-avatar-0517BE3B-5723-4B0D-854D-E4BB9EEA308F@2x.png",
//             icDropdown: "/img/1-2-0-home-discovery-expanded-ic-dropdown-320A0D90-5167-443E-8EE7-514F01F68DA1@3x.png",
//             logoNetflix: "/img/edtube-logo.png",
//             bgPoland: "/img/1-2-0-home-discovery-expanded-bg-poland-DBA77BB1-1269-4D94-8821-56F0F51381F8@2x.png",
//             icClose: "/img/1-2-0-home-discovery-expanded-ic-close-AC1E90C4-2A69-4E59-9216-79737FEC474E@3x.png",
//             logoAgePolonais: "/img/1-2-0-home-discovery-expanded-logo-age-polonais-D4F17E6B-9525-4BD9-AFD0-4D0A48E16830@3x.png",
//             netflixDcouvert: "Netflix Découverte - Juillet 2018",
//             andrzejWajdaRoman: "Andrzej Wajda, Roman Polański, Agnieszka Holland, Paweł Pawlikowski… Découvrez ceux qui ont fait connaitre le cinéma polonais sur la scène internationale.",
//             ida: "/img/1-2-0-home-discovery-expanded-hq720-70C2492F-79C4-48AC-928F-1490F52D9B2B.jpg",
//             icPlay2: "/img/1-2-0-home-discovery-expanded-ic-play-16820540-032C-45D6-9A37-4281A8268F96@3x.png",
//             name: "Ida",
//             text_Label: "2013 ‧ Drame ‧ 1h 22m",
//             ilsAimaientLaVie: "/img/1-2-0-home-discovery-expanded-hq720-2-9C55C34C-40E1-43AC-A3EF-0D46E387CB53.jpg",
//             icPlayCopy4: "/img/1-2-0-home-discovery-expanded-ic-play-16820540-032C-45D6-9A37-4281A8268F96@3x.png",
//             ilsAimaientLaVie2: "Ils aimaient la vie",
//             spanText3: "1957 ",
//             spanText4: "‧",
//             spanText5: " Drame ",
//             spanText6: "‧",
//             spanText7: " 1h 35m",
//             coldWar: "/img/1-2-0-home-discovery-expanded-hq720-3-F70D0E9B-E1FB-4AD0-A55E-C79DDD4F4211.jpg",
//             icPlayCopy2: "/img/1-2-0-home-discovery-expanded-ic-play-16820540-032C-45D6-9A37-4281A8268F96@3x.png",
//             coldWar2: "Cold War",
//             text_Label2: "2018 ‧ Drame/Mélodrame ‧ 1h 25m",
//             hq7204: "/img/1-2-0-home-discovery-expanded-hq720-4-BD523338-E0E6-44D4-AEF6-87CF9A5BB985.jpg",
//             icPlayCopy3: "/img/1-2-0-home-discovery-expanded-ic-play-copy-3-102A36E1-4498-41EC-A828-5F360785961D@3x.png",
//             leCouteauDansLEa: "Le Couteau dans l'eau",
//             spanText8: "1962 ",
//             spanText9: "‧",
//             spanText10: " Thriller/Drame ",
//             spanText11: "‧",
//             spanText12: " 1h 41m",
//             text_Label3: "L’âge d’or du cinéma polonais (juillet 2018)",
//             laNouvelleVagueFr: "La nouvelle vague française (juin 2018)",
//             directionCannesMa: "Direction Cannes (mai 2018)",
//             bollywoodClassiques: "Bollywood Classiques (mai 2018)",
//             programmesOriginaux: "PROGRAMMES ORIGINAUX NETFLIX",
//             icArrowCopy: "/img/1-2-0-home-discovery-expanded-ic-arrow-copy-3C6DD94F-D253-4840-B8A4-8BB46D5A75C9@3x.png",
//             x302: "/img/1-2-0-home-discovery-expanded-3-02-16E176B4-6F38-4BD9-8121-163F944CF8E7@2x.png",
//             x301: "/img/1-2-0-home-discovery-expanded-3-01-21ABF04A-66E9-416D-9762-D289768B6F7A@2x.png",
//             x307: "/img/1-2-0-home-discovery-expanded-3-07-CC84984F-4280-4BC7-828C-2FBC2476FE85@2x.png",
//             x305: "/img/1-2-0-home-discovery-expanded-3-05-055943DA-E55E-4FF7-A485-0DDC08CDDC50@2x.png",
//             x306: "/img/1-2-0-home-discovery-expanded-3-06-48852C3B-09ED-461E-B1D3-CAC883834B62@2x.png",
//             x304: "/img/1-2-0-home-discovery-expanded-3-04-9E0E7395-D4C9-4EC8-85F1-77089B9A1C33@2x.png",
//             x303: "/img/1-2-0-home-discovery-expanded-3-03-DB583BE1-3B51-4D94-8CF0-3AAD512D7D66@2x.png",
//             catgories: "Catégories",
//             comdie: "/img/1-2-0-home-discovery-expanded-bg-copy-7AAC0C93-BD1A-4908-BF38-8FCF94E29098@2x.png",
//             react: "React",
//             icArrowCopy2: "/img/1-2-0-home-discovery-expanded-ic-arrow-copy-4-604EDDFD-2FF2-431B-BBD3-5A93533F73C0@3x.png",
//             action: "/img/1-2-0-home-discovery-expanded-bg-copy-2-05D0AC4F-D9F0-43EA-87C0-718126A007C7@2x.png",
//             javascript: "Javascript",
//             icArrowCopy3: "/img/1-2-0-home-discovery-expanded-ic-arrow-copy-4-604EDDFD-2FF2-431B-BBD3-5A93533F73C0@3x.png",
//             drame: "/img/1-2-0-home-discovery-expanded-bg-copy-3-81BD1CEC-4255-4A56-A198-2E3C13BA0497@2x.png",
//             nodejs: "NodeJS",
//             icArrowCopy4: "/img/1-2-0-home-discovery-expanded-ic-arrow-copy-4-604EDDFD-2FF2-431B-BBD3-5A93533F73C0@3x.png",
//             sciFi: "/img/1-2-0-home-discovery-expanded-bg-copy-4-11DC7FE1-A9DC-4EBB-9BCA-E57B2949CB08@2x.png",
//             mongodb: "MongoDB",
//             icArrowCopy5: "/img/1-2-0-home-discovery-expanded-ic-arrow-copy-4-604EDDFD-2FF2-431B-BBD3-5A93533F73C0@3x.png",
//             romance: "/img/1-2-0-home-discovery-expanded-bg-copy-5-0F969F2B-A38C-4BF0-BCB9-276181207448@2x.png",
//             price: "R",
//             icArrowCopy6: "/img/1-2-0-home-discovery-expanded-ic-arrow-copy-4-604EDDFD-2FF2-431B-BBD3-5A93533F73C0@3x.png",
//             thriller: "/img/1-2-0-home-discovery-expanded-bg-copy-6-6DC8D222-C210-424A-9C22-0319FF79C69E@2x.png",
//             sql: "SQL",
//             icArrowCopy7: "/img/1-2-0-home-discovery-expanded-ic-arrow-copy-4-604EDDFD-2FF2-431B-BBD3-5A93533F73C0@3x.png",
//             python: "/img/1-2-0-home-discovery-expanded-bg-copy-7-BF75858C-B60B-48A7-9C6B-7F6E2C341161@2x.png",
//             python2: "Python",
//             icArrow: "/img/1-2-0-home-discovery-expanded-ic-arrow-copy-4-604EDDFD-2FF2-431B-BBD3-5A93533F73C0@3x.png",
//             icFacebook: "/img/1-2-0-home-discovery-expanded-ic-facebook-4EE09591-D191-4382-9E84-656B7C7DCC1C@3x.png",
//             icInstagram: "/img/1-2-0-home-discovery-expanded-ic-instagram-5AE46F6D-4980-4089-82FB-FAB24B29E8A4@3x.png",
//             icTwitter: "/img/1-2-0-home-discovery-expanded-ic-twitter-707BB0AD-A8B9-458C-85B0-52917F1662E0@3x.png",
//             icYoutube: "/img/1-2-0-home-discovery-expanded-ic-youtube-CF8FCD8C-5EA7-4169-BCF7-76D613EAE1BE@3x.png",
//             text1: "Audio et sous-titres",
//             presse: "Presse",
//             confidentialit: "Confidentialité",
//             nousContacter: "Nous contacter",
//             serviceCode: "Service Code",
//             x19972018Netfl: " © 1997-2018 Netflix, Inc.",
//             autodescription: "Autodescription",
//             relationsInvestisse: "Relations investisseurs",
//             informationsLga: "Informations légales",
//             centreDaide: "Centre d’aide",
//             recrutement: "Recrutement",
//             prfrencesDe: "Préférences de cookies",
//             cartesCadeaux: "Cartes cadeaux",
//             conditionsDut: "Conditions d’utilisation",
//             mentionsLgales: "Mentions légales",
//             // firstRowProps: firstRowData,
//             // firstRow2Props: firstRow2Data,
//         };
//
//         return (
//             <div class="container-center-horizontal">
//                 <div className="a120homediscoveryexpanded screen" >
//                     <div style={{height: "300px", position: "relative", display: "flex", width: "100%", padding: "0 50px"}}>
//                         <NavBar clearResults={this.clearResults} dataHandler={ this.dataHandler} />
//                         {/*<div>*/}
//                         {/*    <img className="logo-netflix" src={logoNetflix} />*/}
//                         {/*</div>*/}
//
//                     </div>
//                     <div  className="overlap-group-1">
//                         <div className="hero">
//                             <h1 className="title">{title}</h1>.overlap-group-1
//                             <div className="description">
//                                 <div className="regardez-la-saison-3 helveticaneue-normal-white-26px">{regardezLaSaison3}</div>
//                                 <div className="le-cartel-de-cali-re helveticaneue-normal-white-20px-2">{leCartelDeCaliRe}</div>
//                             </div>
//                             <div className="flex-row">
//                                 <div className="btn-play">
//                                     <img className="ic-play-1" src={icPlay} />
//                                     <div className="lecture helveticaneue-normal-white-16px">
//                                         <span className="span helveticaneue-normal-white-16px">{spanText}</span>
//                                         <span className="span helveticaneue-normal-white-16px">{spanText2}</span>
//                                     </div>
//                                 </div>
//
//                             </div>
//                         </div>
//                     </div>
//                     <div className="playlist">
//                         <FirstRow {...firstRowProps} />
//                         <FirstRow {...firstRow2Props} />
//                         <div className="discovery">
//                             <div className="overlap-group1">
//                                 {/*<img className="bg-poland" src={bgPoland} />*/}
//                                 {/*<img className="ic-close" src={icClose} />*/}
//
//                                 {/*                     {*/}
//                                 {/*                        <SearchResults items={searchResults} />*/}
//                                 {/*                    }*/}
//                                 <div className="content">
//                                     <div className="head">
//                                         <img className="logo-age-polonais" src={logoAgePolonais} />
//                                         <div className="netflix-dcouvert helveticaneue-normal-white-26px">{netflixDcouvert}</div>
//                                         <div className="andrzej-wajda-roman helveticaneue-normal-white-20px-2">{andrzejWajdaRoman}</div>
//                                     </div>
//                                     <div className="film-list">
//                                         <div className="ida" style={{ backgroundImage: `url(${ida})` }}>
//                                             <img className="ic-play" src={icPlay2} />
//                                             <div className="overlap-group">
//                                                 <div className="name helveticaneue-normal-white-22px">{name}</div>
//                                                 <p className="textlabel helveticaneue-normal-white-16px">{text_Label}</p>
//                                             </div>
//                                         </div>
//                                         <div className="ils-aimaient-la-vie" style={{ backgroundImage: `url(${ilsAimaientLaVie})` }}>
//                                             <img className="ic-play" src={icPlayCopy4} />
//                                             <div className="overlap-group4">
//                                                 <div className="ils-aimaient-la-vie-1 helveticaneue-normal-white-22px">{ilsAimaientLaVie2}</div>
//                                                 <p className="textlabel-1 helveticaneue-normal-white-16px">
//                                                     <span className="span-1 helveticaneue-normal-white-16px">{spanText3}</span>
//                                                     <span className="span-2 lucidagrande-normal-white-16px">{spanText4}</span>
//                                                     <span className="span-1 helveticaneue-normal-white-16px">{spanText5}</span>
//                                                     <span className="span-2 lucidagrande-normal-white-16px">{spanText6}</span>
//                                                     <span className="span-1 helveticaneue-normal-white-16px">{spanText7}</span>
//                                                 </p>
//                                             </div>
//                                         </div>
//                                         <div className="cold-war" style={{ backgroundImage: `url(${coldWar})` }}>
//                                             <img className="ic-play" src={icPlayCopy2} />
//                                             <div className="overlap-group">
//                                                 <div className="cold-war-1 helveticaneue-normal-white-22px">{coldWar2}</div>
//                                                 <p className="textlabel helveticaneue-normal-white-16px">{text_Label2}</p>
//                                             </div>
//                                         </div>
//                                         <div className="le-couteau-dans-leau">
//                                             <img className="hq720-4" src={hq7204} />
//                                             <div className="flex-col">
//                                                 <img className="ic-play-copy-3" src={icPlayCopy3} />
//                                                 <div className="le-couteau-dans-lea helveticaneue-normal-white-22px">{leCouteauDansLEa}</div>
//                                                 <p className="x1962-thriller helveticaneue-normal-white-16px">
//                                                     <span className="span-1 helveticaneue-normal-white-16px">{spanText8}</span>
//                                                     <span className="span-2 lucidagrande-normal-white-16px">{spanText9}</span>
//                                                     <span className="span-1 helveticaneue-normal-white-16px">{spanText10}</span>
//                                                     <span className="span-2 lucidagrande-normal-white-16px">{spanText11}</span>
//                                                     <span className="span-1 helveticaneue-normal-white-16px">{spanText12}</span>
//                                                 </p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="tabs">
//                             <div className="titles">
//                                 <div className="textlabel-2">{text_Label3}</div>
//                                 <div className="la-nouvelle-vague-fr helveticaneue-normal-red-20px">{laNouvelleVagueFr}</div>
//                                 <div className="direction-cannes-ma helveticaneue-normal-red-20px">{directionCannesMa}</div>
//                                 <div className="bollywood-classiques">{bollywoodClassiques}</div>
//                             </div>
//                             <div className="underline"></div>
//                         </div>
//                         <div className="third-row-channels">
//                             <div className="flex-row-1">
//                                 <div className="programmes-originaux helveticaneue-normal-white-20px">{programmesOriginaux}</div>
//                                 <img className="ic-arrow-copy" src={icArrowCopy} />
//                             </div>
//                             <div className="flex-row-2">
//                                 <img className="x3-02" src={x302} />
//                                 <img className="x3-0" src={x301} />
//                                 <img className="x3-0" src={x307} />
//                                 <img className="x3-0" src={x305} />
//                                 <img className="x3-0" src={x306} />
//                                 <img className="x3-0" src={x304} />
//                                 <img className="x3-03" src={x303} />
//                             </div>
//                         </div>
//                         <div className="categories">
//                             <div className="flex-col-1">
//                                 <div className="catgories helveticaneue-normal-white-20px">{catgories}</div>
//                                 <div className="comdie" style={{ backgroundImage: `url(${comdie})` }}>
//                                     <div className="react helveticaneue-normal-white-20px">{react}</div>
//                                     <img className="ic-arrow-copy-2" src={icArrowCopy2} />
//                                 </div>
//                             </div>
//                             <div className="action" style={{ backgroundImage: `url(${action})` }}>
//                                 <div className="javascript helveticaneue-normal-white-20px">{javascript}</div>
//                                 <img className="ic-arrow" src={icArrowCopy3} />
//                             </div>
//                             <div className="drame" style={{ backgroundImage: `url(${drame})` }}>
//                                 <div className="node-js helveticaneue-normal-white-20px">{nodejs}</div>
//                                 <img className="ic-arrow-copy-4" src={icArrowCopy4} />
//                             </div>
//                             <div className="sci-fi" style={{ backgroundImage: `url(${sciFi})` }}>
//                                 <div className="mongo-db helveticaneue-normal-white-20px">{mongodb}</div>
//                                 <img className="ic-arrow" src={icArrowCopy5} />
//                             </div>
//                             <div className="romance" style={{ backgroundImage: `url(${romance})` }}>
//                                 <div className="price helveticaneue-normal-white-20px">{price}</div>
//                                 <img className="ic-arrow-copy-6" src={icArrowCopy6} />
//                             </div>
//                             <div className="thriller" style={{ backgroundImage: `url(${thriller})` }}>
//                                 <div className="sql helveticaneue-normal-white-20px">{sql}</div>
//                                 <img className="ic-arrow" src={icArrowCopy7} />
//                             </div>
//                             <div className="python" style={{ backgroundImage: `url(${python})` }}>
//                                 <div className="python-1 helveticaneue-normal-white-20px">{python2}</div>
//                                 <img className="ic-arrow" src={icArrow} />
//                             </div>
//                         </div>
//                     </div>
//                     <div className="footer">
//                         <div className="flex-col-2">
//                             <div className="socials">
//                                 <img className="ic-facebook" src={icFacebook} />
//                                 <img className="ic-instagram" src={icInstagram} />
//                                 <img className="ic-twitter" src={icTwitter} />
//                                 <img className="ic-youtube" src={icYoutube} />
//                             </div>
//                             <div className="column-1">
//                                 <div className="text-1 helveticaneue-normal-mountain-mist-14px">{text1}</div>
//                                 <div className="presse helveticaneue-normal-mountain-mist-14px">{presse}</div>
//                                 <div className="confidentialit helveticaneue-normal-mountain-mist-14px">{confidentialit}</div>
//                                 <div className="nous-contacter helveticaneue-normal-mountain-mist-14px">{nousContacter}</div>
//                             </div>
//                             <div className="under">
//                                 <div className="btn-code">
//                                     <div className="overlap-group1-1">
//                                         <div className="service-code">{serviceCode}</div>
//                                         <div className="rectangle-2"></div>
//                                     </div>
//                                 </div>
//                                 <p className="x1997-2018-netfl">{x19972018Netfl}</p>
//                             </div>
//                         </div>
//                         <div className="column-2">
//                             <div className="autodescription helveticaneue-normal-mountain-mist-14px">{autodescription}</div>
//                             <div className="relations-investisse helveticaneue-normal-mountain-mist-14px">{relationsInvestisse}</div>
//                             <div className="informations-lga helveticaneue-normal-mountain-mist-14px">{informationsLga}</div>
//                         </div>
//                         <div className="column-3">
//                             <div className="centre-daide helveticaneue-normal-mountain-mist-14px">{centreDaide}</div>
//                             <div className="recrutement helveticaneue-normal-mountain-mist-14px">{recrutement}</div>
//                             <div className="prfrences-de helveticaneue-normal-mountain-mist-14px">{prfrencesDe}</div>
//                         </div>
//                         <div className="column-4">
//                             <div className="cartes-cadeaux helveticaneue-normal-mountain-mist-14px">{cartesCadeaux}</div>
//                             <div className="conditions-dut helveticaneue-normal-mountain-mist-14px">{conditionsDut}</div>
//                             <div className="mentions-lgales helveticaneue-normal-mountain-mist-14px">{mentionsLgales}</div>
//                         </div>
//                     </div>
//                 </div>
//
//
//             </div>
//
//
//
//         );
//     }
//             // <div className="dashboard">
//             //     <div className="dashboard_body">
//             //         <div className="search_bar">
//             //             <SearchBar clearResults={this.clearResults} dataHandler={ this.dataHandler} />
//             //         </div>
//             //         <div className="result_body">
//             //             {/*  when searchResults are true, map through data and return ItemCard  */}
//             //             <div className="search_results">
//             //                 <div className="search_results_body">
//             //
//             //                     {/*<SearchResults items={searchResults} />*/}
//             //
//             //                 </div>
//             //             </div>
//             //
//             //         </div>
//             //
//             //     </div>
//             // </div>
//         // );
//     // }
// }
//
// Dashboard.propTypes = {};
//
// export default Dashboard;
