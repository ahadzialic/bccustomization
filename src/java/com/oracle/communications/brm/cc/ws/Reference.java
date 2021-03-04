/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.oracle.communications.brm.cc.ws;

/**
 *
 * @author oracle
 */
public class Reference {
    private Integer ID;
    private String CA_ID;
    private String IME;
    private String MSISDN;
    private String PREZIME;
    private String REFERENCA_RACUNA;
    private String SIFRA_TEHNOLOGIJE;
    private Integer TRANSACTION_ID;
    private String WS_RESPONSE;
    
    public Reference(Integer ID, String CA_ID,String IME, String MSISDN, String PREZIME, String REFERENCA_RACUNA,String SIFRA_TEHNOLOGIJE,Integer TRANSACTION_ID,String WS_RESPONSE ){
    this.ID=ID;
    this.CA_ID=CA_ID;
    this.IME=IME;
    this.MSISDN=MSISDN;
    this.PREZIME=PREZIME;
    this.REFERENCA_RACUNA=REFERENCA_RACUNA;
    this.SIFRA_TEHNOLOGIJE=SIFRA_TEHNOLOGIJE;
    this.TRANSACTION_ID=TRANSACTION_ID;
    this.WS_RESPONSE=WS_RESPONSE;
    }
    
    public Reference(){}
    
    public Integer getID(){
    return ID;   
    }
    
    public void setID(Integer ID){
    this.ID=ID;   
    }
    
    public String getCA_ID(){
    return CA_ID;   
    }
    
    public void setCA_ID(String CA_ID){
    this.CA_ID=CA_ID;   
    }
    
    public String getIME(){
    return IME;   
    }
    
    public void setIME(String IME){
    this.IME=IME;   
    }
    
    public String getMSISDN(){
    return MSISDN;   
    }
    
    public void setMSISDN(String MSISDN){
    this.MSISDN=MSISDN;   
    }
    
    public String getPREZIME(){
    return PREZIME;   
    }
    
    public void setPREZIME(String PREZIME){
    this.PREZIME=PREZIME;   
    }
    
    public String getREFERENCA_RACUNA(){
    return REFERENCA_RACUNA;   
    }
    
    public void setREFERENCA_RACUNA(String REFERENCA_RACUNA){
    this.REFERENCA_RACUNA=REFERENCA_RACUNA;   
    }
          
    public String getSIFRA_TEHNOLOGIJE(){
    return SIFRA_TEHNOLOGIJE;   
    }
    
    public void setSIFRA_TEHNOLOGIJE(String SIFRA_TEHNOLOGIJE){
    this.SIFRA_TEHNOLOGIJE=SIFRA_TEHNOLOGIJE;   
    }
    
    public Integer getTRANSACTION_ID(){
    return TRANSACTION_ID;   
    }
    
    public void setTRANSACTION_ID(Integer TRANSACTION_ID){
    this.TRANSACTION_ID=TRANSACTION_ID;   
    }
               
    public String getWS_RESPONSE(){
    return WS_RESPONSE;   
    }
    
    public void setWS_RESPONSE(String WS_RESPONSE){
    this.WS_RESPONSE=WS_RESPONSE;   
    }
    
}
