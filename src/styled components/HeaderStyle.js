
import styled from "styled-components";


const HeaderStyle = styled.header`

    width: 375px;
    height: 240px;
    background: url(/images/bg-main-mobile.png) no-repeat;
    background-size: cover;
    position: relative;
    margin-bottom: 91px;
    
    .back{
        width: 286px;
        position: relative;
        top: 32px;
        left: 73px;
        z-index: 3;
    }

    .CardCode{
        font-size: 9px;
        font-weight: 500;
        letter-spacing: 1.29px;
        color: #fff;
        position: absolute;
        top: 73.6px;
        right:37px;
    }

    .BackImg{
        width: 286px;
        height: 157px;
    }

    .front{
        width: 285px;
        position: relative;
        top: -40px;
        left: 17px;
        z-index: 6;
    }

    .frontImg{
        width: 285px;
        height: 156.2px;
    }
    
    .logo{
        width: 54px;
        height: 30px;
        position: absolute;
        top: 17.6px;
        left: 19px;
    }

    .CardNumber{
        font-size: 18px;
        font-weight: 500;
        letter-spacing: 2.2px;
        color: #fff;
        position: absolute;
        left: 19px;
        top: 84.6px;
    }

    .CardName{
        font-size: 9px;
        font-weight: 500;
        letter-spacing: 1.29px;
        color: #fff;
        position: absolute;
        left: 19px;
        top: 124.6px;
    }

    .CardDate{
        font-size: 9px;
        font-weight: 500;
        letter-spacing: 1.29px;
        color: #fff;
        position: absolute;
        right: 20.9px;
        top: 124.6px;
    }


@media only screen and (min-width:1440px)  {
        
    width: 38%;
    height: 100vh;
    background: url(/images/bg-main-desktop.png) no-repeat;
    background-size: cover;
    margin: 0 349px 0 0;
    
    .back{
        width: 447px;
        top: 52%; 
        left: 57.7%;
    }

    .CardCode{
        font-size: 14px;
        letter-spacing: 2px;
        top: 111px;
        right:57px;
    }

    .BackImg{
        width: 447px;
        height: 245px;
    }

    .front{
        width: 447px;
        top: 10%;
        left: 36.6%;
    }

    .frontImg{
        width: 447px;
        height: 245px;
    }
    
    .logo{
        width: 85px;
        height: 47px;
        top: 28px;
        left: 32px;
    }

    .CardNumber{
        font-size: 28px;
        letter-spacing: 3.42px;
        left: 32px;
        top: 139px;
    }

    .CardName{
        font-size: 14px;
        letter-spacing: 2px;
        left: 32px;
        top: 200.5px;
    }

    .CardDate{
        font-size: 14px;
        letter-spacing: 2px;
        right: 32px;
        top: 200.5px;
    }



    }

`



export { HeaderStyle }