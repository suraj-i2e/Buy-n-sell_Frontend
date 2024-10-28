import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Listing } from '../types';
import { fakeListing } from '../fake_data';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listing-details-page',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './listing-details-page.component.html',
  styleUrl: './listing-details-page.component.css'
})
export class ListingDetailsPageComponent implements OnInit {

  listing:Listing | undefined;

  constructor( private route: ActivatedRoute,){
  }

  ngOnInit(): void {
    const id= this.route.snapshot.paramMap.get('id');
    if(id){
      this.listing=fakeListing.find(listing=>listing.id===id);
    }
  }
}
