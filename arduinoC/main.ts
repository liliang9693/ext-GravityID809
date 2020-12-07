
//% color="#ac9788" iconWidth=50 iconHeight=40
namespace gravityid809 {

    //% block="Fingerprint module begin" blockType="command"

    export function begin(parameter: any, block: any) {

        Generator.addInclude("includeDFRobot_ID809","#include<DFRobot_ID809.h>");
        Generator.addObject("ID809object","DFRobot_ID809_IIC","ID809fingerprint(&Wire,0x1f)");
        Generator.addSetup("ID809begin",`ID809fingerprint.begin();`,true);
    
    }
    
    //% block="Wait until is connected " blockType="command"
    export function isconnect(parameter: any, block: any) {

        Generator.addCode([`while(ID809fingerprint.isConnected() == false){delay(1000);}`, Generator.ORDER_UNARY_POSTFIX]);
        
    }
    
    //% block="ctrl LED color[LEDCOLOR] mode[LEDMODE] count[BLINKCOUNT]" blockType="command"
    //% LEDMODE.shadow="dropdown" LEDMODE.options="LEDMODE"
    //% LEDCOLOR.shadow="dropdown"  LEDCOLOR.options="LEDCOLOR"
    //% BLINKCOUNT.shadow="number"  BLINKCOUNT.defl="1"
    export function ledcotrl(parameter: any, block: any) {
        let mode=parameter.LEDMODE.code;
        let color=parameter.LEDCOLOR.code;
        let count=parameter.BLINKCOUNT.code;

        Generator.addCode(`ID809fingerprint.ctrlLED(ID809fingerprint.${mode},ID809fingerprint.${color},${count});`);
    
    }

    //% block="---"
    export function noteSep1() {

    }

     //% block="detect Finger?" blockType="boolean"
     export function detectfinger(parameter: any, block: any) {

        Generator.addCode([`ID809fingerprint.detectFinger()`, Generator.ORDER_UNARY_POSTFIX]);
    
    }
   

    
     //% block="collection Fingerprint timeout[TIMEOUT](s)" blockType="command"
     //% TIMEOUT.shadow="number"  TIMEOUT.defl="10"
     export function collectionFingerprint(parameter: any, block: any) {
        let to = parameter.TIMEOUT.code;
       
        Generator.addCode(`ID809fingerprint.collectionFingerprint(${to});`);
    }

      //% block="search" blockType="reporter""
      export function search(parameter: any, block: any) {

        Generator.addCode([`ID809fingerprint.search()`, Generator.ORDER_UNARY_POSTFIX]);
    
    }
     //% block="verify ID[ID]" blockType="boolean"
     //% ID.shadow="range"  ID.params.min=1    ID.params.max=80    ID.defl=1
     export function verify(parameter: any, block: any) {
        let id = parameter.ID.code;
        Generator.addCode([`ID809fingerprint.verify(${id})`, Generator.ORDER_UNARY_POSTFIX]);
    
    }

    //% block="---"
    export function noteSep2() {

    }

     //% block="get empty ID" blockType="reporter"
     export function getemptyid(parameter: any, block: any) {

        Generator.addCode([`ID809fingerprint.getEmptyID()`, Generator.ORDER_UNARY_POSTFIX]);
    
    }
 
     //% block="get Status ID [ID]" blockType="boolean"
     //% ID.shadow="range"  ID.params.min=1    ID.params.max=80    ID.defl=1
     export function getStatusID(parameter: any, block: any) {
        let id=parameter.ID.code;
        Generator.addCode([`ID809fingerprint.getStatusID(${id})`, Generator.ORDER_UNARY_POSTFIX]);
    
    }
    
     //% block="get enroll count" blockType="reporter"
     export function getEnrollCount(parameter: any, block: any) {

        Generator.addCode([`ID809fingerprint.getEnrollCount()`, Generator.ORDER_UNARY_POSTFIX]);
    
    }
    


     //% block="store fingerprint ID[ID]" blockType="command"
     //% ID.shadow="range"  ID.params.min=1    ID.params.max=80    ID.defl=1
     export function storeFingerprint(parameter: any, block: any) {
        let id = parameter.ID.code;
        
        Generator.addCode(`ID809fingerprint.storeFingerprint(${id});`);
    
    }

     //% block="delete fingerprint ID[ID]" blockType="command"
     //% ID.shadow="range"  ID.params.min=1    ID.params.max=80    ID.defl=1
     export function delFingerprint(parameter: any, block: any) {
        let id = parameter.ID.code;
       
        Generator.addCode(`ID809fingerprint.delFingerprint(${id});`);
    
    }




}
