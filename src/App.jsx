import React from 'react'
import NavBar from './Components/NavBar'
import Header from './Components/Header'
import Reusablecomponents from './Components/Reusablecomponents'
import Card from './Components/Card'
import Footer from './Components/Footer'

function App() {

let data = [

{
 
  icon: 'bi-window m-auto text-primary',
  heading : "Fully Responsive",
  description: "This theme will look great on any device, no matter the size!"
},

{
  icon: "bi-layers m-auto text-primary",
  heading : "Bootstrap 5 Ready",
  description: "Featuring the latest build of the new Bootstrap 5 framework!"
},

{
  icon: "bi-terminal m-auto text-primary",
  heading : "Easy to Use",
  description: "Ready to use with your own content, or customize the source files!"
},

]

  return <>
  
  <NavBar/>
  <Header/>
  <section className="features-icons bg-light text-center">
            <div className="container">
                <div className="row">  
                    {
                   data.map((e,i)=>{
                    return <Reusablecomponents data={e} key={i} />
                   })
                    }
                    
                </div>
            </div>
        </section>  

<Card/>
  <Footer/>\
  </>
}

export default App
