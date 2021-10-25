const { remote } = require('electron')
const { dialog } = remote
const gpuInfo = require('gpu-info');


var basic = document.getElementById('basic');
basic.addEventListener('click', () => {
    gpuInfo().then(function(data) {
        dialog.showMessageBox({
            title: "GPU Information",
            message: "Name " + data[0].Name
        })
    });
});