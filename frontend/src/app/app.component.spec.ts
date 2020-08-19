import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/templates/footer/footer.component';
import { NavComponent } from './components/templates/nav/nav.component';
import { HeaderComponent } from './components/templates/header/header.component';
import { AppComponent } from './app.component';
import { TestBed, async } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatToolbarModule,
        MatListModule,
        MatSidenavModule,
        BrowserAnimationsModule
      ],
      declarations: [
        AppComponent,
        HeaderComponent,
        NavComponent,
        FooterComponent
      ]
    }).compileComponents()
  }))

  it('Should create the app', () => {
    const component = TestBed.createComponent(AppComponent)
    const instanceApp = component.componentInstance;
    expect(instanceApp).toBeTruthy()
  })
})