import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  state:Array<any> = [];
  constructor() { }

  public setState(){
    this.state = [];
    this.state.push({key:'AN',stateName:'Andaman and Nicobar Islands'});
    this.state.push({key:'AP',stateName:'Andhra Pradesh'});
    this.state.push({key:'AR',stateName:'Arunachal Pradesh'});
    this.state.push({key:'AS',stateName:'Assam'});
    this.state.push({key:'BR',stateName:'Bihar'});
    this.state.push({key:'CH',stateName:'Chandigarh'});
    this.state.push({key:'CT',stateName:'Chhattisgarh'});
    this.state.push({key:'DN',stateName:'Dadra and Nagar Haveli'});
    this.state.push({key:'DD',stateName:'Daman and Diu'});
    this.state.push({key:'DL',stateName:'Delhi'});
    this.state.push({key:'GA',stateName:'Goa'});
    this.state.push({key:'GJ',stateName:'Gujarat'});
    this.state.push({key:'HR',stateName:'Haryana'});
    this.state.push({key:'HP',stateName:'Himachal Pradesh'});
    this.state.push({key:'JK',stateName:'Jammu and Kashmir'});
    this.state.push({key:'JH',stateName:'Jharkhand'});
    this.state.push({key:'KA',stateName:'Karnataka'});
    this.state.push({key:'KL',stateName:'Kerala'});
    this.state.push({key:'LD',stateName:'Lakshadweep'});
    this.state.push({key:'MP',stateName:'Madhya Pradesh'});
    this.state.push({key:'MH',stateName:'Maharashtra'});
    this.state.push({key:'MN',stateName:'Manipur'});
    this.state.push({key:'ML',stateName:'Meghalaya'});
    this.state.push({key:'MZ',stateName:'Mizoram'});
    this.state.push({key:'NL',stateName:'Nagaland'});
    this.state.push({key:'OR',stateName:'Odisha'});
    this.state.push({key:'PY',stateName:'Puducherry'});
    this.state.push({key:'PB',stateName:'Punjab'});
    this.state.push({key:'RJ',stateName:'Rajasthan'});
    this.state.push({key:'SK',stateName:'Sikkim'});
    this.state.push({key:'TN',stateName:'Tamil Nadu'});
    this.state.push({key:'TG',stateName:'Telangana'});
    this.state.push({key:'TR',stateName:'Tripura'});
    this.state.push({key:'UT',stateName:'Uttarakhand'});
    this.state.push({key:'UP',stateName:'Uttar Pradesh'});
    this.state.push({key:'WB',stateName:'West Bengal'});
    return this.state;
  }
}
