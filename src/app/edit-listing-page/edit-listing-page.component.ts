import { Component, OnInit } from '@angular/core';
import { ListingDataFormComponent } from "../listing-data-form/listing-data-form.component";
import { Router, ActivatedRoute } from '@angular/router';
import { Listing } from '../types';
import { fakeMyListings } from '../fake_data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-listing-page',
  standalone: true,
  imports: [ListingDataFormComponent,CommonModule],
  templateUrl: './edit-listing-page.component.html',
  styleUrl: './edit-listing-page.component.css'
})
export class EditListingPageComponent implements OnInit{

  listing:Listing | undefined;

  constructor(private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {
    const id=this.route.snapshot.paramMap.get('id');
    if(id){
      this.listing= fakeMyListings.find(listing=>listing.id===id);
    }
  }

  onSubmit():void{
    alert('Saving Changes to the List...');
    this.router.navigateByUrl('/my-listing');
  }
}
