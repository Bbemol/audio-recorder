

const player = document.getElementById("player");
const stopBtn = document.getElementById("stop");
const recordBtn = document.getElementById("record");
const downloadLink = document.getElementById("download");

const handleSuccess = function (stream) {
  const options = { mimeType: "audio/webm" };
  let recordedChunks = [];
  const mediaRecorder = new MediaRecorder(stream, options);
  mediaRecorder.addEventListener("dataavailable", function (e) {
    if (e.data.size > 0) {
      recordedChunks.push(e.data);
    }
  });
  stopBtn.addEventListener("click", function () {
    mediaRecorder.stop();
  });

  mediaRecorder.addEventListener("stop", function () {
    downloadLink.href = URL.createObjectURL(new Blob(recordedChunks));
    downloadLink.download = "acetest.wav";
    player.src = URL.createObjectURL(new Blob(recordedChunks));

    var file = new Blob(recordedChunks, {type: 'audio/webm'});
    var metadata = {
        'name': 'aaaaaaa.wav', // Filename at Google Drive
        'mimeType': 'audio/webm', // mimeType at Google Drive
        'parents': '', // Folder ID at Google Drive
    };

    var accessToken = gapi.auth.getToken().access_token; // Here gapi is used for retrieving the access token.
    var form = new FormData();
    form.append('metadata', new Blob([JSON.stringify(metadata)], {type: 'application/json'}));
    form.append('file', file);

    fetch(`https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id`, {
      method: 'POST',
      headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }),
      body: form
    }).then((res) => {
      return res.json();
    }).then((val) => {
      console.log(val);
    })
    
    recordedChunks = [];
  });

  recordBtn.addEventListener("click", function () {
    mediaRecorder.start();
  });
};

navigator.mediaDevices
  .getUserMedia({ audio: true, video: false })
  .then(handleSuccess);