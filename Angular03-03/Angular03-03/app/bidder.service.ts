import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BidderService {

  constructor(public httpClient: HttpClient) { }
  register(bidder: any): any {
    return this.httpClient.post('registerBidder', bidder);
  }
}
