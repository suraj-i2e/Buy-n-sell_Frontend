import { Component, OnInit } from '@angular/core';
import { Listing } from '../types';
import { fakeListing } from '../fake_data';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listing-page',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './listing-page.component.html',
  styleUrl: './listing-page.component.css'
})
export class ListingPageComponent implements OnInit {
 listing:Listing[]=[];

 constructor(){}

 ngOnInit(): void {
   this.listing=fakeListing;
 }

}
