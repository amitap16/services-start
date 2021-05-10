import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountService } from '../shared/services/account.service';
import { LoggingService } from '../shared/services/logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService, AccountService]
})
export class AccountComponent {
  @Input() account: { name: string, status: string };
  @Input() id: number;

  constructor(private loggingService: LoggingService,
    private accountService: AccountService) { }

  onSetTo(status: string) {
    this.accountService.changeStatus(this.id, status);
    this.loggingService.logStatusChanged(status);
  }
}
