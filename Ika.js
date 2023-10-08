// function dan nested if
function tekan()
        {
           var jumlahtiket = parseFloat(document.ika.ijumlahtiket.value);
           var nama = (document.ika.inama.value);
           var tujuan = (document.ika.itujuan.value);
           var kelas = (document.ika.ikelas.value);
           var ht = 0.0;
           var sub = 0.0;
           var diskon = 0.0;
           var total = 0.0;
        
           if ((tujuan == "Konohagakure")&&(kelas == "Eksekutif"))
           {
             ht = 1500000;
           }
           else if ((tujuan == "Konohagakure")&&(kelas == "Ekonomi"))
           {
             ht = 1000000;
           }
           else if ((tujuan == "Sunagakure")&&(kelas == "Eksekutif"))
           {
             ht = 1250000;
           }
           else if ((tujuan == "Sunagakure")&&(kelas == "Ekonomi"))
           {
             ht = 1000000;
           }
           else if((tujuan == "Iwagakure") &&(kelas == "Eksekutif"))
           {
             ht = 1570000;
           }
           else if ((tujuan == "Iwagakure")&&(kelas == "Ekonomi"))
           {
             ht = 1200000;
           }
   
            sub = jumlahtiket*ht;
  
          if (document.ika.imember.checked == true)
          {
            diskon = 0.10*ht;
          }
          else
          {
            diskon = 0.0*ht;
          }
 
           total = sub - diskon;
 
           document.ika.otiket.value = eval(ht);
           document.ika.osub.value = eval(sub);
           document.ika.odiskon.value = eval(diskon);
           document.ika.ototal.value = eval(total);
        }
  
// switch case
function gift(){
  var jawab = prompt("kamu beruntung! Silahkan pilih hadiah kamu dengan memasukkan angka 1 sampai 5");
  var hadiah = "";
  
  switch(jawab){
      case "1":
          hadiah = "1 Set Baka Comics season 3";
      break;
      case "2":
          hadiah = " Mini Action Figur Naruto";
      break;
      case "3":
          hadiah = "Tumbler ";
      break;
      case "4":
          hadiah = "Ganci karakter";
      break;
      case "5":
          hadiah = "Gelang karakter";
      break;
      default:
        document.getElementById("gift").innerHTML = "<p>Oops anda salah pilih </p>"  ;
        
  }
  // if statement
  if (hadiah ===""){
      //document.write("<p>Kamu gagal mendapatkan hadiah </p>");
      document.getElementById("gift").innerHTML = "<p>Kamu Gagal mendapatkan hadiah </p>"  ;
        
  }else {
      //document.write("<h2>Selamat kamu mendapatkan : "+hadiah+" </h2>");
      document.getElementById("gift").innerHTML = "Selamat Kamu Mendapatkan : " +hadiah+ ""  ;
  }
  alert("Terimakasih Sudah Mempercayakan Perjalanan Anda kepada Kami")
}


//if statement
function diskon(){
  var totalBelanja = prompt("Total Belanja?", 0);
       
if(totalBelanja > 100000){
    
    document.getElementById("diskon").innerHTML = "Selamat Anda mendapatkan Gratis Ongkir 50%";
 
}
alert("<p> Terimakasih Sudah Belanja di Toko kami</p>");
}


//if else statement
function message(){
  var Email = prompt("Masukkan Email");

        if(Email =="ika@gmail.com" ){
          document.getElementById("message").innerHTML = "Selamat Datang Ika ";
        }
        else{
            document.getElementById("message").innerHTML = "Email Anda salah, Silahkan coba lagi";
            
        }
        alert("<p> Terimakasih sudah menggunakan Website kami</p>");

}

// for statement
function ulang(){
  for( let i = 0; i < 100; i++){
    document.getElementById("ulang").innerHTML = " <b>Gojo Jadi Kiko!</b> ".repeat(99);
}

}


// while statement
function repeat(){
var ulangi = confirm("Apakah anda mau resend?");
var counter = 0;

while(ulangi){
    counter++;
    ulangi = confirm("Apakah anda mau resend?");
}
document.getElementById("repeat").innerHTML = " Perulangan sudah dilakukan sebanyak "+ counter +" kali ";
  
}

//do while
function perulangan(){
  urutan= 1
do {
   document.write("Kencan hari ke "+urutan+"<br>")
   urutan++
}while(urutan<=10)
}
