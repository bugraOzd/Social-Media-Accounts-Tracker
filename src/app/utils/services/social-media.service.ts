import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SocialMedia } from '../interfaces/SocialMedia.interface';
import { NewSocialMedia } from '../interfaces/NewSocialMedia.interface';

@Injectable({
  providedIn: 'root'
})
export class SocialMediaService {

  baseUrl = 'http://localhost:3000/api/social-media';

  constructor(
    private http: HttpClient
  ) { }

  getSocialMediaItems(): Observable<SocialMedia[]> {
    return this.http.get<SocialMedia[]>(this.baseUrl);
  }

  createSocialMediaItem(item: NewSocialMedia): Observable<SocialMedia> {
    return this.http.post<SocialMedia>(this.baseUrl, item);
  }

  updateSocialMediaItem(id: string, item: SocialMedia): Observable<SocialMedia> {
    return this.http.put<SocialMedia>(`${this.baseUrl}/${id}`, item);
  }

  deleteSocialMediaItem(id: string) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
