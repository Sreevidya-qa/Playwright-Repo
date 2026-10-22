const Exceljs = require ('exceljs'); //first import exceljs
//import {Exceljs} from 'exceljs'; //first import exceljs

async function writeExcelTest(searchValue,replacedValue,change,filePath) { //pass the text for search and the text to be replaced and also pass the file path as argmnt

    const workbook=new Exceljs.Workbook();// Workbook is an inbuilt method of exceljs to create a new workbook. //here we have created an object of workbook class and stored in workbook variable
    await workbook.xlsx.readFile(filePath) // readfile is an inbuilt method of exceljs to read the excel file and // it takes the file path as argmnt
    const worksheet=workbook.getWorksheet('Sheet1');

    const output= await readExcel(worksheet,searchValue);//first runwithout await then put

  // if (output.row === -1) {
  //   console.log( `"${searchValue}" not found.`);
  //   return;
  // }
    //const cell=worksheet.getCell(output.row,output.column+change.colChange); //insted of hardcode we use the object variables ,use change as last
    const cell=worksheet.getCell(output.row,output.column+change.colChange); //insted of hardcode we use the object variables ,use change as last 
    cell.value=replacedValue 
    await workbook.xlsx.writeFile(filePath);//re-write the file and save it again

}

//Read File
async  function readExcel(worksheet,searchValue) //worksheet want to read so passthat as argmnt
{
    
 let output={row:-1,column:-1} //move it here we used here
  worksheet.eachRow((row,rowNumber)=>{
 
    //inner for loop to iterate cell

    //eachCell Method itreate over all non-null cells in a row
    row.eachCell((cell,colNumber)=>{
     if(cell.value===searchValue)
       // if (cell.value && cell.value.toString().trim().toLowerCase() === searchValue.toString().trim().toLowerCase())
      {
        output.row=rowNumber; //update the row number using object
        output.column=colNumber; //update the column number using object

        console.log(cell.value)
        console.log(output.row); 
        console.log(output.column);
        
      }
    })

  })

  return output; //first run without this the explain now it return actuall col and row we use it on getcell so readExcel method asign to output
}

//call the function at the end
//first do this only
//writeExcelTest("maruthii","Hundai","C:/Document/VechicalBook.xlsx"); //pass searchText replacedValue and filepath as argmnt
//seccond do this for change any coresponding column valum we pass an object

//writeExcelTest('Tata Nexon',340000,{rowChange:0,colChange:1},"C:/Document/VechicalBook.xlsx") //and also pass this parameters as chane in writeExcelTest()
//writeExcelTest('Ferrari','Tesla',"/Users/hari/Desktop/Playwright/Utils/Vehicle.xlsx")
writeExcelTest('Tesla','DIESEL',{rowchange:0,colChange:2},"/Users/hari/Desktop/Playwright/Utils/Vehicle.xlsx")