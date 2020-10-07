import { IonCard, IonCardContent } from '@ionic/react';
import React from 'react';

const BmiResult: React.FC<{ result: number }> = (props) => {
  return (
    <IonCard color="secondary">
      <IonCardContent className="ion-text-center">
        <h2>Your Body Mass Index (BMI)</h2>
        <h3>{props.result.toFixed(2)}</h3>
      </IonCardContent>
    </IonCard>
  );
};

export default BmiResult;
