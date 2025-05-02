import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private httpClient = inject(HttpClient);

  protected time = rxResource({
    loader: () => this.httpClient.get<{ time: string }>('/api/time')
  })
}
