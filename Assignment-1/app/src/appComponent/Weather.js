function Weather({number}){
 
    if(number>25){
       return (<>It's sunny today!</>) ;
    }
    else if(number<10){
          return (<><p>It's cold today!</p></>) ;
    }
    else {
        return (
         <>
         <p>Today temperature is {number}</p>
         </>
        ) ;
    }


}
export default Weather ;