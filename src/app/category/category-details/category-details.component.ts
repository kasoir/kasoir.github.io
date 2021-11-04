import { Component, EventEmitter, OnInit } from '@angular/core';
import { Category, getDefaultCategory } from 'models/category.model';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { MessageService } from 'primeng/api';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.scss']
})
export class CategoryDetailsComponent implements OnInit {

  hideEvent: EventEmitter<any> = new EventEmitter();

  public isAdmin: any;
  public data: any;

  public done = false;
  public category: Category = getDefaultCategory();

  constructor(
    private messageService: MessageService,
    public bsModalRef: BsModalRef,
    private categoryService: CategoryService,
  ) { }

  ngOnInit(): void {
    if (this.data) {
      this.category = this.data;
    }
    this.done = true;
  }
  ngOnDestroy(): void {
    this.hideEvent.next();
  }
  create = async () => {
    const result = await this.categoryService.createCategory(this.category);
    if (result) {
      this.messageService.add({ summary: 'Success', sticky: false, life: 2000, detail: 'Added successfully...' });
      this.bsModalRef.hide();
    }
  }
  update = async () => {
    const result = await this.categoryService.updateCategory(this.category);
    if (result) {
      this.messageService.add({ summary: 'Success', sticky: false, life: 2000, detail: 'Added successfully...' });
      this.bsModalRef.hide();
    }
  }

}
