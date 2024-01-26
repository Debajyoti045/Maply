import { useEffect, useState } from "react"
import Map from "../components/Map"
import Sidebar from "../components/Sidebar"
import User from "../components/User"
import styles from './AppLayout.module.css'

function AppLayout(){

// const [showSidebar,setShowSidebar] = useState(true)

//     useEffect(()=>{
//         console.log(window.outerWidth);
//         if(window.outerWidth < 600) setShowSidebar(false)
//     },[window.outerWidth])


    return(
        
        <div className={styles.app}>
            {/* {showSidebar &&  (
            <div > */}
            <Sidebar />
            {/* </div>
            )} */}
            
            <Map />
          
            <User />
        </div>
    )
}

export default AppLayout
