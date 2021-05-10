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

  add(newAccount: { name: string, status: string }) {
    this.accounts.push(newAccount);
  }

  changeStatus(id: number, newStatus: string) {
    this.accounts[id].status = newStatus;
  }
}
