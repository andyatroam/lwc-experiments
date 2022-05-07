import { LightningElement, api } from "lwc";

/**
 * Show an header
 */
export default class Header extends LightningElement {
  @api
  label = "";
  @api 
  showBackButton = false;
}
