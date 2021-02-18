import React,{ useRef, useEffect , useState} from 'react'

const {tableau} = window;
const dash = 'https://public.tableau.com/views/Islamophobia_Test/Dashboard23'
const home1 = 'https://public.tableau.com/views/Islamophobia_Final/Home1?:language=en&:embed=y&:embed_code_version=3&:loadOrderID=0&:display_count=y&:origin=viz_share_link'
const home2 = 'https://public.tableau.com/views/Islamophobia_Final/Home2?:language=en&:embed=y&:embed_code_version=3&:loadOrderID=0&:display_count=y&:origin=viz_share_link'
const home3 = 'https://public.tableau.com/views/Islamophobia_Final/Home3?:language=en&:embed=y&:embed_code_version=3&:loadOrderID=0&:display_count=y&:origin=viz_share_link'
 const Tableau = (props)=>{
     const ref= useRef(null)
     console.log(ref,'ref')
     const [option, setOption] = useState("");
     const url=props.url
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
        <div ref={ref}></div>
    );
}
export default Tableau;