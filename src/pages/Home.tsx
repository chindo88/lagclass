import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFooter } from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
    
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Welcome, Zainab Chindo Abubakar </IonTitle>
        </IonToolbar>
      </IonHeader>

      
      <IonContent className="custom-content">
        <h1>Welcome to Bootcamp</h1>
      </IonContent>

      
      <IonFooter>
        <IonToolbar>
          <IonTitle className="footer-text">Day 1 Assignment</IonTitle>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};


export default Home;
