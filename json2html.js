export default function json2html(data) {
  // Get all unique keys (columns)
  const columns = Array.from(new Set(data.flatMap(obj => Object.keys(obj))));

  // Create the table and add the data-user attribute
  let html = '<table data-user="tharshith.m.2767@gmail.com">';

  // Generate the header row
  html += '<thead><tr>';
  columns.forEach(col => {
    html += `<th>${col}</th>`;
  });
  html += '</tr></thead>';

  // Generate the body rows
  html += '<tbody>';
  data.forEach(row => {
    html += '<tr>';
    columns.forEach(col => {
      html += `<td>${row[col] !== undefined ? row[col] : ''}</td>`;
    });
    html += '</tr>';
  });
  html += '</tbody>';

  html += '</table>';
  return html;
}
