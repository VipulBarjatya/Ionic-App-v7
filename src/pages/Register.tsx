import {
  IonBackButton,
  IonButton,
  IonButtons,
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
import React from "react";
import { checkmarkDoneOutline } from "ionicons/icons";

const Register: React.FC = () => {
    const router = useIonRouter()

  const handleUserRegister = (event: any) => {
    event.preventDefault();
    console.log("Register event");
    router.goBack()
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={"primary"}>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>Create Account</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent scrollY={false}>
        <IonCard>
          <IonCardContent>
            <form onSubmit={handleUserRegister}>
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
                Create My Account
                <IonIcon icon={checkmarkDoneOutline} slot="end"></IonIcon>
              </IonButton>
            </form>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Register;
