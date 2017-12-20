import { Component, OnInit } from '@angular/core';
import { HeroService,Hero} from './hero.service';
import {Router,ActivatedRoute} from  '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  heroes: Hero[];
  private selectedHero:number;
  constructor(private heroService: HeroService,private router:Router,private route: ActivatedRoute) { }

  ngOnInit() {
    this.getHeroes();
    this.selectedHero=this.route.snapshot.params.id;
  }
  goToDelail(id){
  this.router.navigate(['/hero',id]);
  }
  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
}

