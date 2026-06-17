const DOWNLOAD_CODES = [
  "MM202601",
  "MM202602",
  "MM202603"
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
