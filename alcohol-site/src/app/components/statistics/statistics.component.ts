import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import * as d3Scale from 'd3';
import * as d3Shape from 'd3';
import * as d3Array from 'd3';
import * as d3Axis from 'd3';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css'],
})
export class StatisticsComponent implements OnInit {
  public title = 'Line Chart';
  public data: any[] = [];
  private margin = { top: 10, right: 20, bottom: 30, left: 50 };
  private width: number;
  private height: number;
  private x: any;
  private y: any;
  private svg: any;
  private line: d3Shape.Line<[number, number]>; // this is line defination

  constructor(private productService: ProductService) {
    this.width = 1160 - this.margin.left - this.margin.right;
    this.height = 500 - this.margin.top - this.margin.bottom;
  }

  public ngOnInit(): void {
    this.addData();
  }
  private addData() {

    this.productService.getStitistics().subscribe((element) => {
      let date : Date;
      let value : number;
      element.forEach((val:any)=> {
        date= new Date(val._id);
        value= val.cocktails.length;
        this.data.push({date,value});
      });
      this.buildSvg();
      this.addXandYAxis();
      this.drawLineAndPath();
    });
  }
  private buildSvg() {
    this.svg = d3
      .select('svg')
      .append('g')
      .attr(
        'transform',
        'translate(' + this.margin.left + ',' + this.margin.top + ')'
      );
  }
  private addXandYAxis() {
    this.x = d3Scale.scaleTime().range([0, this.width]);
    this.y = d3Scale.scaleLinear().range([this.height, 0]);
    this.x.domain(d3Array.extent(this.data, (d) => d.date));
    this.y.domain(d3Array.extent(this.data, (d) => d.value));
    this.svg
      .append('g')
      .attr('transform', 'translate(0,' + this.height +  ')')
      .call(d3Axis.axisBottom(this.x));
    this.svg
      .append('g')
      .attr('class', 'axis axis--y')
      .call(d3Axis.axisLeft(this.y));
  }
  private drawLineAndPath() {
    this.line = d3Shape
      .line()
      .x((d: any) => this.x(d.date))
      .y((d: any) => this.y(d.value));
    this.svg
      .append('path')
      .datum(this.data)
      .attr('class', 'line')
      .attr('d', this.line);
  }
}
