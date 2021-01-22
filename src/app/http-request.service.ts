import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class HttpRequestService {

  baseurl = "https://dev.vistaconnect.com/dmi-clubbed-backend/api/";

  constructor(private http: HttpClient) { }

  getDetails(Request_Key):Observable<any>{
    return this.http.post<any>(this.baseurl + 'XSell_GetDataV2' , {Request_Key}).pipe(map(res=>res.data));
  }

  getEventTrack(Request_Key,Mobile,Event_Name,Event_Type,Origin,Partner_Name,Remark_1,Remark_2,Remark_3,Remark_4,Remark_5):Observable<any>{
    return this.http.post<any>(this.baseurl + 'XSell_Event_TrackingV2' , 
    {Request_Key,Mobile,Event_Name,Event_Type,Origin,Partner_Name,Remark_1,Remark_2,Remark_3,Remark_4,Remark_5})
  }

  getDeviceTrack(Request_Key,Mobile,Device_Info,Browser_Info,Location,Os_Type,Partner_Name):Observable<any>{
    return this.http.post<any>(this.baseurl + 'XSell_Device_TrackingV2' , {Request_Key,Mobile,Device_Info,Browser_Info,Location,Os_Type,Partner_Name})
  }

  getverifyOTP(Request_Key,Mobile,Otp):Observable<any>{
    return this.http.post<any>(this.baseurl + 'XSell_VerifyOtpV2' , {Request_Key,Mobile,Otp})
  }

  getResendOTP(Request_Key,Mobile):Observable<any>{
    return this.http.post<any>(this.baseurl + 'XSell_ResendOtpV2' , {Request_Key,Mobile})
  }

  getStep1Info(Mobile,Name):Observable<any>{
    return this.http.post<any>(this.baseurl + 'LOS-V2-User_Info' , {Mobile,Name}).pipe(map(res=>res.data));
  }

  getStep7Info(Request_Key,Employment_Type,Average_Income,PAN,Email_Address):Observable<any>{
    return this.http.post<any>(this.baseurl + 'LOS-V2-Financial_Info', 
    {Request_Key,Employment_Type,Average_Income,PAN,Email_Address});
  }

  getStep2Info(Request_Key,Loan_Amount,Loan_Details):Observable<any>{
    return this.http.post<any>(this.baseurl + 'LOS-V2-Loan_Requirement', {Request_Key,Loan_Amount,Loan_Details})
  }

  getStep3Info(Request_Key,Email_Address,Gender,PAN,DOB):Observable<any>{
    return this.http.post<any>(this.baseurl + 'XSell_UserInfoV2Step3', {Request_Key,Email_Address,Gender,PAN,DOB})
  }

  getStep4Info(Request_Key,Work_Experience,Company_Name):Observable<any>{
    return this.http.post<any>(this.baseurl + 'XSell_UserInfoV2Step4', 
    {Request_Key,Work_Experience,Company_Name})
  }

  getStep5Info(Request_Key,Address_Type,Ownership_Type,Flat_OR_Building_Details,Area_OR_Street,Landmark,Postal_Code,
    State,County,City,TimeAtCurrentResidence):Observable<any>{
    return this.http.post<any>(this.baseurl + 'XSell_UserInfoV2Step5' , 
    {Request_Key,Address_Type,Ownership_Type,Flat_OR_Building_Details,Area_OR_Street,Landmark,Postal_Code,State,County,City,TimeAtCurrentResidence})
  }

  getStep8Info(Request_Key,KYC_Request_Key_1):Observable<any>{
    return this.http.post<any>(this.baseurl + 'XSell-V2-KYC_Request_Key' , {Request_Key,KYC_Request_Key_1});
  }

  getStep9Info(Request_Key,KYC_Request_Key_1_Status):Observable<any>{
    return this.http.post<any>(this.baseurl + 'XSell-V2-KYC_Request_Key_1_Status' , {Request_Key,KYC_Request_Key_1_Status});
  }

  sendBankingInfo(Request_Key,Bank_Name,Account_Holder_Name,Account_Number,IFSC_Code):Observable<any>{
    return this.http.post<any>(this.baseurl + 'LOS-V2-Banking_Details' , {Request_Key,Bank_Name,Account_Holder_Name,Account_Number,IFSC_Code});
  }

  sendAAKey(AA_Request_Key,Requesy_Key):Observable<any>{
    return this.http.post<any>(this.baseurl + 'XSell-V2-AA_Request_Key', {AA_Request_Key,Requesy_Key});
  }

  sendAAStatus(Requesy_Key,AA_Request_Key,AA_Request_Key_Status):Observable<any>{
    return this.http.post<any>(this.baseurl + 'XSell-V2-AA_Request_Key_Status' , {Requesy_Key,AA_Request_Key,AA_Request_Key_Status});
  }

  loanApprove(Request_Key):Observable<any>{
    return this.http.post<any>(this.baseurl + 'LOS-V2-Approve_User_Application', {Request_Key});
  }

  sfdcStep2(Request_Key,GoogleApplicationId):Observable<any>{
    return this.http.post<any>(this.baseurl + 'LOS-V2-User_Application_Status', {Request_Key,GoogleApplicationId}).pipe(map(res=>res.data));
  }

  sfdcStep4(Request_Key,RequestId,GoogleApplicationId,CallbackUrl):Observable<any>{
    return this.http.post<any>(this.baseurl + 'LOS-V2-Initiate_KYC', {Request_Key,RequestId,GoogleApplicationId,CallbackUrl}).pipe(map(res=>res.data));
  }

  loanSelect(Request_Key,Loan_Amount,Tenor,Rate_of_Interest,Approx_EMI):Observable<any>{
    return this.http.post<any>(this.baseurl + 'LOS-V2-Loan_Selected', {Request_Key,Loan_Amount,Tenor,Rate_of_Interest,Approx_EMI});
  }

  initiateEMandate(Request_Key,GoogleApplicationId):Observable<any>{
    return this.http.post<any>(this.baseurl + 'LOS-V2-Initiate_E-mandate', {Request_Key,GoogleApplicationId}).pipe(map(res=>res.data));
  }

  eMandateStatus(Request_Key,Emandate_Status):Observable<any>{
    return this.http.post(this.baseurl + 'XSell-V2-Emandated_Status' , {Request_Key,Emandate_Status});
  }

  submitLoanApplication(Request_Key,GoogleApplicationId):Observable<any>{
    return this.http.post<any>(this.baseurl + 'LOS-V2-Submit_Loan_Application', {Request_Key,GoogleApplicationId}).pipe(map(res=>res.data));
  }

  serviceStatus(Request_Key,GoogleApplicationId):Observable<any>{
    return this.http.post<any>(this.baseurl + 'LOS-V2-Service_Status', {Request_Key,GoogleApplicationId});
  }

  getKYCurl(kycDetails):Observable<any>{
    const headers = new HttpHeaders({'Content-Type':'application/json', 'Authentication': 'JELFJVNKVMETHOD2GKVAV7X2PO8ICA'});
    return this.http.post<any>('https://dmikyc-uat.dmifinance.in/los/api/Request-Key-V1.2' , kycDetails , {headers}).pipe(map(resp => resp.data.url));
  }

  getAccountAggURL(accountDetails):Observable<any>{
    const headers = new HttpHeaders({'Content-Type':'application/json', 'token': 'C0SE8JDBWLZOMH642PI71TUFN3RQ5K'});
    return this.http.post<any>(this.baseurl + 'AA-V1.2' , accountDetails , {headers}).pipe(map(response=>response.data));
  }

  getLDSUrl(ldsDetails):Observable<any>{
    const headers = new HttpHeaders({'Authentication':'4BHTB0UKV2PNNMGAEF7GZUQJAYFUHQ'});
    return this.http.post<any>(this.baseurl + 'Doc_Request_Key-V1.2' , ldsDetails , {headers}).pipe(map(response=>response.Message.URL));
  }

}
