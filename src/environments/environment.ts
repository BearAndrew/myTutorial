// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  googleSheetAPI: {
    SPREADSHEET_ID : '1tkQVwKCbxmiiwhHPdiIOptCC_zg-xj-qhRkz52k5pqM',
    CLIENT_ID : '410245416249-ar8a9en8hb9h6lq6flejedfcthr75lkp.apps.googleusercontent.com',
    API_KEY : 'AIzaSyCE5EVGlfQka7dKI8RYbLbJqOltzUD08KA',
  },
  googleMapAPI: {
    API_KEY : 'AIzaSyATbAwwUGFV7NmaClteGDHdd3GXJO6MNEo',
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
