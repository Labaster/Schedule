import styled from 'styled-components';

export default styled.div.attrs({ id: "hiddenContainer" })`
  display: flex;	
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  
  & > div:first-of-type {
      margin-right: auto ;
  }
  
  @media (max-width: 425px) {
  	width: 100%;
    order: 3;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    & > div:first-of-type {
      margin-right: 0;
  	}
  	
  	& > div:nth-of-type(2) {
        width: 100% !important;
        margin: 10px 0;
    }
    
    & > div:nth-of-type(3) {
      width: 100% !important;
      align-items: center;
      margin: 10px 0;
      padding-top: 18px;
      border-top: 1px solid #837d95;
    }
  }
 
  
  @media (max-width: 768px) {
  	display: none;
  	width: 100%;
    order: 3;
    justify-content: space-between;
    align-items: start;
    margin-top: 25px;
    padding-top: 25px;
    border-top: 1px solid #837d95;
    
    & > div:first-of-type {
      margin-right: 0;
  	}
  	
  	& > div:nth-of-type(2) {
        width: 140px;
    }
  	
  	& > div:nth-of-type(3) {
      width: 230px;
    }
  }
  
  @media (min-width: 992px) {
  	 width: 680px;
  	 
  	 & > div:nth-of-type(2) {
        display: none;
    }
  }
  
  @media (min-width: 1200px) {
    min-width: 875px;
    
    & > div:nth-of-type(2) {
        width: 270px;
    }
  }
  
  @media (min-width: 1280px) {
    width: 950px;
    
    & > div:nth-of-type(2) {
        width: 370px;
    }
    & > div:nth-of-type(2) {
        width: 255px;
    }
  }
    
  @media (min-width: 1570px) {
     width: 1200px;
     
     & > div:first-of-type {
      min-width: 304px;
    }
     
     & > div:nth-of-type(3) {
      width: 255px;
    }
  }
  
  @media (min-width: 1920px) {
     width: 1490px;
     font-size: 16px;
     
     & > div:first-of-type {
      margin-right: auto ;
      min-width: 304px;
    }
  
    & > div:nth-of-type(2) {
      width: 380px;
    }
  
    & > div:nth-of-type(3) {
      width: 275px;
    }
  }
`;