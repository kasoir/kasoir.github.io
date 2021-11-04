import { Component, OnInit } from '@angular/core';
import { Category } from 'models/category.model';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CategoryDetailsComponent } from 'src/app/category/category-details/category-details.component';
import { CategoryService } from 'src/app/category/category.service';

@Component({
  selector: 'app-category-management',
  templateUrl: './category-management.component.html',
  styleUrls: ['./category-management.component.scss']
})
export class CategoryManagementComponent implements OnInit {

  public categories: Category[] = [];
	ngUnsubscribe: Subject<any> = new Subject<any>();

  constructor(
    private categoryService: CategoryService,    
    private modalService: BsModalService,
    private bsModalRef: BsModalRef,
  ) { }

  async ngOnInit() {
    await this.prepareData();
  }

  prepareData = async () => {
    this.categories = await this.categoryService.getBy();
  }

  categoryDetalis(category: Category) {
    const initialState = {
      isAdmin: true,
      data: category
    };
    this.bsModalRef = this.modalService.show(CategoryDetailsComponent, { class: 'modal-xl', backdrop: 'static', keyboard: true, initialState });
    this.bsModalRef.content.hideEvent.pipe(takeUntil(this.ngUnsubscribe)).subscribe((_res: any) => {
      this.prepareData();
    });
  }

  addCategory() {
    const initialState = {
      isAdmin: true,
    };
    this.bsModalRef = this.modalService.show(CategoryDetailsComponent, { class: 'modal-xl', backdrop: 'static', keyboard: true, initialState });
    this.bsModalRef.content.hideEvent.pipe(takeUntil(this.ngUnsubscribe)).subscribe((_res: any) => {
      this.prepareData();
    });
  }
}
