import { Component, EventEmitter, Output } from '@angular/core';
import { AccountService } from '../shared/services/account.service';
import { LoggingService } from '../shared/services/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent {

  constructor(private loggingService: LoggingService,
    private accountService: AccountService) { }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.add({ name: accountName, status: accountStatus });
    this.loggingService.logStatusChanged(accountStatus);
  }
}
