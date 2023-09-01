import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import Intro1Svg from "../assets/1.svg";
import Intro2Svg from "../assets/2.svg";
import Intro3Svg from "../assets/3.svg";
import { IonButton, IonText } from "@ionic/react";
import "swiper/css"
import "./intro.css"

interface ContainerProps {
  onFinish: () => void;
}

const SwiperNextButton = ({children}: any)=> {
  const swiper = useSwiper();
  return (
    <IonButton onClick={()=> swiper.slideNext()}>{children}</IonButton>
  )
}

const Intro: React.FC<ContainerProps> = ({onFinish}) => {
  return (
    <Swiper>
      <SwiperSlide>
        <img src={Intro1Svg} alt="Intro 1" />
        <IonText>
          <h3>Welcome To the Awesome App build with Ionic</h3>
        </IonText>
        <SwiperNextButton>Next</SwiperNextButton>
      </SwiperSlide>
      <SwiperSlide>
        <img src={Intro2Svg} alt="Intro 2" />
        <IonText>
          <h3>Build powerful apps with Capacitor</h3>
        </IonText>
        <SwiperNextButton>Next</SwiperNextButton>
      </SwiperSlide>
      <SwiperSlide>
        <img src={Intro3Svg} alt="Intro 3" />
        <IonText>
          <h3>Enjoy</h3>
        </IonText>
        <IonButton onClick={()=>onFinish()}>Finish</IonButton>
      </SwiperSlide>
      
    </Swiper>
  );
};

export default Intro;
