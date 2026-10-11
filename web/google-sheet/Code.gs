/**
 * Mandir Triloki Dhaam: website forms -> this Google Sheet.
 *
 * Every form on the website ends up here as one row. Each kind of form gets its own tab (Lessen, Vrijwilligers,
 * Ceremonies, Vragen aan de pandit, ...), created the first time it is needed. Columns are added by themselves
 * when a form sends a field the tab has not seen before.
 *
 * Set-up, once, signed in as the mandir's Google account:
 *   1. Create a new Google Sheet and name it, for example, "Website: aanmeldingen".
 *   2. Extensions > Apps Script. Replace everything there with this file.
 *   3. Change SECRET below to a long random phrase of your own. Keep it private.
 *   4. Deploy > New deployment > type "Web app". Execute as: Me. Who has access: Anyone. Deploy, and allow access.
 *   5. Copy the web app URL (it ends in /exec).
 *   6. In Vercel > Project > Settings > Environment Variables, add
 *        SHEET_WEBHOOK_URL = that URL
 *        SHEET_SECRET      = the same phrase as SECRET below
 *      and redeploy.
 * To be e-mailed about new rows: in the Sheet, Tools > Notification settings > "Any changes are made".
 * After changing this script, use Deploy > Manage deployments > Edit > New version, so the URL stays the same.
 */
const SECRET = 'CHANGE-ME-to-a-long-random-phrase';

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    if (SECRET === 'CHANGE-ME-to-a-long-random-phrase' || data.secret !== SECRET) return reply({ ok: false, error: 'forbidden' });
    const tab = String(data.tab || 'Overig').slice(0, 60);
    const fields = data.fields || {};
    const book = SpreadsheetApp.getActiveSpreadsheet();
    const lock = LockService.getScriptLock();
    lock.waitLock(20000);
    try {
      const sheet = book.getSheetByName(tab) || book.insertSheet(tab);
      let head = sheet.getLastColumn() ? sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0] : [];
      if (!head.length) { head = ['Datum', 'Taal']; sheet.appendRow(head); sheet.setFrozenRows(1); sheet.getRange(1, 1, 1, 2).setFontWeight('bold'); }
      Object.keys(fields).forEach(function (key) {
        if (head.indexOf(key) < 0) { head.push(key); sheet.getRange(1, head.length).setValue(key).setFontWeight('bold'); }
      });
      const row = head.map(function (key) {
        if (key === 'Datum') return new Date();
        if (key === 'Taal') return data.lang || '';
        // A leading apostrophe keeps Sheets from treating what a visitor typed (=..., +31...) as a formula.
        return fields[key] === undefined ? '' : "'" + String(fields[key]);
      });
      sheet.appendRow(row);
    } finally { lock.releaseLock(); }
    return reply({ ok: true });
  } catch (err) {
    return reply({ ok: false, error: String(err) });
  }
}

function reply(body) {
  return ContentService.createTextOutput(JSON.stringify(body)).setMimeType(ContentService.MimeType.JSON);
}
