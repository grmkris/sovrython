// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type User = {
  id: number
  name: string
}

export type CreateInvoice = {
  checking_id: string;
  lnurl_response: string;
  payment_hash: string;
  payment_request: string;
}
