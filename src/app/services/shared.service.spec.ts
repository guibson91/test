import 'zone.js';
import 'zone.js/testing';
import { TestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';
import { ModalController } from '@ionic/angular';

import { SharedService } from './shared.service';

TestBed.initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

describe('SharedService', () => {
  let service: SharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: ModalController,
          useValue: {},
        },
      ],
    });
    service = TestBed.inject(SharedService);
  });

  it('getLocalPokemons() => array results com 1000 elementos', () => {
    const res = service.getLocalPokemons();
    expect(res.results).toHaveSize(1000);
  });

  it('getServerPokemons() => array de results com 25 elementos', async () => {
    const res = await service.getServerPokemons().toPromise();
    expect(res.results).toHaveSize(25);
  });
});
