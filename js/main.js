window.onload = async function() {
  const status = await getServerStatus();
  document.getElementById('status').textContent = status;

  document.getElementById('start-button').onclick = sendStartCmd;
  document.getElementById('stop-button').onclick = sendStopCmd;
}

const url = '<ENDPOINT HERE>';

async function getServerStatus() {
  const endpoint = url + '/server/status';
  const response = await fetch(endpoint, {
    mode: 'cors',
  });
  const data = await response.json();
  console.log(data);
  return data.state;
}

async function startServer() {
  const endpoint = url + '/server/start';
  const response = await fetch(endpoint, {
    method: 'post',
    mode: 'cors',
  });
  return await response.json();
}

async function stopServer() {
  const endpoint = url + '/server/stop';
  const response = await fetch(endpoint, {
    method: 'post',
    mode: 'cors',
  });
  return await response.json();
}

async function sendStartCmd() {
  const response = await startServer();
  console.log(response);
  const status = await getServerStatus();
  document.getElementById('status').textContent = status;
}

async function sendStopCmd() {
  const response = await stopServer();
  console.log(response);
  const status = await getServerStatus();
  document.getElementById('status').textContent = status;
}
