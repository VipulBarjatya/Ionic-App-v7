import {
  IonButton,
  IonCard,
  IonCardContent,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonRouter,
} from "@ionic/react";
import React, { useState } from "react";
import { logInOutline, personCircleOutline } from "ionicons/icons";
import Logo from "../assets/group.svg";
import Intro from "../components/intro";

const Login: React.FC = () => {
  const router = useIonRouter();
  const [introSeen, setIntroSeen] = useState(false);
  const loginAuth = (event: any) => {
    event.preventDefault();
    console.log("Login event");
    // router.push("/home", "root");
  };

const finishIntro = async() => {
  setIntroSeen(true);
}

  return (
    <>
      {!introSeen ? (
        <Intro onFinish={finishIntro} />
      ) : (
        <IonPage>
          <IonHeader>
            <IonToolbar color={"primary"}>
              <IonTitle>Welcome to Ionic App</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <div className="ion-text-center ion-padding">
              <img src={Logo} alt="Logo" width={"50%"} />
            </div>
            <IonCard>
              <IonCardContent>
                <form onSubmit={loginAuth}>
                  <IonInput
                    fill="outline"
                    labelPlacement="floating"
                    label="Email"
                    type="email"
                    placeholder="Enter your email here"
                  ></IonInput>
                  <IonInput
                    className="ion-margin-top"
                    fill="outline"
                    labelPlacement="floating"
                    label="Password"
                    type="password"
                    placeholder="Enter your password here"
                  ></IonInput>
                  <IonButton
                    className="ion-margin-top"
                    type="submit"
                    expand="block"
                  >
                    Login
                    <IonIcon icon={logInOutline} slot="end"></IonIcon>
                  </IonButton>
                  <IonButton
                    routerLink="/register"
                    color={"secondary"}
                    className="ion-margin-top"
                    type="button"
                    expand="block"
                  >
                    Create Account
                    <IonIcon icon={personCircleOutline} slot="end"></IonIcon>
                  </IonButton>
                </form>
              </IonCardContent>
            </IonCard>
          </IonContent>
        </IonPage>
      )}
    </>
  );
};

export default Login;
