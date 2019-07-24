const defaultColumnProperties = {
    resizable: true,
    //width: 80,
    sortable: true,
    filterable: true
  };


export const columns05 = [
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
    
    /* {
      key: "yearTotal",
      name: "Year Total",
      frozen: false,
      editable: true 
    }, */
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
      //editor:NumericEditor
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
    }/* ,{
      key:"updateButton",
      name:"Update",
    } */
  
    
  ].map(c => ({ ...c, ...defaultColumnProperties }));;