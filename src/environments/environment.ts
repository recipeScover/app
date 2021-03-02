// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'https://www.themealdb.com/api/json/v1/1',
 firebaseConfig : {
  apiKey: "AIzaSyCc7OL6rBhOduQn4CU10LtGyq6nZsjnrXk",
  authDomain: "food-app-login.firebaseapp.com",
  projectId: "food-app-login",
  storageBucket: "food-app-login.appspot.com",
  messagingSenderId: "801313107348",
  appId: "1:801313107348:web:4cca5a054f1b4ee81a3381"
}
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
