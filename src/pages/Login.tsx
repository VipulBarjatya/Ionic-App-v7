import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  useIonLoading,
  useIonRouter,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import { logInOutline, personCircleOutline } from "ionicons/icons";
import Logo from "../assets/group.svg";
import Intro from "../components/intro";
import { Preferences } from "@capacitor/preferences";

const INTRO_KEY = "intro-seen";

const Login: React.FC = () => {
  const router = useIonRouter();
  const [introSeen, setIntroSeen] = useState(false);
  const [present, dismiss] = useIonLoading();

  useEffect(() => {
    const checkStorage = async () => {
      const seen = await Preferences.get({ key: INTRO_KEY });
      console.log("~ file: Login.tsx:17 ~ checkStorage ~ seen:", seen);
      setIntroSeen(seen.value === "true");
    };
    checkStorage();
  }, []);

  const loginAuth = (event: any) => {
    event.preventDefault();
    present("Logging In wait...");
    setTimeout(async () => {
      dismiss();
      router.push("/app", "root");
    }, 2000);
  };

  const finishIntro = async () => {
    setIntroSeen(true);
    Preferences.set({ key: INTRO_KEY, value: "true" });
  };

  const seeIntroAgain = () => {
    setIntroSeen(false);
    Preferences.remove({ key: INTRO_KEY });
  };

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
          <IonContent scrollY={false} className="ion-padding">
            <IonGrid fixed>
              <IonRow className="ion-justify-content-center">
                <IonCol size="12" sizeMd="8" sizeLg="6" sizeXl="4">
                  <IonCard>
                    <IonCardContent>
                      <div className="ion-text-center ion-padding">
                        <img src={Logo} alt="Logo" width={"50%"} />
                      </div>
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
                          <IonIcon
                            icon={personCircleOutline}
                            slot="end"
                          ></IonIcon>
                        </IonButton>
                        <IonButton
                          size="small"
                          color={"medium"}
                          className="ion-margin-top"
                          type="button"
                          expand="block"
                          onClick={seeIntroAgain}
                        >
                          Watch intro again
                          <IonIcon
                            icon={personCircleOutline}
                            slot="end"
                          ></IonIcon>
                        </IonButton>
                      </form>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonContent>
        </IonPage>
      )}
    </>
  );
};

export default Login;
