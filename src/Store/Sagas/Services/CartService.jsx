export async function createData(payload) {
  var response = await fetch("/cart", {
    method: "post",
    headers: {
      "contant-type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  return await response.json();
}

export async function getData(payload) {
  var response = await fetch("/cart", {
    method: "get",
    headers: {
      "contant-type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  return await response.json();
}

export async function updateData(payload) {
  var response = await fetch("/cart/" + payload.id, {
    method: "put",
    headers: {
      "contant-type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  return await response.json();
}

export async function deleteData(payload) {
  var response = await fetch("/cart/" + payload.id, {
    method: "delete",
    headers: {
      "contant-type": "application/json",
    },
  });
  return await response.json();
}
