import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotoService } from '../photo/photo.service';
import { Photo } from '../photo/photo';
import { Observable } from 'rxjs';
import { PhotoComment } from '../photo/photo.comment';


@Component({
	selector: 'app-photo-details',
	templateUrl: './photo-details.component.html',
	styleUrls: ['./photo-details.component.css']
})
export class PhotoDetailsComponent implements OnInit {

	photo$: Observable<Photo>;
	comments$: Observable<PhotoComment[]>;
	photoId: number;

	constructor(
		private route: ActivatedRoute,
		private photoservice: PhotoService,
		private router: Router) { }

	ngOnInit() {
		this.photoId = this.route.snapshot.params.photoId;
		this.photo$ = this.photoservice.findById(this.photoId);
	}

	remove() {
		this.photoservice
			.removePhoto(this.photoId)
			.subscribe(() => this.router.navigate(['']));
	}


}
