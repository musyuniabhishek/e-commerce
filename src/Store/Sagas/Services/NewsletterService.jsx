export async function createData(payload) {
  var response = await fetch("/newsletter", {
    method: "post",
    headers: {
      "contant-type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  return await response.json();
}

export async function getData(payload) {
  var response = await fetch("/newsletter", {
    method: "get",
    headers: {
      "contant-type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  return await response.json();
}

export async function updateData(payload) {
  var response = await fetch("/newsletter/" + payload.id, {
    method: "put",
    headers: {
      "contant-type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  return await response.json();
}

export async function deleteData(payload) {
  var response = await fetch("/newsletter/" + payload.id, {
    method: "delete",
    headers: {
      "contant-type": "application/json",
    },
  });
  return await response.json();
}
