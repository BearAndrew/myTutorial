import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // $(document).ready(() => {
    //   $('#write').click(() => {
    //     document.getElementById('write').setAttribute('disabled', 'disabled');
    //     $.ajax({
    //       type: 'get',
    //       data: {
    //         method: 'write',
    //         name: 'Andrew',
    //         sex: 'male',
    //         remark: '測試寫入功能'
    //       },
    //       url: this.url, // 填入網路應用程式網址
    //       success(e) {
    //         alert(e);
    //         document.getElementById('write').removeAttribute('disabled');
    //       }
    //     });
    //   });

    //   $('#read').click(() => {
    //     document.getElementById('read').setAttribute('disabled', 'disabled');
    //     $.ajax({
    //       type: 'get',
    //       data: {
    //         method: 'read',
    //         query: 'Andrew'
    //       },
    //       url: this.url, // 填入網路應用程式網址
    //       success(e) {
    //         document.getElementById('read').removeAttribute('disabled');
    //         alert(e);
    //       }
    //     });
    //   });
    // });

    // this.getSheetData().subscribe(
    //   data => {
    //     console.log(data);
    //   }
    // );
  }



  makeApiCall() {
    const params = {
      // The ID of the spreadsheet to update.
      spreadsheetId: '1tkQVwKCbxmiiwhHPdiIOptCC_zg-xj-qhRkz52k5pqM',  // TODO: Update placeholder value.

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
          'andrew',
          'male',
          'test'
        ]
      ]
    };

    const request = gapi.client.sheets.spreadsheets.values.append(params, valueRangeBody);
    request.then( (response) => {
      // TODO: Change code below to process the `response` object:
      console.log(response.result);
    }, (reason) => {
      console.error('error: ' + reason.result.error.message);
    });
  }

  initClient() {
    const API_KEY = 'AIzaSyCE5EVGlfQka7dKI8RYbLbJqOltzUD08KA';  // TODO: Update placeholder with desired API key.

    // TODO: Update placeholder with desired client ID.
    const CLIENT_ID = '410245416249-ar8a9en8hb9h6lq6flejedfcthr75lkp.apps.googleusercontent.com';

    // TODO: Authorize using one of the following scopes:
    //   'https://www.googleapis.com/auth/drive'
    //   'https://www.googleapis.com/auth/drive.file'
    //   'https://www.googleapis.com/auth/spreadsheets'
    const SCOPE = 'https://www.googleapis.com/auth/spreadsheets';

    gapi.client.init({
      apiKey: API_KEY,
      clientId: CLIENT_ID,
      scope: SCOPE,
      discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
    }).then( () => {
      // gapi.auth2.getAuthInstance().isSignedIn.listen(this.updateSignInStatus);
      // this.updateSignInStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    });
  }

  handleClientLoad() {
    gapi.load('client:auth2', this.initClient);
  }

  updateSignInStatus(isSignedIn) {
    if (isSignedIn) {
      console.log('isSignedIn');
      this.makeApiCall();
    }
  }

  handleSignInClick() {
    gapi.auth2.getAuthInstance().signIn();
  }

  handleSignOutClick() {
    gapi.auth2.getAuthInstance().signOut();
  }
}
