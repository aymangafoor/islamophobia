import React,{ useRef, useEffect , useState} from 'react'

const {tableau} = window;

 const Tableau = ()=>{
     const ref= useRef(null)
     console.log(ref,'ref')
     const [option, setOption] = useState("");
     const url='https://public.tableau.com/views/Islamophobia_Test/Dashboard23'
     const options={
         device:'desktop',
         "Map View": option
     }
     function initViz(){ 
        new tableau.Viz(ref.current,url,options)
     }
     useEffect(()=>{
         initViz();
     },[])
    return(
        <div>
            <div ref={ref}></div>
        </div>
        
    );
}
export default Tableau;