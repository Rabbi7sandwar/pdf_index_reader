
  const pdfjsLib = require('pdfjs-dist');

  const url = './pdf/becomingpdf.pdf'; // Replace with your PDF file URL
  
  async function getPageIndices() {
    try {
      const pdf = await pdfjsLib.getDocument(url).promise;
      const outline = await pdf.getOutline();
      if (outline.length <= 1) {
        var obj = outline[0].items;
      } else {
        var obj = outline;
      }
      const promises = obj.map(async function(item) {
        try {
          const pageIndex = await pdf.getPageIndex(item.dest[0]);
          return pageIndex; // Return the pageIndex Promise
        } catch (error) {
          console.error(error);
          return 0; // Return null if there was an error
        }
      });
      const pageIndices = await Promise.all(promises);
      return pageIndices; // Return the pageIndices array
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  
 getPageIndices().then(async function(pageIndices) {
    // for (let i = 0; i< pageIndices.length; i++){
    //   let indices =await  pageIndices[i] + 1
     console.log(pageIndices)
    // }
  });









































  // const { PDFDocument } = require("pdf-lib");
// const fs = require("fs");
// const pdfParse = require('pdf-parse')

// async function splitPDFByChapters(pdfPath, chapters_) {
//     pdfParse('./pdf/unfinished.pdf').then(function(data) {

//         let outline = data; 
      
//         // outline contains the table of contents
//         console.log(outline); 
      
//       });

// }

// Example usage
// const pdfPath = "./pdf/maths.pdf";


// splitPDFByChapters(pdfPath, "chapters").catch((error) => {
//   console.error("Error splitting PDF:", error);
// });


// const fs = require('fs');
// const pdfParse = require('pdf-parse');
// const pdfkit = require('pdfkit');

// // Read the input PDF file
// const inputPdf = fs.readFileSync('./pdf/unfinished.pdf');

// // Parse the PDF file to extract the TOC
// pdfParse(inputPdf).then(function(data) {
//   // const toc = data.info['/Outlines'];
// console.log(data.info)

// });


  // // Create a new PDF file
  // const outputPdf = new pdfkit();

  // // Add the TOC to the new PDF file as the first page
  // outputPdf.addPage();
  // outputPdf.fontSize(18).text('Table of Contents', {align: 'center'});
  // toc.forEach(function(item) {
  //   outputPdf.fontSize(12).text(item.title, {indent: item.level * 20});
  // });

  // // Copy the remaining pages from the input PDF file to the output PDF file
  // const inputPages = new pdfkit(inputPdf);
  // for (let i = 1; i <= inputPages.pageCount; i++) {
  //   if (!toc.some(function(item) { return item.dest === `page=${i}` })) {
  //     outputPdf.addPage(inputPages.page[i-1]);
  //   }
  // }

  // // Write the output PDF file
  // outputPdf.pipe(fs.createWriteStream('output.pdf'));





  // const pdfjsLib = require('pdfjs-dist');

  // const url = './pdf/maths.pdf'; 
  
  // // Load the PDF file
  // pdfjsLib.getDocument(url).promise.then(function(pdf) {
  
  //   // Get the table of contents
  //   pdf.getOutline().then(function(outline) {
  
  //     // Output the table of contents to the console
  //     console.log("=======================",outline[0].items[1].dest);
  
  //   });
  
  // })





  // // Get the page index for the next TOC item (or the last page if there is no next item)
          // const nextIndex = outline.indexOf(item) + 1 < outline.length ? outline[outline.indexOf(item) + 1].dest[0] : pdf.numPages - 1;
          // console.log(nextIndex)
          // // // Calculate the number of pages between the current and next TOC items
          // const pageCount = nextIndex - item.dest[0];
  
          // // // Output the title and page count to the console
          // console.log(`${item.title} - ${pageCount} pages`);





























  // const pdfjsLib = require('pdfjs-dist');

  // const url = './pdf/unfinished.pdf'; // Replace with your PDF file URL
 


  // pdfjsLib.getDocument(url).promise.then(function(pdf) {
  //  pdf.getOutline().then(function(outline) {
     
  //     if( outline.length <= 1){
  //       var obj = outline[0].items
  //     }
  //     else{
  //       var obj = outline
  //     }
  //    obj.forEach(async function(item) {
  
  //       try {
       
  //         const pageIndex = await pdf.getPageIndex(item.dest[0]);

  //       } catch (error) {
  //         console.error(error);
  //       }
  //     });
  //   });
  
  // });














































//   const pdfData = await fs.promises.readFile(pdfPath);
//   const pdfDoc = await PDFDocument.load(pdfData);
//   const numPages = pdfDoc.getPageCount();
//   const chapters = [
//     { startPage: 1, endPage: 10, chapterName: "Chapter_0" },
//     { startPage: 11, endPage: 37, chapterName: "Chapter_1" },
//     // Add more chapters as needed
//   ];
//   for (let chapterIndex = 0; chapterIndex < chapters.length; chapterIndex++) {
//     const { startPage, endPage, chapterName } = chapters[chapterIndex];
//     if (startPage > endPage || startPage < 1 || endPage > numPages) {
//       console.error(`Invalid chapter range for chapter ${chapterIndex + 1}`);
//       continue;
//     }

//     const newPdfDoc = await PDFDocument.create();
//     for (let pageIndex = startPage - 1; pageIndex < endPage; pageIndex++) {
//       const [copiedPage] = await newPdfDoc.copyPages(pdfDoc, [pageIndex]);
//       newPdfDoc.addPage(copiedPage);
//     }

//     const newPdfBytes = await newPdfDoc.save();
//     const chapterFileName = `./save/Chapter_${chapterIndex + 1}.pdf`;
//     await fs.promises.writeFile(chapterFileName, newPdfBytes);
//     console.log(`Chapter ${chapterIndex + 1} saved as ${chapterFileName}`);
//   }
















// const fs = require('fs');
// const PDFDocument = require('pdf-lib').PDFDocument;
// const pdf = require('pdf-parse')

// async function splitPdf() {

//     const docmentAsBytes = await fs.promises.readFile('./pdf/unfinished.pdf');

//     // Load your PDFDocument
//     const pdfDoc = await PDFDocument.load(docmentAsBytes)

//     const numberOfPages = pdfDoc.getPages().length;

//     for (let i = 0; i < numberOfPages; i++) {
//         const subDocument = await PDFDocument.create();
//         const [copiedPage] = await subDocument.copyPages(pdfDoc, [i])
//         subDocument.addPage(copiedPage);
//         const pdfBytes = await subDocument.save()
//         await writePdfBytesToFile(`./save/becomingpdf-${i + 1}.pdf`, pdfBytes);
//     }
// }

// function writePdfBytesToFile(fileName, pdfBytes) {
//     return fs.promises.writeFile(fileName, pdfBytes);
// }



// (async () => {
//     await splitPdf();
// })();



// for (let i = 0; i < 15; i++) {
//     const subDocument = await PDFDocument.create();
//     const [copiedPage] = await subDocument.copyPages(pdfDoc, [i])
//     subDocument.addPage(copiedPage);
//     const pdfBytes = await subDocument.save()
//     await writePdfBytesToFile(`./save/file-${i + 1}.pdf`, pdfBytes);
//     let dataBuffer = fs.readFileSync(`./save/file-${i + 1}.pdf`);
//     pdf(dataBuffer).then(function (data) {
//         var search = data.text
//         if (search.includes('Contents')|| search.includes('contents') || search.includes('CONTENTS') || search.includes('Index') || search.includes('index')) {
//             // const subDocument = PDFDocument.create();
//             // const [copiedPage] = subDocument.copyPages(pdfDoc, [i])
//             // subDocument.addPage(copiedPage);
//             // const pdfBytes = subDocument.save()
//              writePdfBytesToFile(`./index/file.pdf`, search);
//             console.log("found it")
//         }
//     });
// }
// async function text(path, i) {
//     // const docmentAsBytes = await fs.promises.readFile(path);
//     // const pdfDoc = await PDFDocument.load(docmentAsBytes)
//     // let dataBuffer = fs.readFileSync(path);
//     // pdf(dataBuffer).then(function (data) {
//     // var search = data.text
//     // if(search.includes('Contents')){
//     //     const subDocument =  PDFDocument.create();
//     //     // // copy the page at current index
//     //     const [copiedPage] =  subDocument.copyPages(pdfDoc, [i])
//     //     subDocument.addPage(copiedPage);
//     //     const pdfBytes =  subDocument.save()
//     //     writePdfBytesToFile(`./index/file.pdf`, pdfBytes);
//     // }

//     // });
// }