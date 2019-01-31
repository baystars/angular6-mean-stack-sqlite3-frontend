import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  api_url = environment.API_URL;

  constructor(private http: HttpClient) {}

  getIssues() {
    return this.http.get(`${this.api_url}/issues`);
  }

  getIssueById(id) {
    return this.http.get(`${this.api_url}/issues/${id}`);
  }

  addIssue(title, responsible, description, severity) {
    const issue = {
      title: title,
      responsible: responsible,
      description: description,
      severity: severity
    };
    return this.http.post(`${this.api_url}/issues/add`, issue);
  }

  updateIssue(id, title, responsible, description, severity, status) {
    const issue = {
      title: title,
      responsible: responsible,
      description: description,
      severity: severity,
      status: status
    };
    return this.http.put(`${this.api_url}/issues/update/${id}`, issue);
  }

  deleteIssue(id) {
    return this.http.delete(`${this.api_url}/issues/delete/${id}`);
  }
}
