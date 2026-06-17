const DOWNLOAD_CODES = [
  "MM202606",
  "MM202607",
  "MM202608"
];

window.addEventListener("load", () => {

  if(localStorage.getItem("download_access") === "ok"){

    const gate = document.getElementById("accessGate");

    if(gate){
      gate.style.display = "none";
    }

  }

});

function checkAccessCode(){

  const input =
    document.getElementById("accessCode").value.trim();

  const error =
    document.getElementById("accessError");

  if(DOWNLOAD_CODES.includes(input)){

    localStorage.setItem(
      "download_access",
      "ok"
    );

    document.getElementById(
      "accessGate"
    ).style.display = "none";

  }else{

    error.innerText =
      "Kode salah. Hubungi admin.";

  }

}

window.checkAccessCode = checkAccessCode;

function logoutDownload(){

  localStorage.removeItem(
    "download_access"
  );

  location.reload();

}

window.logoutDownload = logoutDownload;
