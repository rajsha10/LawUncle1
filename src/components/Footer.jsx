import styled, { createGlobalStyle } from "styled-components";
import FontspringDEMOBiennaleMedium from "/fonts/Fontspring-DEMO-biennale-medium.otf";
import FontspringDEMOBiennaleBold from "/fonts/Fontspring-DEMO-biennale-bold.otf";


const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Fontspring DEMO Biennale Medium';
    src: url(${FontspringDEMOBiennaleMedium}) format('opentype');
  }
  @font-face {
    font-family: 'Fontspring DEMO Biennale Bold';
    src: url(${FontspringDEMOBiennaleBold}) format('opentype');
  }
`;

const Footer = (props) => {
    return(<>
        <FootArea>
            <InfoArea>
                <h3>LAW UNCLE</h3>
                <p>lawuncle.dev@gmail.com</p>
                <p className="rights">@2024 DevUncle, ALL RIGHTS RESERVED</p>
            </InfoArea>

            {/* <ContactArea>
                <h4>Contact Us</h4>
                <div className="form">
                    <input type="text" placeholder="FULL NAME"/>
                    <input type="email" placeholder="EMIAL@"/>
                </div>
                <button>SEND</button>
            </ContactArea>  */}

            <Icons>
                <a href="https://twitter.com/LawUncles" target="_blank">
                    <img src="/images/twitter.svg" alt="" />
                </a>
                <a href="#" target="_blank">
                    <img src="public/images/insta.svg" alt="" />
                </a>
            </Icons>
        </FootArea>
    </>)
}

const FootArea = styled.div`
    background-color: #28282B;
    height: 30rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

const InfoArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    height: 50%;

    h3{
        font-size: 6rem;
        font-family: 'Fontspring DEMO Biennale Bold';
        color: #f0ebe1;
        text-shadow: 0 0 10px rgba(94,92,88,0.7);
    }

    p{
        font-family: 'Fontspring DEMO Biennale Medium';
        color: grey;
        font-size: 1.8rem;
        
    }
    
    .rights{
        font-size: 1.2rem;
    }
    `;

const Icons = styled.div`
    /* width: 10%; */
    background-color: #f0ebe1;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 1rem 2rem;
    border-radius: 5px;
    gap: 2rem;
    
    img{
        width: 4rem;
        /* box-shadow: 0 0 10px #f0ebe1; */
    }
`;

// const ContactArea = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: space-evenly;
//     height: 100%;
    
//     .form{
//         display: flex;
//         flex-direction: column;
//         font-family: 'Fontspring DEMO Biennale Medium';
//     }
    
//     h4{
//         font-size: 3rem;
//         color: #f0ebe1;
//     }

//     .form input{
//         font-style: 3rem;
//     }
// `;

export default Footer;