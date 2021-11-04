import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { getDefaultMovie, MovFile, Movie } from 'models/movie.model';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { MessageService } from 'primeng/api';
import { CategoryService } from 'src/app/category/category.service';
import { MoviesService } from 'src/app/movies/movies.service';

@Component({
  selector: 'app-movie-upload',
  templateUrl: './movie-upload.component.html',
  styleUrls: ['./movie-upload.component.scss']
})
export class MovieUploadComponent implements OnInit {

  public done = false;
  canRate = true;
  currentRate = 0;
  public movie: Movie = getDefaultMovie();
  public fileList: Array<MovFile & { contentType?: string }> = [];
  categories: any[] = [];

  constructor(
    public bsModalRef: BsModalRef,
    private movieService: MoviesService,
    private messageService: MessageService,
    private categoryService: CategoryService,
  ) { }

  async ngOnInit() {
    this.categories = await this.categoryService.getBy();
    this.done = true;
  }

  save = async (form: NgForm) => {
    this.movie.downloadLink=`../../../movies/${this.movie.name}`;
    const result = await this.movieService.createMovie(this.movie);
    const uploadedFilesIds = await this.movieService.upload(this.fileList) || [];
    if(!uploadedFilesIds){
      console.log('Error')
    }
    if (result) {
      this.messageService.add({ summary: 'Success', sticky: false, life: 2000, detail: 'Updated successfully...' });
      this.bsModalRef.hide();
    }
  }

  async onSelectFile ( e: any ): Promise<void> {
		const files: FileList = e.target.files;
		if ( files ) {
			const filesArray: File[] = Array.from( files );
			// prepare map includes files data buffers

			filesArray.forEach( async file => {

				const docFile: MovFile & { contentType: string } = {
					name: file.name,
					file,
					contentType: file.type,
				};
				this.fileList.push( docFile );
			} );
		}
		e.target.value = null;
	}

  onDeleteDocument = (index: number) => {
    this.fileList.splice(index, 1);
  }

}
