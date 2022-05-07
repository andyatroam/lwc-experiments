import { LightningElement, api } from "lwc";

/**
 * Show an header
 */
export default class PurchaseAmount extends LightningElement {
  @api
  label = "Your Little Things";
  @api
  unit = "$"
  @api 
  amount = '0.00';
  @api
  helperText = 'purchase amount'

  amountInteger;
  amountDecimal;

  connectedCallback(){
    this.amountInteger = this.getInteger();
    this.amountDecimal = this.getDecimal();
  }

  getInteger() {
    return this.amount.split('.')[0];
  }

  getDecimal() {
    return `.${this.amount.split('.')[1]}`;
  }
}
