import { Component, OnInit, NgZone } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-google-sheet-api',
  templateUrl: './google-sheet-api.component.html',
  styleUrls: ['./google-sheet-api.component.scss']
})
export class GoogleSheetApiComponent implements OnInit {

  // Google App Script url
  // gasUrl = 'https://script.google.com/macros/s/AKfycbydI_XHFbfqvB8BSwtsrusKUieDQp01s6U0psnezl3WuxOpDeou/exec';

  // Spreadsheet ID
  SPREADSHEET_ID = '1tkQVwKCbxmiiwhHPdiIOptCC_zg-xj-qhRkz52k5pqM';

  // Client ID and API key from the Developer Console
  CLIENT_ID = '410245416249-ar8a9en8hb9h6lq6flejedfcthr75lkp.apps.googleusercontent.com';
  API_KEY = 'AIzaSyCE5EVGlfQka7dKI8RYbLbJqOltzUD08KA';

  // Array of API discovery doc URLs for APIs used by the quickstart
  DISCOVERY_DOCS = ['https://sheets.googleapis.com/$discovery/rest?version=v4'];

  // Authorization scopes required by the API; multiple scopes can be included, separated by spaces.
  SCOPES = 'https://www.googleapis.com/auth/spreadsheets.readonly';

  // flag of gapi, check if gapi load/initial failed
  gapiFailed = true;

  // check sign-in state
  isGoogleSignedIn: boolean;

  // example form variable
  exampleFormName;
  exampleFormGender;
  exampleFormRemark;

  constructor(private zone: NgZone) { }

  ngOnInit(): void {
    // detect sign-In state
    const googleSignInSub = new BehaviorSubject<any>('');
    googleSignInSub.subscribe(arg => this.isGoogleSignedIn = arg);

    // gapi load
    this.loadClient().then(
      result => {
          console.log('Gapi Loaded');
          // gapi init
          return this.initClient();
      },
      err => {
          console.log('Gapi Failed: ' + JSON.stringify(err));
          this.gapiFailed = true;
          alert('Gapi load failed.');
      }
    ).then(result => {
      // listen for sign-in state changes.
      gapi.auth2.getAuthInstance().isSignedIn.listen(isSignedIn => {
        this.zone.run(() => {
          googleSignInSub.next(isSignedIn);
          console.log('Change Status : ' + isSignedIn);
        });
      });
      // Handle the initial sign-in state.
      googleSignInSub.next(gapi.auth2.getAuthInstance().isSignedIn.get());
      console.log('Gapi Ready');
      this.gapiFailed = false;
    }, err => {
        console.log('Gapi Failed: ' + JSON.stringify(err));
        this.gapiFailed = true;
        alert('Gapi initial failed.');
    });
  }

  /**
   *  On load, called to load the auth2 library and API client library.
   */
  loadClient(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.zone.run(() => {
        gapi.load('client', {
            callback: resolve,
            onerror: reject,
            timeout: 1000, // 5 seconds.
            ontimeout: reject
        });
      });
    });
  }

  /**
   *  Initializes the API client library and sets up sign-in state listeners.
   */
  initClient(): Promise<any> {
    const initObj = {
      apiKey: this.API_KEY,
      clientId: this.CLIENT_ID,
      discoveryDocs: this.DISCOVERY_DOCS,
      scope: this.SCOPES
    };

    return new Promise((resolve, reject) => {
        this.zone.run(() => {
            gapi.client.init(initObj).then(resolve, reject);
        });
    });
  }

  //  Sign in the user upon button click.
  handleAuthClick() {
    gapi.auth2.getAuthInstance().signIn();
  }

  //  Sign out the user upon button click.
  handleSignoutClick() {
    gapi.auth2.getAuthInstance().signOut();
  }

  //  Read data from google sheets upon button click.
  handleReadClick() {
    this.readAPI();
  }

  //  Write data from google sheets upon button click.
  handleWriteClick() {
    this.writeAPI();
  }

  /**
   * Append a pre element to the body containing the given message
   * as its text node. Used to display the results of the API call.
   * @ param {string} message Text to be placed in pre element.
   */
  appendPre(message) {
    const pre = document.getElementById('content');
    const textContent = document.createTextNode(message + '\n');
    pre.appendChild(textContent);
    pre.innerHTML = message;
  }

  /**
   * Print the names and majors of students in a sample spreadsheet:
   * https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
   */
  readAPI() {
    // tslint:disable-next-line: no-string-literal
    gapi.client['sheets'].spreadsheets.values.get({
      spreadsheetId: this.SPREADSHEET_ID,
      range: 'Page1',
    }).then( (response) => {
      const range = response.result;
      if (range.values.length > 0) {
        let data = '';
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < range.values.length; i++) {
          const row = range.values[i];
          // Print columns A and B, which correspond to indices 0 and 1.
          data = data + row[0] + '\t,' + row[1] + '\t,' + row[2] + '\n';
        }
        this.appendPre(data);
      } else {
        this.appendPre('No data found.');
      }
    }, (response) => {
      console.log('Error: ' + response.result.error.message);
    });
  }


  writeAPI() {
    const params = {
      // The ID of the spreadsheet to update.
      spreadsheetId: this.SPREADSHEET_ID,  // TODO: Update placeholder value.

      // The A1 notation of a range to search for a logical table of data.
      // Values will be appended after the last row of the table.
      range: 'Page1',  // TODO: Update placeholder value.

      // How the input data should be interpreted.
      valueInputOption: 'USER_ENTERED',  // TODO: Update placeholder value.

      // How the input data should be inserted.
      insertDataOption: 'INSERT_ROWS',  // TODO: Update placeholder value.
    };

    const valueRangeBody = {
      // TODO: Add desired properties to the request body.
      majorDimension: 'ROWS',
      values: [
        [
          // 'andrew',
          // 'male',
          // 'test'
          this.exampleFormName, this.exampleFormGender, this.exampleFormRemark
        ]
      ]
    };

    // tslint:disable-next-line: no-string-literal
    const request = gapi.client['sheets'].spreadsheets.values.append(params, valueRangeBody);
    request.then( (response) => {
      // TODO: Change code below to process the `response` object:
      console.log(response.result);
      alert('Google Sheets 寫入成功!');
    }, (reason) => {
      console.error('error: ' + reason.result.error.message);
    });
  }

}
