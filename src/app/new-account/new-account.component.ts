import { Component } from '@angular/core';
import { LoggingService } from '../logging.service'
import { AccountService } from '../accont.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {

  constructor(
      private loggingService: LoggingService,
      private accountsService: AccountService
  ) {
    this.accountsService.statusUpdated.subscribe(
        (status: string) => alert('New Status: ' + status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
  }
}
