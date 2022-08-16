import 'zone.js';
import 'zone.js/testing';
import { NgZone } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';
import {
  AlertController,
  LoadingController,
  ModalController,
  NavController,
  Platform,
} from '@ionic/angular';

import { SharedService } from './shared.service';
import { SystemService } from './system.service';

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
          provide: SystemService,
          useValue: {},
        },
        {
          provide: Platform,
          useValue: {},
        },
        {
          provide: NavController,
          useValue: {},
        },
        {
          provide: LoadingController,
          useValue: {},
        },
        {
          provide: AlertController,
          useValue: {},
        },
        {
          provide: LoadingController,
          useValue: {},
        },
        {
          provide: ModalController,
          useValue: {},
        },
        {
          provide: NgZone,
          useValue: {},
        },
      ],
    });
    service = TestBed.inject(SharedService);
  });

  it('should be return results with elements', () => {
    expect(service.getServerPokemons(null)).toEqual([]);
  });
});
