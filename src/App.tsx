import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonContent, IonFooter, IonHeader, IonRouterOutlet, IonTabBar, IonTitle, IonToolbar, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import './pages/Home.css';
setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonHeader>
      <IonToolbar color="primary">
        <IonTitle>
          Wellcome, Chindo Zainab Abubakar
        </IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent className="custom-content"> 
      
      <h1 style={{textAlign:"center", paddingTop: "50px",}}>Welcome To Bootcamp</h1>
    </IonContent>
    <IonFooter>
      <IonToolbar>
        <IonTitle className="footer-title">   Day 1 Assignment
        </IonTitle>
      </IonToolbar>
    </IonFooter>
  </IonApp>
);

export default App;
