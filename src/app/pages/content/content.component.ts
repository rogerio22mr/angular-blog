import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS61bvyfBR5Atirpdsm3JDd0rNp5vqnBBLrOA&usqp=CAU";
  title:string = "Minha Noticia";
  description:string = "ola mundo!";
  private id:string | null = "0";

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
    )

    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id:string | null) {
    const result = dataFake.filter(article => article.id.toString() == id)[0]

    this.title = result.title;
    this.description = result.description;
    this.photoCover = result.photo;
  }

}
