import styled from "styled-components";

export const StyledNutrionsFacts = styled.div`
    display: flex;
    flex-direction: column;
    color: #3D405B;
`;


export const styledTopStatusSection = styled.div`
    justify-content: space-between;
    align-items: center;
    display: flex;
    margin: 10px;

    h1{
        font-size: 25px;
    }

    h2{
        font-size: 20px;
    }
`;


export const styledBottonStatusSection = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: 1px solid #f28482;
    margin: 5px;
    border-radius: 20px;
    padding: 10px;
    
    div{
        text-align: center;
        align-items: center;


        span{
            font-weight: bold;
            font-size:20px;
        }

        p{
            font-style: italic;
        }
    }
`;