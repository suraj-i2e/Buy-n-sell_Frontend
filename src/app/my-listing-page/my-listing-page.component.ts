import { Component, OnInit } from '@angular/core';
import { fakeMyListings } from '../fake_data';
import { Listing } from '../types';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-my-listing-page',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './my-listing-page.component.html',
  styleUrl: './my-listing-page.component.css'
})
export class MyListingPageComponent implements OnInit {

  listing:Listing[]=[];

  constructor(){

  }

  ngOnInit(): void {
    this.listing=fakeMyListings;
  }

  onDeleteClicked(listingId: string):void{
    alert(`Deleting your listing with id ${listingId}`)
  }

}
