export function downloadCSV(data: any[], filename: string) {
  const csvRows = [];
  const headers = Object.keys(data[0]);
  csvRows.push(headers.join(","));

  for (const row of data) {
    const values = headers.map((header) => {
      const escaped = ("" + row[header]).replace(/"/g, '\\"');
      return `"${escaped}"`;
    });
    csvRows.push(values.join(","));
  }

  const blob = new Blob([csvRows.join("\n")], { type: "text/csv" });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.setAttribute("hidden", "");
  a.setAttribute("href", url);
  a.setAttribute("download", `${filename}.csv`);
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}




export function formatDate(dateString: string) {
  const date = new Date(dateString);
  const now = new Date();

  // Check if the date is today
  if (date.toDateString() === now.toDateString()) {
    const secondsAgo = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (secondsAgo < 60) {
      return `${secondsAgo} seconds ago`;
    }

    const minutesAgo = Math.floor(secondsAgo / 60);
    if (minutesAgo < 60) {
      return `${minutesAgo} minutes ago`;
    }

    const hoursAgo = Math.floor(minutesAgo / 60);
    return `${hoursAgo} hours ago`;
  }

  // If not today, use the previous formatting
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };

  return date.toLocaleDateString(undefined, options);
};