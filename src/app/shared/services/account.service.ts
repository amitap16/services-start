import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

/*
 * Using this new syntax is completely optional, the traditional syntax (using providers[] ) will still work.
 * The "new syntax" does offer one advantage though: Services can be loaded lazily by Angular (behind the scenes) and
 * redundant code can be removed automatically. This can lead to a better performance and loading speed
 * - though this really only kicks in for bigger services and apps in general.
 * */
@Injectable({ providedIn: 'root' })
export class AccountService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Test Account',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  statusUpdated = new EventEmitter<string>();

  constructor(private loggingService: LoggingService) { }

  add(newAccount: { name: string, status: string }) {
    this.accounts.push(newAccount);
    this.loggingService.logStatusChanged(newAccount.status);
  }

  changeStatus(id: number, newStatus: string) {
    this.accounts[id].status = newStatus;
    this.loggingService.logStatusChanged(newStatus);
  }
}
