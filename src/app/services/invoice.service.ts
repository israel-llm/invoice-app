import { Injectable } from '@angular/core';
import { Invoice } from '../models/invoice';
import { invoiceData } from '../data/invoice.data'

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private invoiceData: Invoice = invoiceData;

  constructor() { }

  getInvoice(): Invoice {
    const total: number = this.calculateTotal();
    return { ...this.invoiceData, total };
  }

  calculateTotal(): number {
    // let total: number = 0;
    // this.invoiceData.items.forEach(item => total += item.quantity*item.price);
    // return total;
    return this.invoiceData.items.reduce((total, item) => total + (item.quantity*item.price), 0);
  }

}
