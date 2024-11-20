const AIRTABLE_API_KEY = import.meta.env.VITE_AIRTABLE_API_KEY;

const BASE_URL = `https://api.airtable.com/v0/appaur5YF91IrcNeN`;

export function checkResponse(res) {
  if (!res.ok) {
    return res.json().then((error) => {
      console.error("Server responded with an error:", error);
      return Promise.reject(error);
    });
  }
  return res.json();
}

async function request(url, options) {
  const res = await fetch(url, options);
  return checkResponse(res);
}

export async function fetchRecords(tableName) {
  const url = `${BASE_URL}/${tableName}`;
  return request(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${AIRTABLE_API_KEY}`,
      "Content-Type": "application/json",
    },
  });
}

export async function createRecord(tableName, record) {
  const url = `${BASE_URL}/${tableName}`;
  return request(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${AIRTABLE_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      fields: record,
    }),
  });
}
