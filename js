import { LightningElement, wire,track } from 'lwc';
import getRecords from '@salesforce/apex/FilesClass.getRecords';
export default class Displaypictures extends LightningElement 
{
    @track mapData = [];
    @track files;
    @track url;
    @track key;
    @track image= '/sfc/servlet.shepherd/version/download/';
    @wire(getRecords)
    filesData({data,error})
    {
        if(data) {
            //console.log('data ===> '+data);
          // this.files = data;
          for(var i =0;i<data.length;i++)
          {
             var urls = JSON.stringify(data[i].Id);
            
             urls = urls.replace(/^"(.*)"$/, '$1');
            console.log('urls'+urls);
              this.mapData.push('/sfc/servlet.shepherd/version/download/'+urls);
             console.log('mapdata'+this.mapData);
          }
          this.files = this.mapData;
          console.log('files--->'+JSON.stringify(this.files));
          
    }
}}
