const foods = [
  {
    name: 'Rendang',
    stadium: 'Kota Payakumbuh',
    fanArt: 'https://www.indonesia.travel/content/dam/indtravelrevamp/en/trip-ideas/10-makanan-khas-sumatera-barat-yang-menggoyang-lidah/1.jpg',
    description: 'Menu yang dibuat dari olahan daging sapi dan aneka rempah ini pernah menduduki peringkat pertama dalam daftar 50 hidangan paling lezat di dunia versi CNN International, lho. Sobat Pesona harus tahu nih, ternyata aneka bumbu dan rempah yang digunakan untuk mengolah rendang merupakan bumbu yang mengandung antiseptik. ',
  },
  {
    name: 'Sate Padang',
    stadium: 'Kota Pariaman',
    fanArt: 'https://www.indonesia.travel/content/dam/indtravelrevamp/en/trip-ideas/10-makanan-khas-sumatera-barat-yang-menggoyang-lidah/2.jpg',
    description: 'Kuliner olahan daging di Sumatera Barat lainnya adalah sate padang. Sebagian orang pasti kesulitan membedakan sate padang karena bentuknya berbeda-beda. Tak perlu bingung Sobat Pesona, karena sate padang memang hadir dalam tiga jenis, yakni sate padang, sate padang panjang, dan sate pariaman. Selain berbeda daerah asalnya, ketiga sate tersebut juga hadir dalam sajian bumbu kacang yang berbeda. Sate padang menggunakan bumbu kacang yang kental dan bentuknya menyerupai bubur. Sate pariaman memiliki kuah yang berwarna merah. Sedangkan, sate padang panjang biasanya disajikan dengan bumbu sate yang berwarna kuning',
  },
  {
    name: 'Dendeng Balado',
    stadium: 'Kota Padang',
    fanArt: 'https://www.indonesia.travel/content/dam/indtravelrevamp/en/trip-ideas/10-makanan-khas-sumatera-barat-yang-menggoyang-lidah/3.jpg',
    description: 'Makanan khas Sumatera Barat sepertinya memang didominasi oleh olahan daging sapi. Selain rendang dan sate padang, Sobat Pesona juga wajib menyantap dendeng balado. Makanan yang terbuat dari daging sapi ini dibuat dalam bentuk irisan tipis, lalu digoreng, dan dilumuri dengan bumbu balado yang kaya akan rempah dan cita rasa kuat. Sobat Pesona akan mudah menjumpai restoran atau tempat makan yang menjual dendeng balado dengan rasa otentik di Kota Padang, Sumatera Barat',
  },
  {
    name: 'Lontong Sayur',
    stadium: 'Kota Padang',
    fanArt: 'https://www.indonesia.travel/content/dam/indtravelrevamp/en/trip-ideas/10-makanan-khas-sumatera-barat-yang-menggoyang-lidah/4.jpg',
    description: 'Makanan khas Padang yang tak kalah populer dari rendang adalah lontong sayur. Makanan yang biasanya dijadikan menu sarapan oleh orang Minang ini punya cita rasa yang khas dan juga kaya akan rempah. Kuah santan yang kental serta bumbunya yang gurih mampu memikat lidah para pecinta kuliner seantero negeri. Selain di daerah Padang, Sobat Pesona bisa mencoba lontong sayur khas Minang ini di daerah Pariaman, yang lokasinya tidak begitu jauh dari Kota Padang',
  },
  {
    name: 'Ayam Pop',
    stadium: 'kota Bukitiingi',
    fanArt: 'https://www.indonesia.travel/content/dam/indtravelrevamp/en/trip-ideas/10-makanan-khas-sumatera-barat-yang-menggoyang-lidah/5.jpg',
    description: 'Warna ayam tidak menjadi coklat seperti ayam goreng pada umumnya karena sebelum digoreng, ayam tersebut sudah diolah dan diberi bumbu. Ayam itu direbus dengan air kelapa serta diberi bumbu bawang putih. Sangat unik bukan? Jika ingin merasakan ayam pop yang asli dan otentik, Sobat Pesona bisa datang langsung ke daerah Bukittinggi, Sumatera Barat.',
  },
  {
    name: 'Ikan Asam Padeh',
    stadium: 'Kota Pariaman',
    fanArt: 'https://www.indonesia.travel/content/dam/indtravelrevamp/en/trip-ideas/10-makanan-khas-sumatera-barat-yang-menggoyang-lidah/6.jpg',
    description: 'Menu yang satu ini biasa juga dikenal dengan nama ikan asam pedas dalam Bahasa Indonesia. Masakan dengan rasa asam dan pedas ini siap memberikan sensasi segar pada lidah dan perut Sobat Pesona. Tak terbatas pada satu jenis ikan saja, menu ikan asam padeh bisa menggunakan berbagai jenis ikan, mulai dari ikan tongkol, kakap, cumi, gurame, hingga ikan kembung. Tak sabar ingin mencicipinya? Sobat Pesona bisa langsung meluncur ke daerah Solok, Padang Panjang, atau Pariaman untuk merasakan kelezatan ikan asam padeh yang otentik.',
  },
  {
    name: 'Itiak Lado Mudo',
    stadium: 'Kota Bukitinggi',
    fanArt: 'https://www.indonesia.travel/content/dam/indtravelrevamp/en/trip-ideas/10-makanan-khas-sumatera-barat-yang-menggoyang-lidah/7.jpg',
    description: 'menu favorit wisatawan lokal hingga mancanegara, lho. Nah, jika Sobat Pesona ke Ngarai Sianok, wajib sekali menyantap kuliner satu ini, ya. Di sana ada sebuah rumah makan yang menyajikan itiak lado mudo sebagai menu utamanya dan selalu ramai pengunjung. Sambil menyantap itiak lado mudo yang lezat, Sobat Pesona juga bisa melihat pemandangan Ngarai Sianok yang memesona.',
  },
  {
    name: 'Lamang',
    stadium: 'Kabupaten Tanah Datar',
    fanArt: 'https://www.indonesia.travel/content/dam/indtravelrevamp/en/trip-ideas/10-makanan-khas-sumatera-barat-yang-menggoyang-lidah/8.jpg',
    description: 'Inilah kudapan klasik khas Sumatera Barat yang masih eksis hingga saat ini. Lamang merupakan olahan ketan yang dicampur dengan santan. Ketan tersebut akan dibungkus dengan daun pisang lalu dimasukkan ke dalam bambu untuk selanjutnya dibakar. Jika Sobat Pesona ingin mencicipi lamang dari tanah kelahirannya, datanglah ke daerah Tanah Datar, Sumatera Barat. Cuaca yang dingin di Tanah Datar, akan terasa lebih hangat saat Sobat Pesona menyantap lamang yang masih hangat.',
  },
  {
    name: 'Sala Lauk',
    stadium: 'Kota Pariaman ',
    fanArt: 'https://www.indonesia.travel/content/dam/indtravelrevamp/en/trip-ideas/10-makanan-khas-sumatera-barat-yang-menggoyang-lidah/9.jpg',
    description: 'Indonesia punya banyak sajian kuliner, mulai dari makanan berat hingga cemilan yang nikmat. Salah satu camilan yang sangat menggoda untuk dicoba adalah sala lauak. Kuliner yang satu ini adalah gorengan khas Pariaman. Karena berbentuk bulat, banyak juga yang menyebut kudapan ini mirip dengan combro dari Jawa Barat. Bedanya, sala lauak tidak menggunakan oncom, melainkan teri atau udang halus. Gorengan ini memiliki tekstur renyah di bagian luar, tapi lembut di bagian dalamnya.',
  },
  {
    name: 'Bika Talago',
    stadium: 'Kota Pariaman ',
    fanArt: 'https://www.indonesia.travel/content/dam/indtravelrevamp/en/trip-ideas/10-makanan-khas-sumatera-barat-yang-menggoyang-lidah/10.jpg',
    description: 'Makanan ini akan disajikan hangat-hangat, karena biasanya baru akan dimasak ke dalam tungku pembakaran ketika ada yang membeli. Bika talago memiliki rasa yang gurih dan manis berkat perpaduan antara tepung beras, kelapa parut, serta gula merah dan gula putih. ',
  }
];

export default foods;
