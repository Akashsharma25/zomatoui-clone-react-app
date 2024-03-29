import React, { useState } from 'react'
import Header from '../../components/common/header';
import TabOptions from '../../components/common/tabOptions';
import Footer from '../../components/common/footer';
import Delivery from '../../components/delivery';
import DiningOut from '../../components/diningOut';
import NightLife from '../../components/nightLife';

const getCorrectScreen=(tab)=>{
  switch(tab){
    case "Delivery":
      return <Delivery/>
    case "Dining Out":
      return <DiningOut/>
    case "Night Life":
      return <NightLife/>
    default:
      return <NightLife/>
  }
}

const HomePage = () => {
  const[activeTab, setActiveTab]=useState("Delivery")

  return (
    <div>
      <Header/>
      <TabOptions activeTab={activeTab} setActiveTab={setActiveTab}/>
      {getCorrectScreen(activeTab)}
      <Footer/>
    </div>
  )
};


export default HomePage;
