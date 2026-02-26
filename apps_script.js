/**
 * Google Apps Script to handle form submissions from Next.js with Enhanced Metadata
 */

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    // Define columns
    const columns = [
      "Timestamp", 
      "Name", 
      "Email", 
      "Company", 
      "Industry", 
      "IP Address", 
      "Location", 
      "Device/User Agent", 
      "Platform",
      "Screen Resolution"
    ];
    
    // Set headers if the sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(columns);
      // Format header row
      const headerRange = sheet.getRange(1, 1, 1, columns.length);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#f3f3f3");
    }
    
    // Append the form data and metadata
    sheet.appendRow([
      new Date().toLocaleString(),
      data.name,
      data.email,
      data.company,
      data.industry || "N/A",
      data.metadata?.ip || "N/A",
      data.metadata?.location || "N/A",
      data.metadata?.userAgent || "N/A",
      data.metadata?.platform || "N/A",
      data.metadata?.screenResolution || "N/A"
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({ result: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ result: "error", error: error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// OPTIONS is not supported by Apps Script for CORS in the way browsers expect
// Google Apps Script usually requires 'no-cors' mode on the fetch side or a redirect handler
function doOptions(e) {
  return ContentService.createTextOutput("");
}
