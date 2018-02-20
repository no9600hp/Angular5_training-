import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-declaration',
  templateUrl: './declaration.component.html',
  styleUrls: ['./declaration.component.scss']
})
export class DeclarationComponent implements OnInit {

  ROOT_URL = 'https://www.mobsters.b507.us/api/declarations?employee=3&per_page=200&pay_period_date=2018-02-08&sort=start_time&order=asc&page=1'

  posts;
  options;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.options = {
      headers: new HttpHeaders()
        .set('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjdiZTAwNzZjODUxMzJlMmM4ZWFmYTY3YzU1NmUzMTY5Mjc1Njk2NWJmMTI2NDg1MTkzZDJjYTEzZTgyMDU0ODJjYTQ1Mjg5YmQwNTNiNGMxIn0.eyJhdWQiOiIxIiwianRpIjoiN2JlMDA3NmM4NTEzMmUyYzhlYWZhNjdjNTU2ZTMxNjkyNzU2OTY1YmYxMjY0ODUxOTNkMmNhMTNlODIwNTQ4MmNhNDUyODliZDA1M2I0YzEiLCJpYXQiOjE1MTkwOTQyODEsIm5iZiI6MTUxOTA5NDI4MSwiZXhwIjoxNTUwNjMwMjgxLCJzdWIiOiI0MiIsInNjb3BlcyI6W119.h0lKBkznaZud-ZFDpNiMh4EkRB-W0cVId8mLcgDSu_OVHxGxIXoNB4k_jTJegiMUK5Iir2garY7VvsTM-UYu6juY2thxhPCi7arFiKJ8JCAutFig1ZN5napqi-EPJ15FwFD6-kmAgl1KnZdrdwPF7nkols4_jEA3ClCEIRJAiKpcGWT1_4O3bQegvSkQmP534fK9W_QIaDJciZFsNt-H3K6lftKbVvlwJBlfm3dvGg_f3_ubkXWmFtPM_gaqdndU9EKYiQrlzVJDwFis0e67WF34gjdXoBXtEO4w5fDgKpMkO9B770OQgwxy5iZDaJyU8Hw4WVQD8zVZbQNq6uEDpF3MIGqHyI2IjP7_XRXFOqUfBTXsMGjtvWPx8AnkZbSitnCzpdNhmSKbOs-9ybBOlykNrbzDeURZQMm4hNsEoPRtt4aFCcVYTuOxP0Qqmr0UWGhcFZhyzHoSfr5FOwfhA9SLj25lLjPRfJzr4-XBv62D-g_owAMUuBJ4zZYAeXH7uWwjCAR6KXYro2C4QUrUZFJ0lRLkl4mrmAdglpTqzFuZqvX9NOKRQXb_TJb_vshlKB8sNLnHmkBBGOj7SnpxLmNCNFJmQVM4T781VfxrUcmUMDEucmQEBe1Y71Yr0Rn_Rqrkyu5LS20U2NaoXLBOLXqBMFOPJTJ7vj4rVl8OG1c')
    }
      this.getPosts()
        .then(posts => this.posts = posts);
  }

  getPosts(){
    return this.http
      .get(this.ROOT_URL, this.options)
      .toPromise()
      .then(res => res);
  }

}
