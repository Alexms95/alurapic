import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Photo } from "./photo";
import { PhotoComment } from './photo.comment';
import { map, catchError } from 'rxjs/operators';
import { of, throwError, Observable } from 'rxjs';

const API = 'http://localhost:3000';

@Injectable({ providedIn: 'root' })
export class PhotoService {

    constructor(private http: HttpClient) {}

    listFromUser(userName: string) {
        return this.http
            .get<Photo[]>(API + '/' + userName + '/photos');       
    }

    listFromUserPaginated(userName: string, page: number) {
        const params = new HttpParams()
            .append('page', page.toString());

        return this.http
            .get<Photo[]>(API + '/' + userName + '/photos', { params });       
    }
    
    upload(description: string, allowComments: boolean, file: File) {

        const formData = new FormData();
        formData.append('description', description);
        formData.append('allowComments', allowComments ? 'true' : 'false');
        formData.append('imageFile', file);

        return this.http.post(API + '/photos/upload', formData);
        
    }

    findById(photoId: number) {
        return this.http.get<Photo>(API + '/photos/' + photoId);
    }

    /**
     * Get the comments of a photo by a `photoId`
     *
     * @param {number} photoId Id of a photo
     * @returns Observable of a array of `PhotoComment` interface
     * @memberof PhotoService
     */
    getComments(photoId: number) {
        return this.http.get<PhotoComment[]>(API + '/photos/' + photoId + '/comments');
    }

    addComment(photoId: number, commentText: string) {
        return this.http.post(
            API + '/photos/' + photoId + '/comments',
            { commentText }
        );
    }

    removePhoto(photoId: number) {
        return this.http.delete(API + '/photos/' + photoId);
    }

    /**
     * Take like in a photo by a photoId. If operation returns success, it converts
     * response to `Observable<true>`. If operation returns an error, if this error is '304 not modified',
     * it converts response to `Observable<false>`, otherwise it throws this error.
     * @param {number} photoId
     * @returns {Observable<boolean>}
     * @memberof PhotoService
     */
    like(photoId: number): Observable<boolean> {
        return this.http.post(
            API + '/photos/' + photoId + '/like',
            { },
            { observe: 'response' }
        )
        .pipe(map(res => true))
        .pipe(catchError(err => {
            return err.status == '304' ? of(false) : throwError(err);
        }))
    }
    
}
