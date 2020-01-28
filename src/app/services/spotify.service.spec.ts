import { TestBed, inject, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { SpotifyService } from './spotify.service';

const promisedData = require('../models/promisedData.json');

describe('SpotifyService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    declarations: [
      
    ],
    providers: []
  }));

  it('should be created', () => {
    const service: SpotifyService = TestBed.get(SpotifyService);
    expect(service).toBeTruthy();
  });

  it('should return one object', async(inject([SpotifyService], (service: SpotifyService)=>{
    service.getProfile('maresp85').subscribe((value:any) => {
      expect(value).toBe(13);
    });
  })));

  it('EQUAL to PromisedData', () => {
    
    const service: SpotifyService = TestBed.get(SpotifyService);    
    const result = service.getProfile('maresp85');
    console.info("afuera afuera")
    result.subscribe((data:any) => {
      console.info("adentro adentro")
      expect(data).toEqual(promisedData);  
    });
    
  });



});
