const DOWNLOAD_CODES = [
  "MM2026",
  "ZAKNIHONGO",
  "SSW123"
];

function checkAccessCode(){

  const input = document.getElementById("accessCode").value.trim();
  const error = document.getElementById("accessError");

  if(DOWNLOAD_CODES.includes(input)){
    document.getElementById("accessGate").style.display = "none";
  }else{
    error.innerText = "Kode salah. Hubungi admin.";
  }
}

window.checkAccessCode = checkAccessCode;
