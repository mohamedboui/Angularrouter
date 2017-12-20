import { Component, OnInit } from '@angular/core';
import { CrisisService,Crisis} from './crisis.service';
import {Router,ActivatedRoute} from  '@angular/router';

@Component({
  selector: 'app-crisises',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.css']
})
export class CrisisListComponent implements OnInit {
  crisises: Crisis[];
  private selectedCrisis:number;
  constructor(private crisisService: CrisisService,private router:Router,private route: ActivatedRoute) { }

  ngOnInit() {
    this.getCrisises();
    this.selectedCrisis=this.route.snapshot.params.id;
  }
  goToDelail(id){
  this.router.navigate(['/crisises',id]);
  }
  getCrisises(): void {
    this.crisisService.getCrisises()
    .subscribe(crisises => this.crisises = crisises);
  }
}

