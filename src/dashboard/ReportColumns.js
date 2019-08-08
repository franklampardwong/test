
/* const defaultColumnProperties = {
    resizable: true,
    //width: 50,
    sortable: true,
    filterable: true
  }; */
const dpValidatorRegexp = /^(?!0\d)\d*(\.\d{1,5})?$/;
export const reportColumns ={
  columnsClus05:[
      {
          data: 'id',
          type: 'text',
          width: 50,
          readOnly: true
      },
      {
          data: 'entity',
          type: 'text',
          width: 50,
          readOnly: true
      },
      {
          data: 'budgetType',
          type: 'dropdown',
          width: 80,
          source: ['Rev', 'APA', 'AllocAdj','Virement','Transfer','YEAdj','Change AppStatus'],
          readOnly: true
      },
      {
        data: 'scenario',
        type: 'text',
        width: 50,
        readOnly: true
      },
      {
        data: 'fund',
        type: 'text',
        width: 50,
        readOnly: true
      },
      {
        data: 'year',
        type: 'text',
        width: 50,
        readOnly: true
      },
      {
        data: 'account',
        type: 'text',
        width: 70,
        readOnly: true
      },
      
      {
          data: 'apr',
          type: 'numeric',
          width: 60,
          readOnly: true,
          forceNumeric: true,
          validator :dpValidatorRegexp,
      },
      {
          data: 'may',
          type: 'numeric',
          width: 60,
          readOnly: true,
          forceNumeric: true,
          validator :dpValidatorRegexp,        
      },
      {
          data: 'jun',
          type: 'numeric',
          width: 60,
          readOnly: true,
          forceNumeric: true,
          validator :dpValidatorRegexp,
      },
      {
          data: 'jul',
          type: 'numeric',
          width: 60,
          readOnly: true,
          forceNumeric: true,
          validator :dpValidatorRegexp,
      },
      {
          data: 'aug',
          type: 'numeric',
          width: 60,
          readOnly: true,
          forceNumeric: true,
          validator :dpValidatorRegexp,
      },
      {
          data: 'sep',
          type: 'numeric',
          width: 60,
          readOnly: true,
          forceNumeric: true,
          validator :dpValidatorRegexp,
      },
      {
          data: 'oct',
          type: 'numeric',
          width: 60,
          readOnly: true,
          forceNumeric: true,
          validator :dpValidatorRegexp,
      },
      {
          data: 'nov',
          type: 'numeric',
          width: 60,
          readOnly: true,
          forceNumeric: true,
          validator :dpValidatorRegexp,
      },
      {
          data: 'dec',
          type: 'numeric',
          width: 60,
          readOnly: true,
          forceNumeric: true,
          validator :dpValidatorRegexp,
      },
      {
          data: 'jan',
          type: 'numeric',
          width: 60,
          readOnly: true,
          forceNumeric: true,
          validator :dpValidatorRegexp,
      },
      {
          data: 'feb',
          type: 'numeric',
          width: 60,
          readOnly: true,
          forceNumeric: true,
          validator :dpValidatorRegexp,
      },
      {
          data: 'mar',
          type: 'numeric',
          width: 60,
          readOnly: true,
          forceNumeric: true,
          validator :dpValidatorRegexp,
      },
      {
          data: 'p13',
          type: 'numeric',
          width: 60,
          readOnly: true,
          forceNumeric: true,
          validator :dpValidatorRegexp,

      },
      {
          data: 'p14',
          type: 'numeric',
          width: 60,
          readOnly: true,
          forceNumeric: true,
          validator :dpValidatorRegexp,
      },
      {
        data: 'sum',
        type: 'numeric',
        width: 60,
        readOnly: true,
      },
    ],
  columnsClus11:[
      {
          data: 'id',
          type: 'text',
          width: 70,
          readOnly: true
      },
      {
          data: 'budgetnature',
          type: 'dropdown',
          width: 70,
          source: ['R', 'C', 'O']
      },
      {
          data: 'budgetType',
          type: 'dropdown',
          width: 80,
          source: ['Rev', 'APA', 'AllocAdj','Virement','Transfer','YEAdj','Change AppStatus']
      },
      {
          data: 'entity',
          type: 'numeric',
          width: 50,
          readOnly: false
      },
      {
          data: 'account',
          type: 'numeric',
          width: 70,
          readOnly: false
      },
      {
          data: 'section',
          type: 'numeric',
          width: 70,
          readOnly: false
      },
      {
        data: 'type',
        type: 'text',
        width: 70,
        readOnly: false
      },
      {
          data: 'analytical',
          type: 'text',
          width: 60,
          readOnly: false
      },
      {
          data: 'posted',
          type: 'text',
          width: 50,
          readOnly: false
      },
      /* {
          data: 'postDate',
          type: 'text',
          width: 70,
          readOnly: false
      }, */
      {
          data: 'apr',
          type: 'numeric',
          width: 50,
          readOnly: false,
          forceNumeric: true,
          validator :dpValidatorRegexp,
          
      },
      {
          data: 'may',
          type: 'numeric',
          width: 50,
          readOnly: false,
          forceNumeric: true,
          validator :dpValidatorRegexp,        
      },
      {
          data: 'jun',
          type: 'numeric',
          width: 50,
          readOnly: false,
          forceNumeric: true,
          validator :dpValidatorRegexp,
      },
      {
          data: 'jul',
          type: 'numeric',
          width: 50,
          readOnly: false,
          forceNumeric: true,
          validator :dpValidatorRegexp,
      },
      {
          data: 'aug',
          type: 'numeric',
          width: 50,
          readOnly: false,
          forceNumeric: true,
          validator :dpValidatorRegexp,
      },
      {
          data: 'sep',
          type: 'numeric',
          width: 50,
          readOnly: false,
          forceNumeric: true,
          validator :dpValidatorRegexp,
      },
      {
          data: 'oct',
          type: 'numeric',
          width: 50,
          readOnly: false,
          forceNumeric: true,
          validator :dpValidatorRegexp,
      },
      {
          data: 'nov',
          type: 'numeric',
          width: 50,
          readOnly: false,
          forceNumeric: true,
          validator :dpValidatorRegexp,
      },
      {
          data: 'dec',
          type: 'numeric',
          width: 50,
          readOnly: false,
          forceNumeric: true,
          validator :dpValidatorRegexp,
      },
      {
          data: 'jan',
          type: 'numeric',
          width: 50,
          readOnly: false,
          forceNumeric: true,
          validator :dpValidatorRegexp,
      },
      {
          data: 'feb',
          type: 'numeric',
          width: 50,
          readOnly: false,
          forceNumeric: true,
          validator :dpValidatorRegexp,
      },
      {
          data: 'mar',
          type: 'numeric',
          width: 50,
          readOnly: false,
          forceNumeric: true,
          validator :dpValidatorRegexp,
      },
      {
          data: 'p13',
          type: 'numeric',
          width: 50,
          readOnly: false,
          forceNumeric: true,
          validator :dpValidatorRegexp,
      },
      {
          data: 'p14',
          type: 'numeric',
          width: 50,
          readOnly: false,
          forceNumeric: true,
          validator :dpValidatorRegexp,
      },
      {
        data: 'sum',
        type: 'numeric',
        width: 50,
        readOnly: true,
        
    },
  ],

};




  /*[
     {
        key: "id",
        name: "ID",
        frozen: true,
        editable: false ,
        hidden: true,
        width: 1,
    },
    {
        key: "account",
        name: "",
        frozen: true,
        editable: false 
    },
    
    {
      key: "yearTotal",
      name: "Year Total",
      frozen: false,
      editable: true 
    , 
    {
      key: "apr",
      name: "Apr",
      frozen: false,
      editable: true 
    },
    {
      key: "may",
      name: "May",
      frozen: false,
      editable: true 
    },
    {
      key: "jun",
      name: "Jun",
      frozen: false,
      editable: true 
    },
    {
      key: "jul",
      name: "Jul",
      frozen: false,
      editable: true 
    },
    {
      key: "aug",
      name: "Aug",
      frozen: false,
      editable: true 
    },
    {
      key: "sep",
      name: "Sep",
      
      editable: false ,
      editor:NumericEditor
    },
    {
      key: "oct",
      name: "Oct",
      editable: true 
    },
    {
      key: "nov",
      name: "Nov",
      editable: true 
    },
    {
      key: "dec",
      name: "Dec",
      editable: true 
    },
    {
      key: "jan",
      name: "Jan",
      editable: true 
    },
    {
      key: "feb",
      name: "Feb",
      editable: true 
    },
    {
      key: "mar",
      name: "Mar",
      editable: true 
    },
    {
      key: "p13",
      name: "P13",
      editable: true 
    },
    {
        key: "p14",
        name: "P14",
        editable: true 
    } */
    /* ,{
      key:"updateButton",
      name:"Update",
    } 
  
    
  ].map(c => ({ ...c, ...defaultColumnProperties }));*/

 
  
