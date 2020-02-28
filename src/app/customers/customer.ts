
import firebase from 'firebase';
 
export class Customer {
  key: string;
  name: string;
  birth: Date;
  birthDB: firebase.firestore.Timestamp;
  active = true;
  ageDB: number;

  
}
