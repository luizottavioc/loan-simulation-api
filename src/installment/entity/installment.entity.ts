export class InstallmentEntity {
  id?: number;
  loanId?: number;
  balanceDue: number;
  interest: number;
  value: number;
  dueDate: Date;
}
