var isThereNewCampain=false;


// aeropostale
var icon2=false;
//bananerepuvlic
var icon3=false;
//gap
var icon22=false;                         
//mark spencer
var icon27=false;
// if user exist set true
var is_guest = false;

var lat_end = "28.72082";
var lng_end = "77.107241";
var clicked_val;

var lineChartData = {
 labels : ["","","","","","",""],
 datasets : [
 {
 fillColor : "rgba(151,187,205,0.5)",
 strokeColor : "rgba(151,187,205,1)",
 pointColor : "rgba(151,187,205,1)",
 pointStrokeColor : "#fff",
 data : [50,90,140,190,500,750,1050]
 }
 ]
 };

var pieData = [
    {
        value: 300,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Swiss Otel"
    },
    {
        value: 50,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "GAP"
    },
    {
        value: 100,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Fiba Emeklilik"
    },
    {
        value: 40,
        color: "#949FB1",
        highlight: "#A8B3C5",
        label: "FibaBank"
    },
    {
        value: 120,
        color: "#4D5360",
        highlight: "#616774",
        label: "Mark&Spencers"
    }

];
    var pieOptions = [
{
    //Boolean - Whether we should show a stroke on each segment
    segmentShowStroke : true,
    //String - The colour of each segment stroke
    segmentStrokeColor : "#fff",
    //Number - The width of each segment stroke
    segmentStrokeWidth : 2,
    //Number - The percentage of the chart that we cut out of the middle
    percentageInnerCutout : 50, // This is 0 for Pie charts

    //Number - Amount of animation steps
    animationSteps : 100,
    //String - Animation easing effect
    animationEasing : "easeOutBounce",

    //Boolean - Whether we animate the rotation of the Doughnut
    animateRotate : true,

    //Boolean - Whether we animate scaling the Doughnut from the centre
    animateScale : false,

    //String - A legend template
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"

}
];		 

var sexArray = 
[
     {name : 'Kadın', value : 'Kadın'}
    ,{name : 'Erkek', value : 'Erkek'}
    ,{name : 'Kız Çocuğu', value : 'Kız Çocuğu'}
    ,{name : 'Erkek Çocuğu', value : 'Erkek Çocuğu'}
    ,{name : 'Ev Dekorasyonu', value : 'Ev Dekorasyonu',sex:'Kadın'}    
];

var ProductTypeArray =
[
     {name : 'Moda', value : 'Moda', sex:'Kadın'}
    ,{name : 'İç Giyim', value : 'İç Giyim',sex:'Kadın'}
    ,{name : 'Güzellik', value : 'Güzellik',sex:'Kadın'}
];

var ProductSubTypeArray =
[
     {name : 'M&S', value : 'M&S', sex:'Kadın', uppermenu:'Moda'}
    ,{name : 'Peruna', value : 'Peruna',sex:'Kadın', uppermenu:'Moda'}
    ,{name : 'Limited Edition', value : 'Limited Edition',sex:'Kadın', uppermenu:'Moda'}
    ,{name : 'Classic', value : 'Classic',sex:'Kadın', uppermenu:'Moda'}
    ,{name : 'Indigo Collection', value : 'Indigo Collection',sex:'Kadın', uppermenu:'Moda'}    
];

var ProductArray =
[
     {name_ : 'Elbise',name : '1', value : 'Fashion_Women_Collection_MScollection_Spring_Slide2_.jpg',brand:'M&S',price:'650',stock:'1',stock_branches:'AkMerkez,Akasya,Cevahir',desc:'Kendi Markamıza özel olarak üretilmiş bu ürünümüzden çok memnun kalacaksınız.'}
    ,{name_ : 'Elbise',name : '2', value : 'Fashion_Women_Collection_MScollection_Spring_Slide4_.jpg',brand:'M&S',price:'720',stock:'9',stock_branches:'Kanyon, Meydan,Zorlu Center',desc:'Kendi Markamıza özel olarak üretilmiş bu ürünümüzden çok memnun kalacaksınız.'}
    ,{name_ : 'Elbise',name : '3', value : 'Fashion_Women_Collection_MScollection_Spring_Slide5_.jpg',brand:'M&S',price:'550',stock:'5',stock_branches:'İstinyePark,Trump Tower,Palladium',desc:'Kendi Markamıza özel olarak üretilmiş bu ürünümüzden çok memnun kalacaksınız.'}
    ,{name_ : 'Elbise',name : '4', value : 'Fashion_Women_Collection_MScollection_Spring_Slide6_.jpg',brand:'M&S',price:'450',stock:'7',stock_branches:'Vialand, Zorlu Center,Demirören İstiklal',desc:'Kendi Markamıza özel olarak üretilmiş bu ürünümüzden çok memnun kalacaksınız.'}
    ,{name_ : 'Elbise',name : '5', value : 'Fashion_Women_Collection_MScollection_Spring_Slide7_.jpg',brand:'M&S',price:'1050',stock:'6',stock_branches:'Akasya, Akbatı,Meydan',desc:'Kendi Markamıza özel olarak üretilmiş bu ürünümüzden çok memnun kalacaksınız.'}
    ,{name_ : 'Elbise',name : '6', value : 'Fashion_Women_Collection_MScollection_Spring_Slide11_.jpg',brand:'M&S',price:'950',stock:'2',stock_branches:'Trump Towers,Vialand,Zorlu Center',desc:'Kendi Markamıza özel olarak üretilmiş bu ürünümüzden çok memnun kalacaksınız.'}
    ,{name_ : 'Elbise',name : '7', value : 'Fashion_Women_Collection_MScollection_Spring_Slide31_.jpg',brand:'M&S',price:'850',stock:'4',stock_branches:'Akmerkez, Kanyon,Vialand,Akasya',desc:'Kendi Markamıza özel olarak üretilmiş bu ürünümüzden çok memnun kalacaksınız.'}
    
    ,{name_ : 'Elbise',name : '8', value : 'Fashion_Women_Collection_Limited_Spring_990x550_slide1_.jpg',brand:'Limited Edition',price:'450',stock:'1',stock_branches:'Akmerkez, Kanyon,Vialand,Akasya',desc:'Kendi Markamıza özel olarak üretilmiş bu ürünümüzden çok memnun kalacaksınız.'}
    ,{name_ : 'Elbise',name : '9', value : 'Fashion_Women_Collection_Limited_Spring_990x550_slide2_.jpg',brand:'Limited Edition',price:'550',stock:'2',stock_branches:'Trump Towers,Vialand,Zorlu Center',desc:'Kendi Markamıza özel olarak üretilmiş bu ürünümüzden çok memnun kalacaksınız.'}
    ,{name_ : 'Elbise',name : '10', value : 'Fashion_Women_Collection_Limited_Spring_990x550_slide3_.jpg',brand:'Limited Edition',price:'650',stock:'3',stock_branches:'Akasya, Akbatı,Meydan',desc:'Kendi Markamıza özel olarak üretilmiş bu ürünümüzden çok memnun kalacaksınız.'}
    ,{name_ : 'Elbise',name : '11', value : 'Fashion_Women_Collection_Limited_Spring_990x550_slide4_.jpg',brand:'Limited Edition',price:'750',stock:'4',stock_branches:'İstinyePark,Trump Tower,Palladium',desc:'Kendi Markamıza özel olarak üretilmiş bu ürünümüzden çok memnun kalacaksınız.'}

    ,{name_ : 'Elbise',name : '12', value : 'Fashion_Women_Collection_Indigo_Spring_990x550_slide1_.jpg',brand:'Indigo Collection',price:'450',stock:'1',stock_branches:'AkMerkez,Akasya,Cevahir',desc:'Kendi Markamıza özel olarak üretilmiş bu ürünümüzden çok memnun kalacaksınız.'}
    ,{name_ : 'Elbise',name : '13', value : 'Fashion_Women_Collection_Indigo_Spring_990x550_slide2_.jpg',brand:'Indigo Collection',price:'475',stock:'2',stock_branches:'Kanyon, Meydan,Zorlu Center',desc:'Kendi Markamıza özel olarak üretilmiş bu ürünümüzden çok memnun kalacaksınız.'}
    ,{name_ : 'Elbise',name : '14', value : 'Fashion_Women_Collection_Indigo_Spring_990x550_slide3_.jpg',brand:'Indigo Collection',price:'525',stock:'3',stock_branches:'Vialand, Zorlu Center,Demirören İstiklal',desc:'Kendi Markamıza özel olarak üretilmiş bu ürünümüzden çok memnun kalacaksınız.'}
    ,{name_ : 'Elbise',name : '15', value : 'Fashion_Women_Collection_Indigo_Spring_990x550_slide5_.jpg',brand:'Indigo Collection',price:'550',stock:'4',stock_branches:'Akasya, Akbatı,Meydan',desc:'Kendi Markamıza özel olarak üretilmiş bu ürünümüzden çok memnun kalacaksınız.'}
    ,{name_ : 'Elbise',name : '16', value : 'Fashion_Women_Collection_Indigo_Spring_990x550_slide6_.jpg',brand:'Indigo Collection',price:'650',stock:'5',stock_branches:'Akmerkez, Kanyon,Vialand,Akasya',desc:'Kendi Markamıza özel olarak üretilmiş bu ürünümüzden çok memnun kalacaksınız.'}
];

var HospitalArray = 
[
     {name : 'İstanbul F.N.H.', value : '1'}
    ,{name : 'Şişli F.N.H.', value : '2'}
    ,{name : 'Gayrettepe F.N.H.', value : '3'}
    ,{name : 'Kadıköy F.N.H.', value : '4'}
    ,{name : 'Göktürk F.N. Tıp Merkezi', value : '5'}    
];

var DepartmanArray = 
[
 {value:'1', name :'Acil Ünitesi'}
,{value:'2', name :'Ağız, Çene ve Diş Sağlığı Merkezi'}
,{value:'3', name :'Aile Hekimliği'}
,{value:'4', name :'Algoloji (Ağrı) Merkezi'}
,{value:'5', name :'Androloji'}
,{value:'6', name :'Anesteziyoloji'}
,{value:'7', name :'Anjiyografi'}
,{value:'8', name :'Astım Teşhis Tedavi'}
,{value:'9', name :'Ayak Sağlığı ve Ayak Cerrahisi'}
,{value:'10', name :'Beslenme ve Diyet'}
,{value:'11', name :'Beyin ve Sinir Cerrahisi'}
,{value:'12', name :'Biyokimya'}
,{value:'13', name :'Böbrek Nakli Merkezi'}
,{value:'14', name :'Büyüme ve Ergenlik Merkezi'}
,{value:'15', name :'Check-Up'}
,{value:'16', name :'Çocuk Alerjisi'}
,{value:'17', name :'Çocuk Cerrahisi'}
,{value:'18', name :'Çocuk Endokrinoloji'}
,{value:'19', name :'Çocuk Gastroenterolojisi'}
,{value:'20', name :'Çocuk Kardiyolojisi'}
,{value:'21', name :'Çocuk Nörolojisi'}
,{value:'22', name :'Çocuk Ortopedisi'}
,{value:'23', name :'Çocuk Sağlığı ve Hastalıkları'}
,{value:'24', name :'Çocuk Ürolojisi'}
,{value:'25', name :'Çocuk ve Ergen Ruh Sağlığı ve Hastalıkları'}
,{value:'26', name :'Dahiliye'}
,{value:'27', name :'Dermatoloji'}
,{value:'28', name :'Ekokardiyografi'}
,{value:'29', name :'El Cerrahisi'}
,{value:'30', name :'Embriyoloji'}
,{value:'31', name :'Endokrinoloji ve Metabolizma Hastalıkları'}
,{value:'32', name :'Endoüroloji ve Robotik Cerrahi'}
,{value:'33', name :'Enfeksiyon Has.ve Klinik Mikrobiyoloji'}
,{value:'34', name :'Estetik, Plastik ve Rekonstrüktif Cerrahi'}
,{value:'35', name :'Fetal Maternal Tıp Merkezi'}
,{value:'36', name :'Fizik Tedavi ve Rehabilitasyon'}
,{value:'37', name :'Gastroenteroloji'}
,{value:'38', name :'Gastrointestinal Cerrahi'}
,{value:'39', name :'Genel Cerrahi'}
,{value:'40', name :'Genetik Hastalıklar Tanı Merkezi'}
,{value:'41', name :'Geriatri'}
,{value:'42', name :'Göğüs Cerrahisi'}
,{value:'43', name :'Göğüs Hastalıkları'}
,{value:'44', name :'Göz Hastalıkları'}
,{value:'45', name :'Hematoloji'}
,{value:'46', name :'İç Hastalıklar'}
,{value:'47', name :'İmmünoloji (Doku Tipleme)'}
,{value:'48', name :'İnme Merkezi'}
,{value:'49', name :'Kadın Hastalıkları ve Doğum'}
,{value:'50', name :'Kalp ve Damar Cerrahisi'}
,{value:'51', name :'Kan ve Transfüzyon Ünitesi'}
,{value:'52', name :'Karaciğer ve Safra Yolu Hastalıkları'}
,{value:'53', name :'Kardiyak Rehabilitasyon Merkezi'}
,{value:'54', name :'Kardiyoloji'}
,{value:'55', name :'Klinik Psikoloji Merkezi'}
,{value:'56', name :'Kulak Burun Boğaz'}
,{value:'57', name :'Makula Dejenerasyonu Merkezi'}
,{value:'58', name :'Medikal Onkoloji'}
,{value:'59', name :'Mikrobiyoloji'}
,{value:'60', name :'Nefroloji'}
,{value:'61', name :'Nöro-Üroloji'}
,{value:'62', name :'Nöroloji'}
,{value:'63', name :'Nöroradyoloji'}
,{value:'64', name :'Nükleer Kardiyoloji'}
,{value:'65', name :'Nükleer Tıp'}
,{value:'66', name :'Obezite ve Metabolik Cerrahi'}
,{value:'67', name :'Odyoloji'}
,{value:'68', name :'Omurga Cerrahisi Merkezi'}
,{value:'69', name :'Organ Nakli'}
,{value:'70', name :'Ortopedi ve Travmatoloji'}
,{value:'71', name :'Patoloji'}
,{value:'72', name :'Pet-Ct'}
,{value:'73', name :'Psikiyatri'}
,{value:'74', name :'Psikoloji'}
,{value:'75', name :'Radyasyon Onkolojisi'}
,{value:'76', name :'Radyoloji'}
,{value:'77', name :'Reflü Merkezi'}
,{value:'78', name :'Romatoloji ve Bağ Dokusu'}
,{value:'79', name :'Tıbbi Onkoloji'}
,{value:'80', name :'Tiroid Hastalıkları'}
,{value:'81', name :'Toraks Cerrahisi'}
,{value:'82', name :'TrueBeam STx'}
,{value:'83', name :'Tüp Bebek Merkezi'}
,{value:'84', name :'Üro-Jinekoloji'}
,{value:'85', name :'Üroloji'}
,{value:'86', name :'Uyku Bozuklukları Merkezi'}
,{value:'87', name :'Yenidoğan Yoğun Bakım'}
,{value:'88', name :'Yoğun Bakım'}
];


var DoctorArray = 
[
 {name :'Prof.Dr.Abdullah EREN', value : 'Ortopedi ve Travmatoloji',hospital:'1'}
,{name:'Prof.Dr.Abdullah GÖĞÜŞ', value : 'Ortopedi ve Travmatoloji',hospital:'1'}
,{name:'Prof.Dr.Alin BAŞGÜL YİĞİTER', value : 'Kadın Hastalıkları ve Doğum	Fetal Maternal Tıp  - Perinatoloji',hospital:'1'}
,{name:'Prof.Dr.Alper TOKER', value : 'Göğüs Cerrahisi',hospital:'1'}
,{name:'Prof.Dr.Azmi HAMZAOĞLU', value : 'Ortopedi ve Travmatoloji- Omurga Cerrahisi Merkezi',hospital:'1'}
,{name:'Prof.Dr.Belhhan AKPINAR', value : 'Kalp ve Damar Cerrahisi',hospital:'1'}
,{name:'Prof.Dr.Bülent BAYSAL', value : 'Kadın Hastalıkları ve Doğum - Tüp Bebek Merkezi',hospital:'1'}
,{name:'Prof.Dr.Canan AKMAN', value : 'Radyoloji',hospital:'1'}
,{name:'Prof.Dr.Cemil AKGÜL', value : 'Kadın Hastalıkları ve Doğum - Tüp Bebek',hospital:'1'}
,{name:'Prof.Dr.Füsun UYSAL', value : 'Fizik Tedavi ve Rehabilitasyon',hospital:'1'}
,{name:'Prof.Dr.Gülşen AKMAN DEMİR', value : 'Nöroloji',hospital:'1'}
,{name:'Prof.Dr.Hakkı KAHRAMAN', value : 'Endokrinoloji ve Metabolizma Hastalıkları - İç Hastalıkları',hospital:'1'}
,{name:'Prof.Dr.İbrahim TURAN', value : 'Ortopedi ve Travmatoloji',hospital:'1'}
,{name:'Prof.Dr.İlkkan DÜNDER', value : 'Kadın Hastalıkları ve Doğum',hospital:'1'}
,{name:'Prof.Dr.Levent ERDEM', value : 'Gastroenteroloji - İç Hastalıkları',hospital:'1'}
,{name:'Prof.Dr.Mahmut Refik KİLLİ', value : 'Radyoloji',hospital:'1'}
,{name:'Prof.Dr.M.Çiçek BAYINDIR', value : 'Patoloji',hospital:'1'}
,{name:'Prof.Dr.Mehmet TINAZ', value : 'Kulak Burun Boğaz',hospital:'1'}
,{name:'Prof.Dr.Metin KÜÇÜKKAYA', value : 'Ortopedi ve Travmatoloji',hospital:'1'}
,{name:'Prof.Dr.Murat GÜLBARAN', value : 'Anjiyografi - Kardiyoloji',hospital:'1'}
,{name:'Prof.Dr.Murat KAYABALI', value : 'Kalp ve Damar Cerrahisi',hospital:'1'}
,{name:'Prof.Dr.Mustafa ŞİRVANCI', value : 'Radyoloji',hospital:'1'}
,{name:'Prof.Dr.Nuran YAZICIOĞLU', value : 'Kardiyoloji',hospital:'1'}
,{name:'Prof.Dr.Osman BAYINDIR', value : 'Anesteziyoloji',hospital:'1'}
,{name:'Prof.Dr.Saide AYTEKİN', value : 'Ekokardiyografi - Kardiyoloji',hospital:'1'}
,{name:'Prof.Dr.Serdar ERDİNE', value : 'Algoloji (Ağrı) Merkezi - Anesteziyoloji',hospital:'1'}
,{name:'Prof.Dr.Sibel ALPER', value : 'Dermatoloji',hospital:'1'}
,{name:'Prof.Dr.Süleyman Tevfik ECDER', value : 'Nefroloji',hospital:'1'}
,{name:'Prof.Dr.Şehnaz KARADENİZ', value : 'Göz Hastalıkları',hospital:'1'}
,{name:'Prof.Dr.Şenol AKMAN', value : 'Ortopedi ve Travmatoloji',hospital:'1'}
,{name:'Prof.Dr.Şule YAVUZ ', value : 'İç Hastalıkları- Romatoloji ve Bağ Dokusu',hospital:'1'}
,{name:'Prof.Dr.Talat KİRİŞ', value : 'Beyin ve Sinir Cerrahisi',hospital:'1'}
,{name:'Prof.Dr.Tayfun ÖZDEMİR', value : 'Ağız, Çene ve Diş Sağlığı',hospital:'1'}
,{name:'Prof.Dr.Tülay ERKAN', value : 'Çocuk Gastroenterolojisi',hospital:'1'}
,{name:'Prof.Dr.Vahit ÖZMEN', value : 'Genel Cerrahi',hospital:'1'}
,{name:'Prof.Dr.Vedat AYTEKİN', value : 'Anjiyografi - Kardiyoloji',hospital:'1'}
,{name:'Prof.Dr.Yaman TOKAT', value : 'Genel Cerrahi',hospital:'1'}
,{name:'Prof.Dr.Yalım YALÇIN', value : 'Çocuk Kardiyolojisi',hospital:'1'}
,{name:'Prof.Dr.Yasef ÖZSARFATİ', value : 'Nöroloji',hospital:'1'}
,{name:'Prof.Dr.Yaşar Sümer YAMANER', value : 'Genel Cerrahi',hospital:'1'}
,{name:'Prof.Dr.Yıldıray YÜZER', value : 'Organ Nakli Merkezi - Genel Cerrahi',hospital:'1'}
,{name:'Prof.Dr.Zekeriya Uğur', value : 'IŞIKLARalt	Ortopedi ve Travmatoloji',hospital:'1'}
,{name:'Prof.Dr.Zuhal YAPICI', value : 'Çocuk Nörolojisi',hospital:'1'}
,{name:'Doç.Dr.Faruk ABİKE', value : 'Kadın Hastalıkları ve Doğum',hospital:'1'}
,{name:'Prof.Dr.Fatih ATUĞ', value : 'Endoüroloji ve Robotik Cerrahi',hospital:'1'}
,{name:'Doç.Dr.Haluk KULAKSIZOĞLU', value : 'Üroloji',hospital:'1'}
,{name:'Doç.Dr.İlker YAZICI', value : 'Estetik, Plastik ve Rekonstruktif Cerrahisi',hospital:'1'}
,{name:'Doç.Dr.Kıvanç ŞEREFHANOĞLU', value : 'Enfeksiyon Hastalıkları ve Klinik Mikrobiyoloji',hospital:'1'}
,{name:'Doç.Dr.Levent DALAR', value : 'Göğüs Hastalıkları',hospital:'1'}
,{name:'Doç.Dr.Levent ÖZGÖNENEL', value : 'Fizik Tedavi ve Rehabilitasyon',hospital:'1'}
,{name:'Doç.Dr.Süleyman URAZ', value : 'Gastroenteroloji',hospital:'1'}
,{name:'Op.Dr.Ahmet Serkan İLGÜN', value : 'Genel Cerrahi',hospital:'1'}
,{name:'Op.Dr.Ali ARMAN', value : 'Kadın Hastalıkları ve Doğum',hospital:'1'}
,{name:'Op.Dr.Alper ŞİŞMANOĞLU', value : 'Kadın Hastalıkları ve Doğum',hospital:'1'}
,{name:'Op.Dr.Bülent POLAT', value : 'Kalp ve Damar Cerrahisi',hospital:'1'}
,{name:'Op.Dr.Cengiz DİBEKOĞLU', value : 'Genel Cerrahi',hospital:'1'}
,{name:'Op.Dr.Dauren SARSENOV', value : 'Genel Cerrahi',hospital:'1'}
,{name:'Op.Dr.Erkan AKTAN', value : 'Kulak Burun Boğaz',hospital:'1'}
,{name:'Op.Dr.Evrim AKSOY', value : 'Kadın Hastalıkları ve Doğum',hospital:'1'}
,{name:'Op.Dr.Halil DİLEK', value : 'Ortopedi ve Travmatoloji',hospital:'1'}
,{name:'Op.Dr.Herman İŞÇİ', value : 'Kadın Hastalıkları ve Doğum',hospital:'1'}
,{name:'Op.Dr.Mazhar ÇELİKOYAR', value : 'Kulak Burun Boğaz',hospital:'1'}
,{name:'Op.Dr.Mercan SARIER', value : 'Beyin ve Sinir Cerrahisi',hospital:'1'}
,{name:'Op.Dr.Mehmet Kerem ORAL', value : 'Kalp ve Damar Cerrahisi',hospital:'1'}
,{name:'Op.Dr.Meriç ENERCAN', value : 'Ortopedi ve Travmatoloji',hospital:'1'}
,{name:'Op.Dr.Mürsel DEBRE', value : 'Ortopedi ve Travmatoloji',hospital:'1'}
,{name:'Op.Dr.M.Faik SEÇKİN', value : 'Ortopedi ve Travmatoloji',hospital:'1'}
,{name:'Op.Dr.Nejat DEMİRYONTAR', value : 'Ortopedi ve Travmatoloji',hospital:'1'}
,{name:'Op.Dr.Rıfat RASİER', value : 'Göz Hastalıkları',hospital:'1'}
,{name:'Op.Dr.Ökkeş Kemal AYALP', value : 'Genel Cerrahi',hospital:'1'}
,{name:'Op.Dr.zlem KARABAY AKGÜL', value : 'Kadın Hastalıkları ve Doğum',hospital:'1'}
,{name:'Op.Dr.Selhan KARADERELER', value : 'Beyin ve Sinir Cerrahisi',hospital:'1'}
,{name:'Op.Dr.Sinan KAHRAMAN', value : 'Ortopedi ve Travmatoloji',hospital:'1'}
,{name:'Op.Dr.Süleyman N. KARABEYOĞLU', value : 'Kadın Hastalıkları ve Doğum',hospital:'1'}
,{name:'Op.Dr.Tuğçe TÜRKER BOTANLIOĞLU', value : 'Kulak Burun Boğaz',hospital:'1'}
,{name:'Op.Dr.Ünal SAKALLIOĞLU', value : 'Ortopedi ve Travmatoloji',hospital:'1'}
,{name:'Uzm.Dr.Afife BERKYÜREK', value : 'İç Hastalıkları, Kardiyoloji',hospital:'1'}
,{name:'Uzm.Dr.Ali TIRTIR', value : 'Çocuk Sağlığı ve Hastalıkları',hospital:'1'}
,{name:'Uzm.Dr.Ayhan MUTLU', value : 'Radyoloji',hospital:'1'}
,{name:'Uzm.Dr.Aynur SAATÇİOĞLU', value : 'Anesteziyoloji',hospital:'1'}
,{name:'Uzm.Dr.Bekir AYBEY', value : 'Dermatoloji',hospital:'1'}
,{name:'Uzm.Dr.Bülent YARDIMCI', value : 'İç Hastalıkları',hospital:'1'}
,{name:'Uzm.Dr.Bilgiser ESER', value : 'Anesteziyoloji',hospital:'1'}
,{name:'Uzm.Dr.Coşkun GÜVEN', value : 'Anesteziyoloji',hospital:'1'}
,{name:'Uzm.Dr.Cumhur LEBLEBİCİ', value : 'Kardiyoloji - İç Hastalıkları',hospital:'1'}
,{name:'Uzm.Dr.Demet ERCİYES ', value : 'Kardiyoloji - Check-Up',hospital:'1'}
,{name:'Uzm.Dr.Demet GÜNAY', value : 'Biyokimya',hospital:'1'}
,{name:'Uzm.Dr.Deniz Tuna ERŞAYLI', value : 'Anesteziyoloji',hospital:'1'}
,{name:'Uzm.Dr.Eda ÇINGI', value : 'Çocuk Cerrahisi',hospital:'1'}
,{name:'Uzm.Dr.Emel PEKEL', value : 'Anesteziyoloji',hospital:'1'}
,{name:'Uzm.Dr.Emine KARAHAN OKLU', value : 'Anesteziyoloji',hospital:'1'}
,{name:'Uzm.Dr.Esin EĞİLMEZ MORKOÇ', value : 'Anesteziyoloji',hospital:'1'}
,{name:'Uzm.Dr.Ferda DORA', value : 'Çocuk Sağlığı ve Hastalıkları',hospital:'1'}
,{name:'Uzm.Dr.F. Başak NAMDAR ÇELİKHAN', value : 'Çocuk Sağlığı ve Hastalıkları',hospital:'1'}
,{name:'Uzm.Dr.Filiz ÖNAL', value : 'Radyoloji',hospital:'1'}
,{name:'Uzm.Dr.Günay CANTÜRK', value : 'Çocuk Sağlığı ve Hastalıkları',hospital:'1'}
,{name:'Uzm.Dr.Hayri PARLAR', value : 'Kardiyoloji - İç Hastalıkları',hospital:'1'}
,{name:'Uzm.Dr.Hülya AZİZAĞAOĞLU', value : 'İç Hastalıkları',hospital:'1'}
,{name:'Uzm.Dr.Hasan Hüseyin TAVUKÇU', value : 'Nöroloji',hospital:'1'}
,{name:'Uzm.Dr.Hülya Gamze ÇELİK', value : 'Kardiyoloji',hospital:'1'}
,{name:'Uzm.Dr.İbrahim ÖRNEK ', value : 'Nöroloji',hospital:'1'}
,{name:'Uzm.Dr.Levent ONAT ', value : 'Radyoloji',hospital:'1'}
,{name:'Uzm.Dr.Levent ÖKLÜ', value : 'Anesteziyoloji',hospital:'1'}
,{name:'Uzm.Dr.Mari BENLİ', value : 'Nükleer Tıp - Tiroid Hastalıkları Merkezi',hospital:'1'}
,{name:'Uzm.Dr.Mefkure PLATİN', value : 'İç Hastalıkları - Kardiyoloji',hospital:'1'}
,{name:'Uzm.Dr.Melahat DEĞİRMENCİ ESER', value : 'Nöroloji',hospital:'1'}
,{name:'Uzm.Dr.Neriman Zeynep EKİCİ', value : 'Anesteziyoloji',hospital:'1'}
,{name:'Uzm.Dr.Nevzat YILDIRIM', value : 'Kardiyoloji - İç Hastalıkları',hospital:'1'}
,{name:'Uzm.Dr.Orhan GEREN', value : 'İç Hastalıkları, Kardiyoloji',hospital:'1'}
,{name:'Uzm.Dr.Onur Levent ULUSOY', value : 'Radyoloji',hospital:'1'}
,{name:'Uzm.Dr.Özgür ŞAMİLGİL', value : 'İç Hastalıkları',hospital:'1'}
,{name:'Uzm.Dr.Seher AKGÜL', value : 'Anesteziyoloji',hospital:'1'}
,{name:'Uzm.Dr.Roza Elif BALAN', value : 'Anesteziyoloji',hospital:'1'}
,{name:'Uzm.Dr.Sema ÖZTÜRK', value : 'Nöroloji',hospital:'1'}
,{name:'Uzm.Dr.Serkan TATLIAĞAÇ', value : 'Endokrinoloji ve Metabolizma Hastalıkları - İç Hastalıkları',hospital:'1'}
,{name:'Uzm.Dr.Tuba COŞKUN FALAY', value : 'Göğüs Hastalıkları',hospital:'1'}
,{name:'Uzm.Dr.Uğur ÖZBEK', value : 'Anesteziyoloji',hospital:'1'}
,{name:'Uzm.Dr.Ülkü PEKCAN', value : 'Anesteziyoloji',hospital:'1'}
,{name:'Uzm.Dr.Yonca ÇAĞATAY', value : 'Romatoloji ve Bağ Dokusu',hospital:'1'}
,{name:'Dt.Benal ÖZDEMİR', value : 'Ağız, Çene ve Diş Sağlığı Merkezi',hospital:'1'}
,{name:'Dr.Abdulaziz BALWİ', value : 'Acil Servis',hospital:'1'}
,{name:'Dr.Alhammam BANİODEH', value : 'Acil Servis',hospital:'1'}
,{name:'Dr.Alper GENCER', value : 'Acil Servis',hospital:'1'}
,{name:'Dr.Cenk ÖZCAN', value : 'Tüp Bebek Merkezi',hospital:'1'}
,{name:'Dr.Çağlar ÖZKAYA', value : 'Acil Servis',hospital:'1'}
,{name:'Dr.Elif İNAÇ', value : 'Anesteziyoloji',hospital:'1'}
,{name:'Dr.Farid KISMAT', value : 'Acil Servis',hospital:'1'}
,{name:'Dr.Mohammed DOKHAN', value : 'Acil Servis',hospital:'1'}
,{name:'Dr.Myat Su WIN', value : 'Acil Servis',hospital:'1'}
,{name:'Dr.Nurgul NAURZVAI', value : 'Acil Servis',hospital:'1'}
,{name:'Dr.Thiha Min NAIGH', value : 'Acil Servis',hospital:'1'}
,{name:'Dr.Orli BEHAR', value : 'Acil Servis',hospital:'1'}
,{name:'Dyt.Ece GÜNAY AKKUŞ', value : 'Beslenme ve Diyet',hospital:'1'}
,{name:'Dyt.Gül TATAR', value : 'Beslenme ve Diyet',hospital:'1'}
];

var SaatlerArray = 
[
{name:'09:00', value:'09:00'}
,{name:'09:15', value:'09:15'}
,{name:'09:30', value:'09:30'}
,{name:'09:45', value:'09:45'}

,{name:'10:00', value:'10:00'}
,{name:'10:15', value:'10:15'}
,{name:'10:30', value:'10:30'}
,{name:'10:45', value:'10:45'}

,{name:'11:00', value:'11:00'}
,{name:'11:15', value:'11:15'}
,{name:'11:30', value:'11:30'}
,{name:'11:45', value:'11:45'}

,{name:'13:00', value:'13:00'}
,{name:'13:15', value:'13:15'}
,{name:'13:30', value:'13:30'}
,{name:'13:45', value:'13:45'}

,{name:'14:00', value:'14:00'}
,{name:'14:15', value:'14:15'}
,{name:'14:30', value:'14:30'}
,{name:'14:45', value:'14:45'}

,{name:'15:00', value:'15:00'}
,{name:'15:15', value:'15:15'}
,{name:'15:30', value:'15:30'}
,{name:'15:45', value:'15:45'}

,{name:'16:00', value:'16:00'}
,{name:'16:15', value:'16:15'}
,{name:'16:30', value:'16:30'}
,{name:'16:45', value:'16:45'}
];

var posArray = 
[
    // Aeropostale
     {latitude : '41.044000', longitude : '29.002000', img_url:'img/aeropostale.png', title : 'Aeropostale Zorlu Center', address : '<div>Zorlu Center</div> <div>Ortaköy Mahallesi Koru Sokak No: 2 Zorlu Alışveriş Merkezi Bağımsız Bölüm No: 52 P.K. 34340 Zincirlikuyu Beşiktaş / İSTANBUL TEL: 0212 353 62 44</div>'}
    ,{latitude : '41.077798', longitude : '29.013208', img_url:'img/aeropostale.png', title : 'Aeropostale Zorlu Center Kanyon', address : '<div>Kanyon</div> <div>Kanyon Alışveriş Merkezi Esentepe Mahallesi Büyükdere Caddesi No: 185 Kat: B2 No: 44 34394 Levent / İSTANBUL TEL: 0212 353 07 90</div>'}
    ,{latitude : '41.016667', longitude : '29.033333', img_url:'img/aeropostale.png', title : 'Aeropostale Akasya', address : '<div>Akasya</div> <div>Ankara Devlet Yolu Haydarpaşa Yönü 4.Km Çeçen Sokak Akasya Alışveriş Merkezi 2.Kat No: 515-516 P.K. 34660 Acıbadem Üsküdar/İSTANBUL TEL: 216 999 56 94</div>'}
    ,{latitude : '41.021092', longitude : '29.128453', img_url:'img/aeropostale.png', title : 'Aeropostale Buyaka', address : '<div>Buyaka</div> <div>Buyaka Alışveriş Merkezi Fatih Sultan Mehmet Mahallesi Balkan Caddesi No: 56 /A Buyaka AVM Zemin Kat Mağaza No: 63 Tepeüstü, Ümraniye / İSTANBUL TEL: 0216 290 77 27</div>'}
    ,{latitude : '40.973021', longitude : '28.787398', img_url:'img/aeropostale.png', title : 'Aeropostale Aqua Florya', address : '<div>Aqua Florya</div> <div>Şenlikköy Mahallesi Halkalı Caddesi Aqua AVM No: 93 Alt Zemin kat No: 10 Florya/Bakırköy / İSTANBUL TEL: 0212 574 54 20</div>'}
    ,{latitude : '40.974640', longitude : '29.111513', img_url:'img/aeropostale.png', title : 'Aeropostale Brandium', address : '<div>Brandium</div> <div> Küçükbakkalköy Mahallesi Dudullu Yolu Cad. Erenköy Gümrük Karşısı Brandium AVM Zemin Kat No: Z. 13-14-15 Küçükbakkalköy Ataşehir / İSTANBUL TEL: 0216 572 30 45</div>'}
    ,{latitude : '41.075649', longitude : '28.935397', img_url:'img/aeropostale.png', title : 'Aeropostale Vialand', address : '<div>Vialand</div> <div> Yeşilpınar Mahallesi Şehit Metin Kaya Sokak No: 11 Vialand AVM 2 Zk No: 19 Bağımsız Bölüm P.K. 34065 Eyüp / İSTANBUL TEL: 0212 777 29 71</div>'}
     // Banana Republic
    ,{latitude : '40.977979', longitude : '28.869597', img_url:'img/banana_republic.png', title : 'Banana Republic Capacity Alışveriş Merkezi', address : '<div>CAPACITY ALIŞVERIŞ MERKEZI</div> <div>Fişekhane Caddesi Z 21-21/A 34158 Bakırköy İstanbul , Türkiye  Telefon Numarası: 0212 560 2002</div>'}
    ,{latitude : '41.052904', longitude : '29.000478', img_url:'img/banana_republic.png', title : 'Banana Republic City\'s Nişantaşi Alışveriş Merkezi', address : '<div>CITY\'S NİŞANTAŞI ALIŞVERİŞ MERKEZİ</div> <div>City\'s Alışveriş Merkezi, Teşvikiye Caddesi, No:162 Z 34365 Nişantaşı İstanbul, Türkiye  Telefon Numarası: 0212 373 18 40</div>'}
    ,{latitude : '41.077798', longitude : '29.013208', img_url:'img/banana_republic.png', title : 'Banana Republic Kanyon Alışveriş Merkezi', address : '<div>KANYON ALIŞVERIŞ MERKEZI</div> <div> Büyükdere Caddesi, Kanyon Alışveriş Merkezi Kat 1B No:106-107-108 34394 Levent İstanbul, Türkiye Telefon Numarası: 0212 353 51 65</div>'}
    ,{latitude : '40.980141', longitude : '29.082270', img_url:'img/banana_republic.png', title : 'Banana Republic Palladium Alışveriş Merkezi', address : '<div>PALLADIUM ALIŞVERIŞ MERKEZI</div> <div>BB-204, Barbaros Mahallesi Halk Cad. 1. Kat BB 204 34746 Kozyatağı / Kadıköy İstanbul, Türkiye  Telefon Numarası: 0216 663 10 74</div>'}
    ,{latitude : '41.167773', longitude : '29.056888', img_url:'img/banana_republic.png', title : 'Banana Republic İstinyepark Alışveriş Merkezi', address : '<div>İSTİNYEPARK ALIŞVERİŞ MERKEZİ</div> <div>İstinyepark Alışveriş Merkezi. Pınar Mah.İstinye Bayırı Cad. No: 495 İstinye / Sarıyer-İstanbul Türkiye  Telefon Numarası: 0212 345 63 50-51</div>'}
    // GAP
    ,{latitude : '41.005270', longitude : '28.976960', img_url:'img/gap.png', title : 'GAP Akasya', address : '<div>İstanbul Akasya</div> <div>Ankara Devlet Yolu Haydarpaşa Yönü 4.Km Çeçen Sokak Akasya Alışveriş Merkezi Zemin Kat No:348 P.K.34660 Acıbadem Üsküdar İstanbul 0216 999 56 92</div>'}
    ,{latitude : '41.020000', longitude : '28.577500', img_url:'img/gap.png', title : 'GAP Akbatı', address : '<div>İstanbul Akbatı</div> <div>Akbatı Alışveriş Merkezi Esenyurt Mah. Kapadık köyü Akbatı Alışveriş Merkezi No. 97-98-99  Büyükçekmece / İSTANBUL Tel. 0 212 397 73 71- 72</div>'}
    ,{latitude : '41.082430', longitude : '29.034522', img_url:'img/gap.png', title : 'GAP Akmerkez', address : '<div>İstanbul Akmerkez</div> <div>Akmerkez Ticaret Merkezi Nispetiye Caddesi No. 332-333-334-335 Etiler / Beşiktaş / İSTANBUL Tel. 0212 2820725</div>'}
    ,{latitude : '41.082430', longitude : '29.034522', img_url:'img/gap.png', title : 'GAP Akmerkez Kids&Baby', address : '<div>İstanbul Akmerkez Kids&Baby</div> <div>Akmerkez Ticaret Merkezi Nispetiye Caddesi No.108-109 34337 Etiler / Beşiktaş / İSTANBUL Tel. 0212 282 17 17</div>'}
    ,{latitude : '40.977979', longitude : '28.869597', img_url:'img/gap.png', title : 'GAP Capacity', address : '<div>İstanbul Capacity</div> <div>Capacity Alışveriş Merkezi Zeytinlik Mah.Fişekhane Cad. No. 34 Zemin Kat Bakırköy / İSTANBUL Tel. 0 212 663 30 36/ 661 71 47-49</div>'}
    ,{latitude : '41.060278', longitude : '28.987778', img_url:'img/gap.png', title : 'GAP Cevahir', address : '<div>İstanbul Cevahir</div> <div>Cevahir Alışveriş Merkezi Meşrutiyet mah. Büyükdere cad. No. 22/A/316  Şişli / İSTANBUL Tel. 0 212 380 10 95 - 96</div>'}
    ,{latitude : '41.005270', longitude : '28.976960', img_url:'img/gap.png', title : 'GAP City\'s Nişantaşı', address : '<div>İstanbul City\'s Nişantaşı</div> <div>City\'s Nişantaşı Alışveriş Merkezi Teşvikiye Mah. No. 162 1.Kat 103-104 Nişantaşı / İSTANBUL Tel. 0212 373 20 80 / 81</div>'}
    ,{latitude : '41.036944', longitude : '28.977500', img_url:'img/gap.png', title : 'GAP Demirören İstiklal', address : '<div>İstanbul Demirören İstiklal</div> <div>Demirören Alışveriş Merkezi Hüseyin Ağa Mah. İstiklal Cad. 1.Kat No. 106-107  Beyoğlu / İSTANBUL Tel. 0 212 292 10 88 - 0 212 292 10 48</div>'}
    ,{latitude : '41.048056', longitude : '28.900278', img_url:'img/gap.png', title : 'GAP Forum Kids&Baby', address : '<div>İstanbul Forum Kids&Baby</div> <div>Forum İSTANBUL Alışveriş Merkezi Kocatepe Mah. Paşa Cad. 34045 B1 Blok No. 048 Bayrampaşa / İSTANBUL Tel. 0 212 640 62 19 - 0 212 640 62 38</div>'}
    ,{latitude : '41.167773', longitude : '29.056888', img_url:'img/gap.png', title : 'GAP İstinyePark', address : '<div>İstanbul İstinyePark</div> <div>İstinye Park Alışveriş Merkezi, Pınar Mah. İstinye Bayırı cad. Enka Okulları Karşısı ABC Yolu No. 215-216 İstinye / Sarıyer / İSTANBUL Tel. 0 212 345 62 22/4 Hat</div>'}
    ,{latitude : '41.005270', longitude : '28.976960', img_url:'img/gap.png', title : 'GAP İstinyePark Kids&Baby', address : '<div>İstanbul İstinyePark Kids&Baby</div> <div>İstinye Park Alışveriş Merk.Pınar Mah. İstinye Bayırı cad. Enka Okulları Karşısı ABC Yolu No. 220-221 İstinye / Sarıyer / İSTANBUL Tel. 0 212 345 62 27/4 Hat</div>'}
    ,{latitude : '41.005270', longitude : '28.976960', img_url:'img/gap.png', title : 'GAP Kanyon', address : '<div>İstanbul Kanyon</div> <div>Kanyon Alışveriş Merkezi, Mecidiyeköy Mah.Büyükdere Cad. No. 103-104 Levent / İSTANBUL Tel. 0 212 353 52 05</div>'}
    ,{latitude : '40.977979', longitude : '28.869597', img_url:'img/gap.png', title : 'GAP Marmara Forum', address : '<div>İstanbul Marmara Forum</div> <div>Marmara Forum Alışveriş Merkezi M.S Blok No. 010 Osmaniye Mah. Ekrem Kurt Bulvarı E-5 Sahilyolu Bakırköy / İSTANBUL Tel. 0 212 466 69 10-11</div>'}
    ,{latitude : '41.011998', longitude : '29.133249', img_url:'img/gap.png', title : 'GAP Meydan', address : '<div>İstanbul Meydan</div> <div>Meydan Alışveriş Merkezi Çakmak Mah. Metro Group Sk. No. 12 34770 Ümraniye / İSTANBUL Tel. 0 216 466 21 53-12-87-54</div>'}
    ,{latitude : '40.983333', longitude : '29.127778', img_url:'img/gap.png', title : 'GAP Palladium', address : '<div>İstanbul Palladium</div> <div>Palladium Alışveriş Merkezi Barbaros Mah. Halk Cad.  BB 259- 260 2.Kat 34746 Ataşehir / İSTANBUL Tel. 0 216 663 10 90-91-94</div>'}
    ,{latitude : '41.005270', longitude : '28.976960', img_url:'img/gap.png', title : 'GAP Trump Towers Kids&Baby', address : '<div>İstanbul Trump Towers Kids&Baby</div> <div>Trump Alışveriş Merkezi Kuştepe Mah. Mecidiyeköy Yolu Cad. No.12 Mecidiyeköy / İSTANBUL Tel. 0212 275 12 77</div>'}
    ,{latitude : '41.075649', longitude : '28.935397', img_url:'img/gap.png', title : 'GAP Vialand', address : '<div>İstanbul Vialand</div> <div>Vialand Alışveriş Merkezi Yeşilpınar Mahallesi Şehit Metin Kaya Sokak Zemin Kat No. 11/79 34065 Eyüp / İSTANBUL Tel. 0212 777 68 72</div>'}
    ,{latitude : '41.044000', longitude : '29.002000', img_url:'img/gap.png', title : 'GAP Zorlu Center', address : '<div>İstanbul Zorlu Center</div> <div>Ortaköy Mahallesi Koru sokak No: 2 Zorlu Alışveriş Merkezi Bağımsız Bölüm No: 48 P.K. 34340 Zincirlikuyu Beşiktaş İstanbul Tel: 0212 3536139</div>'}
  
                    
];

$('#div_loc_list li').live('click', function() {
    clicked_val = $(this).text().trim();
    for (var i=0; i < posArray.length; i++) {
        if (posArray[i].title.trim() == clicked_val) {
            lat_end = posArray[i].latitude;
            lng_end = posArray[i].longitude;
            app.fnc_direction_map();
            break;
        };
    };
});
function initPushwoosh() {
    var pushNotification = window.plugins.pushNotification;
    if(device.platform == "Android")
    {
        registerPushwooshAndroid();
    }

    if(device.platform == "iPhone" || device.platform == "iOS")
    {
        registerPushwooshIOS();
    }
};

var app = {

	// Application Constructor
	initialize : function() {
		console.log("init");
		this.bindEvents();
		app.url="http://10.0.0.31:8181/fiba_group_webservices/";
		app.total_points=0;
		app.url="http://213.74.186.114:8181/fiba_group_webservices/";
	},
	// Bind Event Listeners
	//
	// Bind any events that are required on startup. Common events are:
	// 'load', 'deviceready', 'offline', and 'online'.
	bindEvents : function() {
		console.log("bindevent");
		document.addEventListener('deviceready', this.onDeviceReady, false);
		app.fnc_lookbook_init();                            
	},
	onDeviceReady : function() {
		console.log("ondevice ready");
		app.receivedEvent('deviceready');

		app.first_init();						
        try{
            initPushwoosh();
        }catch(err) 
        {
         	console.log(err.message);
        }		


	},
	
	 
	fnc_lookbook_init:function(){
				
		console.log("init sexArray size:" + sexArray.length);
		for (var i = 0; i < sexArray.length; i++) {
			var o = new Option(sexArray[i].name, sexArray[i].name);
			$('#lookbook_sex').append(o);
		}

		console.log("init ProductTypeArray array size :" + ProductTypeArray.length);
		for (var i = 0; i < ProductTypeArray.length; i++) {
			var o = new Option(ProductTypeArray[i].name, ProductTypeArray[i].value);
			$('#ProductType_List').append(o);
		}


	$('#lookbook_sex').change(function(){
				$('#ProductSubType_List').empty();
				var o = new Option("Alt Ürün Tipi Seçiniz", -1);
				$('#ProductSubType_List').append(o);
				for (var i = 0; i < ProductSubTypeArray.length; i++) 
				{
					if( (ProductSubTypeArray [i].sex.indexOf( $('#lookbook_sex').val() ) >-1 ) &
					  (ProductSubTypeArray [i].uppermenu.indexOf( $('#ProductType_List').val() ) >-1 )
					  )
					{
						var o = new Option(ProductSubTypeArray[i].name, ProductSubTypeArray[i].value);
						$('#ProductSubType_List').append(o);						
					}
				};				
				}); 	
				

	$('#ProductType_List').change(function(){
				$('#ProductSubType_List').empty();
				var o = new Option("Alt Ürün Tipi Seçiniz", -1);
				$('#ProductSubType_List').append(o);
				for (var i = 0; i < ProductSubTypeArray.length; i++) 
				{
					if( (ProductSubTypeArray [i].sex.indexOf( $('#lookbook_sex').val() ) >-1 ) &
					  (ProductSubTypeArray [i].uppermenu.indexOf( $('#ProductType_List').val() ) >-1 )
					  )
					{
						var o = new Option(ProductSubTypeArray[i].name, ProductSubTypeArray[i].value);
						$('#ProductSubType_List').append(o);						
					}
				};				
				}); 	
				
				
			$('#ProductSubType_List').change(function(){
				$('#div_ms_katalog').empty();
				console.log("ProductSubType_List");
				for (var i = 0; i < ProductArray.length; i++) 
				{
					console.log("ProductArray[i].brand : " + ProductArray[i].brand );
					console.log("$('#ProductSubType_List').val() : " + $('#ProductSubType_List').val() );
					if (ProductArray[i].brand.indexOf( $('#ProductSubType_List').val() ) >-1 )
					{
						html ="<table style='width:100%'>";
						html += '<td style="width:100%"><a href="#katalog_detay_ms" onclick="return app.fnc_gotoProductDetail('+ '\'' + ProductArray[i].name+ '\''+ ');"> <img style="width:100%" src="img/' + ProductArray[i].value + '"></img> </a>'+
						'</br>'
						+'  detaylı bilgi için resmi tıklayınız'
						+'</td>';
						html+="</table>";
						$('#div_ms_katalog').append(html);						
					}
				};
				});
	},
	fnc_gotoProductDetail:function(p1){
		console.log('prodcut detail parameter:' + p1 );
				$('#div_ms_katalog_detay').empty();
				
				for (var i = 0; i < ProductArray.length; i++) 
				{
					if (ProductArray[i].name==p1 )
					{
						html ="<table style='width:100%'>";
						html += '<tr><td style="width:100%"><img style="width:100%" src="img/' + ProductArray[i].value.replace('_.jpg','.jpg') + '"></img>'+'</td></tr>';
						html += '<tr><td style="width:100%">' +'</br>Birim Fiyat : '+ ProductArray[i].price + '</td></tr>';
						html += '<tr><td style="width:100%">' +'</br>Stok adedi: '+ ProductArray[i].stock + '</td></tr>';
						html += '<tr><td style="width:100%">' +'</br>Bulunduğu Mağazalar : '+ ProductArray[i].stock_branches + '</td></tr>';						
						html += '<tr><td style="width:100%">' +'</br>Ürün Açıklaması</td></tr>';
						html += '<tr><td style="width:100%">' +ProductArray[i].desc +'</td> </tr>';
						html += '<tr><td style="width:100%">' +'</br> <a onclick="return app.fnc_InsertOrder('+'\'' + ProductArray[i].name+'\''+');"> Sepete Ekle'+'<img src="img/menu_icons/9_shop_.png"></img>'+'</td> </a> </tr>';
						html += '<tr><td style="width:100%">' +'</br><a href="#product_basket_approval"> Ödeme Yap '+'<img  src="img/credit_card_logos_14.gif"></img> </a>'+'</td></tr>';
						
						html+="</table>";
						$('#div_ms_katalog_detay').append(html);						
					}
				};
		return true;
	},
	fnc_InsertOrder : function(p1) {
			for (var i = 0; i < ProductArray.length; i++) 
			{
				if (ProductArray[i].name==p1 )
				{		
			    $.ajax({
                        url : app.url+"GetOrders?conn_type=setOrder&memberid="+app.id+                        
    					"&company_name="+ ProductArray[i].brand.replace('&','_') +"&productid="+ ProductArray[i].name +"&product_name="+ ProductArray[i].name_.replace('&','_') + "&product_amount="+ ProductArray[i].price +"&product_count=1&status=0"                    
                        ,
                        dataType : "json",
                        success : function(a, b, c) {
                            console.log("order insert ediliyor");
                            app.fnc_OrderList();
                            $.mobile.changePage($('#product_basket'));
                        },
                        error : function(a, b, c) {
                            console.log("err a ", a);
                            console.log("err b ", b);
                            console.log("err c ", c);
                            console.log("err c ", c);
                        }
                    }); 
              }
          }
	return true;
	},
    fnc_OrderList : function() {
    	app.totalPrice=0;
		    $.ajax({
                        url : app.url+"GetOrders?conn_type=getWaitingOrders&memberid="+app.id,
                        dataType : "json",
                        success : function(a, b, c) {

						console.log("siparişler 2");
						$('#div_ms_product_basket ul').remove();
						$('#div_ms_product_basket').append('<ul data-role="listview"></ul>');
						listItems = $('#div_ms_product_basket').find('ul');
						console.log("div_ms_product_basket 3 app.id :" + app.id + "  a length : " + a.length);
						
						html ="<center>Sepetiniz </center></br> <table style='width:100%'>";
							console.log("div_ms_product_basket 4");
							html += '<tr style="width:100%">'+
							'<td width="40%">'+ 'Şirket' + '</td>';
							html += '<td width="35%">' + 'Ürün' + '</td>';
							html += '<td width="15%">' + 'Fiyat' + '</td>';
							html += '<td width="10%">' + 'Adet' +'</td></tr>';							
						    html+="</table>";
							listItems.append('<li id="orderr_c' + '">' + html + '</li>');

						for (var i = 0; i < a.length; i++) {
						html ="<table style='width:100%'>";
							console.log("div_ms_product_basket 4");
							html += '<tr style="width:100%"><td width="40%">M&S'; + /*a[i].company_name.replace('_','&') + */ '</td>';
							html += '<td width="35%">' + a[i].product_name + '</td>';
							html += '<td width="15%">' + a[i].product_amount + '</td>';
							html += '<td width="10%">' + a[i].product_count +'</td></tr>';							
						    html+="</table>";
							listItems.append('<li id="orderr_' + a[i].seq + '">' + html + '</li>');
							app.totalPrice = app.totalPrice + ( a[i].product_amount * a[i].product_count ); 
						};
						html ="<table style='width:100%'>";
							console.log("div_ms_product_basket 4");
							html += '<tr style="width:100%"><td width="75%">Toplam</td>';
							html += '<td width="25%">' + app.totalPrice +'</td></tr>';							
						    html+="</table>";
							listItems.append('<li id="orderrt_' + '">' + html + '</li>');
						/*
						html = '</br><table style="width:100%"><tr><td align="right">'
						+'<a href="#product_basket_approval">' 
						+'</br> Ödeme Yap '+'<img  src="img/credit_card_logos_14.gif"></img>'
						+'<a>'
						+'</td></tr> </table>';
						
						$('#div_ms_product_basket').append(html);
						*/	
						$('#div_ms_product_basket ul').listview();
					


                        },
                        error : function(a, b, c) {
                            console.log("err a ", a);
                            console.log("err b ", b);
                            console.log("err c ", c);
                            console.log("err c ", c);
                        }
                    }); 
	},	
	    fnc_OldOrderList : function() {
    	app.totalPrice=0;
		    $.ajax({
                        url : app.url+"GetOrders?conn_type=getOrders&memberid="+app.id,
                        dataType : "json",
                        success : function(a, b, c) {

						console.log("siparişler 2");
						$('#div_ms_product_basket_detail ul').remove();
						$('#div_ms_product_basket_detail').append('<ul data-role="listview"></ul>');
						listItems = $('#div_ms_product_basket_detail').find('ul');
						console.log("div_ms_product_basket_detail 3 app.id :" + app.id + "  a length : " + a.length);

						html ="<center>Önceki Siparişleriniz </center></br> <table style='width:100%'>";
							console.log("div_ms_product_basket_detail 4");
							html += '<tr style="width:100%">'+ '<td width="35%">' + 'TakipNo' + '</td>';
							html += '<td width="20%">'+ 'Mağaza' + '</td>';
							html += '<td width="25%">' + 'Tarih' + '</td>';
							html += '<td width="10%" align="left">' + ' Fiyat&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +'</td>';							
							html += '<td width="10%">' + ' Durumu' +'</td></tr>';
						    html+="</table>";
							listItems.append('<li id="orderr_c' + '">' + html + '</li>');

						for (var i = 0; i < a.length; i++) {
						html ="<table style='width:100%'>";
							console.log("div_ms_product_basket 4");
							html += '<tr style="width:100%"> <td width="35%">' + a[i].order_id + '</td>';
							html += '<td width="20%">'+ a[i].company_name.replace('_','&') + '</td>';
							html += '<td width="25%" align="left">' + a[i].insert_date + '</td>';
							html += '<td width="10%" align="left">' + a[i].order_total+'</td>';							
							html += '<td width="10%">' + a[i].status.replace('1','&nbsp;Hazırlanıyor').replace('2','&nbsp;Kargoda&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;').replace('3','&nbsp;Teslim&nbsp;Edildi').replace('4','&nbsp;İptal&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;')+'</td></tr>';
						    html+="</table>";
							listItems.append('<li id="orderr_345345">' + html + '</li>');	 
						};
						
						
						/*
						html = '</br><table style="width:100%"><tr><td align="right">'
						+'<a href="#product_basket_approval">' 
						+'</br> Ödeme Yap '+'<img  src="img/credit_card_logos_14.gif"></img>'
						+'<a>'
						+'</td></tr> </table>';
						
						$('#div_ms_product_basket').append(html);
						*/	
						$('#div_ms_product_basket_detail ul').listview();
					


                        },
                        error : function(a, b, c) {
                            console.log("err a ", a);
                            console.log("err b ", b);
                            console.log("err c ", c);
                            console.log("err c ", c);
                        }
                    }); 
	},
	fnc_Buy:function(){
		
					    $.ajax({
                        url : app.url+"GetOrders?conn_type=updateAllOrderAsPaid&memberid="+app.id,
                        dataType : "json",
                        success : function(a, b, c) {
                            console.log("order status as paid olarak update ediliyor");
                        },
                        error : function(a, b, c) {
                            console.log("err a ", a);
                            console.log("err b ", b);
                            console.log("err c ", c);
                            console.log("err c ", c);
                        }
                    }); 
		
		$.mobile.changePage($('#product_basket_approval_finish'));
	},
	fnc_randevu_init:function(){
				
		console.log("init hospital array size:" + HospitalArray.length);
		for (var i = 0; i < HospitalArray.length; i++) {
			var o = new Option(HospitalArray[i].name, HospitalArray[i].name);
			$('#hospital_list').append(o);
		}

		console.log("init Departman array size :" + DepartmanArray.length);
		for (var i = 0; i < DepartmanArray.length; i++) {
			var o = new Option(DepartmanArray[i].name, DepartmanArray[i].name);
			$('#departman_list').append(o);
		}			


	$('#departman_list').change(function(){
				$('#doktor_list').empty();
				var o = new Option("Doktor Seçiniz", -1);
				$('#doktor_list').append(o);
				for (var i = 0; i < DoctorArray.length; i++) 
				{
					if (DoctorArray[i].value.indexOf( $('#departman_list').val() ) >-1 )
					{
						var o = new Option(DoctorArray[i].name, DoctorArray[i].name);
						$('#doktor_list').append(o);						
					}
				};				
				}); 				
 
				for (var i = 0; i < SaatlerArray.length; i++) 
				{
					var o = new Option(SaatlerArray[i].name, SaatlerArray[i].value);
					$('#saatler_list').append(o);
				}
				var today = new Date();
				var dd = today.getDate();
				var mm = today.getMonth()+1; //January is 0!
				var yyyy = today.getFullYear();
				
				if(dd<10) {
				    dd='0'+dd;
				} 
				
				if(mm<10) {
				    mm='0'+mm;
				} 
				
				today = mm+'/'+dd+'/'+yyyy;
				console.log("Date() : " +today);
				//$('#tarih').attr("value",today);
				console.log("$('#tarih').val() : " +$('#tarih').val());
				
	},	
    fnc_randevuAl : function() {
		    $.ajax({
                        url : app.url+"GetAppointment?conn_type=setAppointment&departman="+$('#departman_list').val()+"&memberid="+app.id+
                        "&hospital="+$('#hospital_list').val()+ "&tarih="+$('#tarih').val()+
                        "&doctor="+$('#doktor_list').val() + "&saatler="+$('#saatler_list').val() +"&deviceid="+gtech_token,
                        dataType : "json",
                        success : function(a, b, c) {
                            console.log("randevü kaydediliyor");
                            app.fnc_randevuList();
                            $.mobile.changePage($('#hospital_randevular'));
                        },
                        error : function(a, b, c) {
                            console.log("err a ", a);
                            console.log("err b ", b);
                            console.log("err c ", c);
                            console.log("err c ", c);
                        }
                    }); 
	},
    fnc_randevuList : function() {
		    $.ajax({
                        url : app.url+"GetAppointment?conn_type=getAppointments&memberid="+app.id,
                        dataType : "json",
                        success : function(a, b, c) {

						console.log("div_randevular 2");
						$('#div_randevular ul').remove();
						$('#div_randevular').append('<ul data-role="listview"></ul>');
						listItems = $('#div_randevular').find('ul');
						console.log("div_randevular 3");
						 
						
						for (var i = 0; i < a.length; i++) {
						html ="<table style='width:100%'>";
							console.log("div_randevular 4");
							html += '<tr style="width:100%"><td width="25%">'+ a[i].Hospital + '</td>';
							html += '<td width="25%">' + a[i].Departman + '</td>';
							html += '<td width="25%">' + a[i].Doctor_name + '</td></tr>';
							html += '<td width="25%">' + a[i].Appointment_date + " " + a[i].Appointment_hours +'</td></tr>';							
						    html+="</table>";
							listItems.append('<li id="prj_' + a[i].seq + '">' + html + '</li>');
						};
						
						$('#div_randevular ul').listview();
						console.log("div_randevular 5");


                        },
                        error : function(a, b, c) {
                            console.log("err a ", a);
                            console.log("err b ", b);
                            console.log("err c ", c);
                            console.log("err c ", c);
                        }
                    }); 
	},

    fnc_location_list : function() {

         $("#div_loc_list ul").page('destroy').page();
        var list_content ='';
        for (var i=0; i < posArray.length; i++) {
                var ltitle = posArray[i].title;
                list_content += '<li><a href="#direction_page">'+ltitle+'</a></li>';
         }
        $('#div_loc_list').append('<ul data-role="listview">'+list_content+'</ul>');
         
        app.check_campains();
    },
    fnc_direction_map :  function(){
         $.mobile.changePage($('#direction_page'));
         
        var onGeoSuccess = function(position) {
            console.log(position);
        
            var location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            
            google.maps.visualRefresh = true;

            var mapOptions = {
                zoom : 13,
                center : location,
                rotateControl : false,
                streetViewControl : false,
                mapTypeControl : false,
                draggable : true,
                mapTypeId : google.maps.MapTypeId.ROADMAP
            };
            var map_name = "map_direction";
            var map_direction = new google.maps.Map(document.getElementById(map_name), mapOptions);
            //     current location manuel change default image
            var image = {
                url : 'img/aaa.gif',
                size : new google.maps.Size(38, 38),
                //size : new google.maps.Size(10, 10),
                origin : new google.maps.Point(0, 0),
                // The anchor for this image is the base of the flagpole at 0,32.
                anchor : new google.maps.Point(19, 19)
                //anchor : new google.maps.Point(5, 5)
            };
            var currentLocationMarker = new google.maps.Marker({
                position : location,
                map : map_direction,
                bounds : false,
                title : 'Buradasınız',
                icon : image,
                //shape : shape,
                optimized : false
                //animation : google.maps.Animation.BOUNCE
            });
//      current location add label and listener
            setCurrentLocationMessage(currentLocationMarker);
            function setCurrentLocationMessage(marker) {
              var message = "<div>Buradasınız</div>";
              var infowindow = new google.maps.InfoWindow({
                content: message
              });
            
              google.maps.event.addListener(marker, 'click', function() {
                infowindow.open(map_direction, marker);
              });
            }
//      end current location add label and listener
        
//         start direction

            var start = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

            /*
            $('#div_loc_list li').live('click', function() {
                clicked_val = $(this).text().trim();
                for (var i=0; i < posArray.length; i++) {
                    if (posArray[i].title.trim() == clicked_val) {
                        lat_end = posArray[i].latitude;
                        lng_end = posArray[i].longitude;
                    };
                };
            });
             */
            
            var end = new google.maps.LatLng(lat_end,lng_end);
            
            var directionsService = new google.maps.DirectionsService();
            var directionsDisplay = new google.maps.DirectionsRenderer(); 

            directionsDisplay.setMap(map_direction); 
            var request = { 
                origin: start, 
                destination: end, 
                travelMode: google.maps.DirectionsTravelMode.DRIVING 
            };
            directionsService.route(request, function(response, status){ 
                if (status == google.maps.DirectionsStatus.OK) 
                { 
                    directionsDisplay.setDirections(response); 
                } 
            }); 
            
            
//          end direction
        };
        

        
        var onGeoFail = function(error) {
            console.log(error);
        };
        
        navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoFail, {
            enableHighAccuracy : true
        });
    },
	
	// start login
	//google map start
	// onSuccess: function(position){
        // var longitude = position.coords.longitude;
        // var latitude = position.coords.latitude;
        // var latLong = new google.maps.LatLng(latitude, longitude);
//  
        // var mapOptions = {
            // center: latLong,
            // zoom: 13,
            // mapTypeId: google.maps.MapTypeId.ROADMAP
        // };
//  
        // var map = new google.maps.Map(document.getElementById("map"), mapOptions);
//     
        // var marker = new google.maps.Marker({
              // position: latLong,
              // map: map,
              // title: 'my location'
          // });
    // },
//     
    // onError: function(error){
        // alert("the code is " + error.code + ". \n" + "message: " + error.message);
    // },
    //google map end
	// Update DOM on a Received Event
	receivedEvent : function(id) {
		console.log("receive event");
		$.mobile.touchOverflowEnabled = false;
		$.mobile.defaultPageTransition = 'flip';
		$.mobile.defaultDialogTransition = 'none';
		$.mobile.transitionFallbacks.slide = 'none';
		$.mobile.transitionFallbacks.pop = 'none';
		$.mobile.buttonMarkup.hoverDelay = 0;
		
		//checkConnection();
	},
	productList : null,
	fnc_Barkod : function() {
				$("#un_barkod").empty();
		        $("#un_barkod").append(app.user_name + "("+app.total_points+")");
		        $("#card_name").empty();
		        $("#card_name").append(app.user_name.replace("Merhaba : ",""));
		        
		        app.check_campains();
	},	
	fnc_Puanlarim : function() {
				$("#un_puanlarim").empty();
		        $("#un_puanlarim").append(app.user_name + "("+app.total_points+")");
		        console.log("puanlarım 1");
		$.ajax({
			url : app.url+"GetAcitivies?member_id="+app.id,
			dataType : "json",
			success : function(a, b, c) {
				console.log("puanlarım 2");
				$('#div_puanlarim ul').remove();
				$('#div_puanlarim').append('<ul data-role="listview"></ul>');
				listItems = $('#div_puanlarim').find('ul');
				console.log("puanlarım 3");
				 
				
				for (var i = 0; i < a.length; i++) {
				html ="<table style='width:100%'>";
					console.log("puanlarım 4");
					html += '<tr><td width="50%">'+ a[i].company_name+ '</td>';
					html += '<td width="30%">' + a[i].activity_date + '</td>';
					html += '<td width="20%">' + a[i].points + '</td></tr>';
				    html+="</table>";
					listItems.append('<li id="prj_' + a[i].activity_id + '">' + html + '</li>');
				};
				
				$('#div_puanlarim ul').listview();
				console.log("puanlarım 5");
				for (var i = 0; i < a.length; i++) {
					console.log("puanlarım 6");
					$('#prj_' + a[i].activity_id).bind('tap',
					function(event, ui) {
						var strID = $(this).attr('id').replace('prj_','');
						app.getProductsDetay(strID);
					});
				}

		    },
			error : function(a, b, c) {
				$("#device_info").append('hata aldı '+ '<br />');

				console.log("err a ", a);
				console.log("err b ", b);
				console.log("err c ", c);
				console.log("err c ", c);
			}
		});
		app.check_campains();
	},	
	
	fnc_Mesajlar : function() {
				$("#un_mesajlar").empty();
		        $("#un_mesajlar").append(app.user_name + "("+app.total_points+")");
        $.ajax({
            url : app.url+"GetCampains?member_id="+app.id,
            dataType : "json",
            success : function(a, b, c) {
                console.log("kampanyalar");
                $('#div_mesajlar ul').remove();
                $('#div_mesajlar').append('<ul data-role="listview"></ul>');
                listItems = $('#div_mesajlar').find('ul');
                console.log("div_mesajlar 3");
                 
                    html ="<table style='width:100%'>";
                    html += '<tr><td width="25%"> Şirket Adı </td>';
                    html += '<td width="30%"> Kampanya </td>';
                    html += '<td width="15%">İndirim Oranı</td>';
                    //html += '<td width="15%">' + a[i].startdate + '</td>';
                    html += '<td width="15%"> Kampanya Bitiş Tarihi</td></tr>';
                    html += '<td > Yeni</td></tr>';
                    html+="</table>";
                    listItems.append('<li id="prj_header">' + html + '</li>');
                for (var i = 0; i < a.length; i++) {
                    if (a[i].isread=="0")
                    html ="<table style='width:100%' bgcolor='#00FF00'>";
                    else
                    html ="<table style='width:100%'>";
                    
                    console.log("div_mesajlar 4");
                    html += '<tr><td width="25%">'+ a[i].company_name+ '</td>';
                    html += '<td width="30%">' + a[i].campain_name + '</td>';
                    html += '<td width="15%">' + a[i].discount + '</td>';
                    //html += '<td width="15%">' + a[i].startdate + '</td>';
                    html += '<td width="15%">' + a[i].expiredate + '</td></tr>';
                    html+="</table>";
                    listItems.append('<li id="camp_' + a[i].campain_id + '">' + html + '</li>');
                };
                
                $('#div_mesajlar ul').listview();
                console.log("div_mesajlar 5");
                for (var i = 0; i < a.length; i++) {
                    console.log("div_mesajlar 6");
                    $('#camp_' + a[i].campain_id).bind('tap',
                    function(event, ui) {
        
                    $.ajax({
                        url : app.url+"GetCampains?conn_type=setread_campain_all&member_id="+app.id,
                        dataType : "json",
                        success : function(a, b, c) {
                            console.log("kampanyalar update");
                            app.check_campains();
                            $.mobile.changePage($('#barkod'));
                        },
                        error : function(a, b, c) {
                            console.log("err a ", a);
                            console.log("err b ", b);
                            console.log("err c ", c);
                            console.log("err c ", c);
                        }
                    }); 
        
                    });
                }
                
            },
            error : function(a, b, c) {
                $("#device_info").append('hata aldı '+ '<br />');

                console.log("err a ", a);
                console.log("err b ", b);
                console.log("err c ", c);
                console.log("err c ", c);
            }
        });         
        
       
        app.check_campains();
	},	
	fnc_message : function() {
	    console.log("first click guest message: "+app.id);
        $.ajax({
            url : app.url+"GetCampains?member_id="+app.id,
            dataType : "json",
            success : function(a, b, c) {
                console.log("kampanyalar");
                $('#div_messages_gs ul').remove();
                $('#div_messages_gs').append('<ul data-role="listview"></ul>');
                listItems = $('#div_messages_gs').find('ul');
                console.log("div_messages_gs 3");
                 
                    html ="<table style='width:100%'>";
                    html += '<tr><td width="25%"> Şirket Adı </td>';
                    html += '<td width="30%"> Kampanya </td>';
                    html += '<td width="15%">İndirim Oranı</td>';
                    //html += '<td width="15%">' + a[i].startdate + '</td>';
                    html += '<td width="15%"> Kampanya Bitiş Tarihi</td></tr>';
                    html += '<td > Yeni</td></tr>';
                    html+="</table>";
                    listItems.append('<li id="prj_header_g">' + html + '</li>');
                for (var i = 0; i < a.length; i++) {
                    if (a[i].isread=="0")
                    html ="<table style='width:100%'>";
                    else
                    html ="<table style='width:100%'>";
                    
                    console.log("div_messages_gs 4");
                    html += '<tr><td width="25%">'+ a[i].company_name+ '</td>';
                    html += '<td width="30%">' + a[i].campain_name + '</td>';
                    html += '<td width="15%">' + a[i].discount + '</td>';
                    //html += '<td width="15%">' + a[i].startdate + '</td>';
                    html += '<td width="15%">' + a[i].expiredate + '</td></tr>';
                    html+="</table>";
                    listItems.append('<li id="g_camp_' + a[i].campain_id + '">' + html + '</li>');
                };
                
                $('#div_messages_gs ul').listview();
                console.log("div_messages_gs 5");
                for (var i = 0; i < a.length; i++) {
                    console.log("div_messages_gs 6");
                    $('#g_camp_' + a[i].campain_id).bind('tap',
                    function(event, ui) {
        
                    $.ajax({
                        url : app.url+"GetCampains?conn_type=setread_campain_all&member_id="+app.id,
                        dataType : "json",
                        success : function(a, b, c) {
                            console.log("kampanyalar update");
                            app.check_campains();
                            $.mobile.changePage($('#g_messages'));
                        },
                        error : function(a, b, c) {
                            console.log("err a ", a);
                            console.log("err b ", b);
                            console.log("err c ", c);
                            console.log("err c ", c);
                        }
                    }); 
        
                    });
                }
                
            },
            error : function(a, b, c) {
                $("#device_info").append('hata aldı '+ '<br />');

                console.log("err a ", a);
                console.log("err b ", b);
                console.log("err c ", c);
                console.log("err c ", c);
            }
        });         
        
       
        // app.check_campains();
    },  
    fnc_Profil : function() {
				$("#un_profil").empty();
		        $("#un_profil").append(app.user_name+ "("+app.total_points+")");
		        $("#txt_isim").val(app.name +" "+ app.surname);
		        $("#tx_tckn").val(app.identityno);
		        $("#txt_dogumtarihi").val(app.birthdate);
				$("#txt_cep_tel").val(app.mobile);
				$("#txt_email").val(app.email);
				$("#txt_adres").val(app.address_text);
				if(app.allow_email==1)
				$('#chk_mail').Attr('checked',true);
				else
				$('#chk_mail').Attr('checked',false);
				
				if(app.allow_sms==1)
				$('#chk_sms').Attr('checked',true);
				else
				$('#chk_sms').Attr('checked',false);
                app.check_campains();
	},
	fnc_Kampanyalar : function() {
                if (is_guest == false) {
                    $("#un_kampanyalar").empty();
                    $("#un_kampanyalar").append(app.user_name+ "("+app.total_points+")");
                };
		        
		        app.check_campains();
	},			
	fnc_Istatistik : function() {
				$("#un_istatistik").empty();
		        $("#un_istatistik").append(app.user_name+ "("+app.total_points+")");
		        
		        app.check_campains();
	},
	fnc_saveanket: function() {

		var elements = document.getElementsByName('radio-choice');
		for(var i = 0; i < elements.length; i++)
		{
			
		    if (elements[i].checked==true)
		    {
		    	//insert database
		    console.log("selected:" + elements[i].checked);
		    console.log("selected:" + elements[i].id.replace('radio-choice-',''));

		    $.ajax({
                        url : app.url+"Inquery?conn_type=setInqueryRead&seq=1&memberid="+app.id+"&InquerySeq="+app.InquerySeq + "&result="+elements[i].id.replace('radio-choice-',''),
                        dataType : "json",
                        success : function(a, b, c) {
                            console.log("anket gönderiliyor 1");
                            app.check_campains();
                            $.mobile.changePage($('#barkod'));
                        },
                        error : function(a, b, c) {
                            console.log("err a ", a);
                            console.log("err b ", b);
                            console.log("err c ", c);
                            console.log("err c ", c);
                        }
                    }); 
		    }
		}

		},
		
	fnc_goanketdetay: function() {
		//$.mobile.changePage($('#anket_detay'));
		},
		
	fnc_Anket : function() {
		$.mobile.changePage($('#anket'));
		app.fnc_Anket2();
		app.fnc_Anket2();
	},
	fnc_Anket2 : function() {
				$("#un_anket").empty();
		        $("#un_anket").append(app.user_name+ "("+app.total_points+")");
		        
	    		console.log("first click anket  ");
                console.log("anket");
                $('#div_anket ul').remove();
                $('#div_anket').append('<ul data-role="listview"></ul>');
                listItems = $('#div_anket').find('ul');
                 
                    html ="<table style='width:100%'>";
                    html += '<tr><td width="33%">Kimden</td>';
                    html += '<td width="33%">Konu</td>';
                    html += '<td width="33%"> Nerede</td></tr>';
                    html += '<td width="33%"> </td></tr>';
                   
                    html+="</table>";
                    listItems.append('<li id="prj_header_z">' + html + '</li>');

                    html ="<table style='width:100%'>";
                    html += '<tr><td width="33%">'+ 'Mine Taşkaya'+ '</td>';
                    html += '<td width="33%">' + 'elbise oylaması' + '</td>';
                    html += '<td width="33%">' + 'GAP Kadıköy' + '</td>';
                    
                    if (app.id=="123456789")
                    {
                    	html += '<td width="33%">' + '<a href="#anket_gonder" onclick="app.get_member_friends()"> <img src="img/menu_icons/5_Campaign.png"/>' + '</a> </td>';
                    	html += '<td width="33%">' + '<a href="#anket_istatistik" onclick="app.fnc_AnketIstatistik()" > <img src="img/menu_icons/6_Statistic.png"/>' + '</a> </td>';
                    	html += '<td width="33%">' + '<a href="#anket_detay" > <img src="img/menu_icons/1_Home.png"/>' + '</a> </td>';
                    }
                    else
                    	html += '<td width="33%">' + '<a href="#anket_detay" > <img src="img/menu_icons/5_Campaign.png"/>' + '</a> </td>';
                    
                    html+="</table>";
                    listItems.append('<li id="g_camp_1453">' + html + '</li>');
                
                	$('#div_anket ul').listview();
/*
                    $('#g_camp_1453').bind('tap',
                    function(event, ui) {
                    	console.log("click anket detay");
                    	$.mobile.changePage($('#anket_detay'));
                    });
		        */
		        console.log("click anket son");
	},
	fnc_AnketIstatistik : function() 
	{
		app.fnc_goAnketIstatistik();
		app.fnc_goAnketIstatistik();
		
	},
	fnc_goAnketIstatistik : function() 
	{
		aa=0;
		bb=0;
		cc=0;
				$("#un_anket_istatistik").empty();
		        $("#un_anket_istatistik").append(app.user_name+ "("+app.total_points+")");
		        
		        
		        
		    $.ajax({
                        url : app.url+"Inquery?conn_type=getInqueryStatistic&memberid="+app.id,
                        dataType : "json",
                        success : function(a, b, c) {
                            aa=a.A;
                            bb=a.B;
                            cc=a.C;
                            console.log("aa:" + aa );
                            console.log("bb:" + bb );
                            console.log("cc:" + cc );
                            
	    		console.log("first click anket_istatistik  ");
                $('#div_anket_istatistik ul').remove();
                $('#div_anket_istatistik').append('<ul data-role="listview"></ul>');
                listItems = $('#div_anket_istatistik').find('ul');
                 
                    html ="<table style='width:100%'>";
                    html += '<tr>';
                    html += '<td width="33%">Siyah Elbise</td>';
                    html += '<td width="33%">Kırmızı Elbise</td>';
                    html += '<td width="33%">Mavi Elbise</td></tr>';
                   
                    html+="</table>";
                    listItems.append('<li id="prj_header_k">' + html + '</li>');

                    html ="<table style='width:100%'>";
                    html += '<tr><td width="33%">'+ aa + '</td>';
                    html += '<td width="33%">' + bb + '</td>';
                    html += '<td width="33%">' + cc + '</td>';                                        
                    html+="</table>";
                    listItems.append('<li id="g_camp_k_1453">' + html + '</li>');
                
                	$('#div_anket_istatistik ul').listview();                            
                        },
                        error : function(a, b, c) {
                            console.log("err a ", a);
                            console.log("err b ", b);
                            console.log("err c ", c);
                            console.log("err c ", c);
                        }
                    }); 

/*
                    $('#g_camp_1453').bind('tap',
                    function(event, ui) {
                    	console.log("click anket detay");
                    	$.mobile.changePage($('#anket_detay'));
                    });
*/
		        console.log("click anket son");
	},	
	fnc_EnYakin : function() {
				 $("#map").empty();
		         $("#map").append(app.user_name+ "("+app.total_points+")");
		        
		        app.check_campains();
	},			
	fnc_register : function() {
		$.mobile.changePage($('#register'));
	},				
	member_savefunc : function() {
	},	
	getMusteriler : function(){
	
	},
	get_member_friends: function(){
				$("#un_anket_gonder").empty();
		        $("#un_anket_gonder").append(app.user_name+ "("+app.total_points+")");


        $.ajax({
            url : app.url+"GetMember?conn_type=getfriends&member_id="+app.id,
            dataType : "json",
            success : function(a, b, c) {
                console.log("member anket");
                $('#div_anket_gonder ul').remove();
                $('#div_anket_gonder').append('<ul data-role="listview"></ul>');
                listItems = $('#div_anket_gonder').find('ul');
                console.log("div_anket_gonder 3");
                 
                    html ="<table style='width:100%'>";
                    html += '<tr><td width="25%"> İsim </td>';
                    html += '<td width="30%"> Soyisim </td>';
                    html += '<td width="15%">TelefonNo</td>';
                    html += '<td width="15%"> Seç</td></tr>';
                    html+="</table>";
                    listItems.append('<li id="prj_header_anketgondor">' + html + '</li>');
                for (var i = 0; i < a.length; i++) {
                    if (a[i].isread=="0")
                    html ="<table style='width:100%'>";
                    else
                    html ="<table style='width:100%'>";
                    
                    console.log("div_anket_gonder 4");
                    html += '<tr><td width="25%">'+ a[i].name+ '</td>';
                    html += '<td width="30%">' + a[i].surname+ '</td>';
                    html += '<td width="15%">' + a[i].mobile + '</td>';
                    html += '<td width="15%">' + "<input type='checkbox' name='group' id='chk_"+a[i].member_id+"'/>" + '</td></tr>';
                    html+="</table>";
                    listItems.append('<li id="anket_' + a[i].member_id + '">' + html + '</li>');
                };
                    listItems.append('<input type="button" name="btn_check" id="btn_check" value="Gönder" onclick="app.checkCheckBox()"/>');
                
                $('#div_anket_gonder ul').listview();
                console.log("div_anket_gonder 5");
                for (var i = 0; i < a.length; i++) {
                    console.log("div_anket_gonder 6");
                    $('#g_camp_' + a[i].campain_id).bind('tap',
                    function(event, ui) {
                    });
                   }
                   },
            error : function(a, b, c) {
                console.log("err a ", a);
                console.log("err b ", b);
                console.log("err c ", c);
                console.log("err c ", c);
            }
        });         

	},
	checkCheckBox : function(){
		var elements = document.getElementsByName('group');
		for(var i = 0; i < elements.length; i++)
		{
			
		    if (elements[i].checked==true)
		    {
		    	//insert database
		    console.log("selected:" + elements[i].checked);
		    console.log("selected:" + elements[i].id.replace('chk_',''));

		    $.ajax({
                        url : app.url+"Inquery?conn_type=insert&seq=1&fromMember="+app.id+"&toMember="+elements[i].id.replace('chk_','')+"&InquerySeq="+app.InquerySeq,
                        dataType : "json",
                        success : function(a, b, c) {
                            console.log("anket gönderiliyor 1");
                            app.check_campains();
                            $.mobile.changePage($('#barkod'));
                        },
                        error : function(a, b, c) {
                            console.log("err a ", a);
                            console.log("err b ", b);
                            console.log("err c ", c);
                            console.log("err c ", c);
                        }
                    }); 

		    
		    
		    }
		    
		}

	//var selected =$("input[type=checkbox]:not(:checked)");
	//console.log("selected:" + $(selected).next().text());
	},
	isnull : function(p){
		if (p ==null)
		return '.';
		else
		return p;
	},
	first_init : function(){
		app.InquerySeq=1;
		app.uuid = gtech_token; //app.isnull(device.uuid);
		//if (app.uuid==".")
		//app.uuid="586BC0F6-09DC-44FB-8F1D-A3ABCB8E0C80";
		//app.user_name="Merhaba : Mine Taşkaya";
		//app.user_id="90910000001";
		//app.id="123456789";

		$("#un_barkod").empty();
		$("#un_barkod").append(app.user_name);

		$("#un_barkod2").empty();
		$("#un_barkod2").append(app.user_name);

		new Chart(document.getElementById("pie").getContext("2d")).Pie(pieData,pieOptions);
		// new Chart(document.getElementById("line").getContext("2d")).Line(lineChartData);

		$.ajax({
			url : app.url+"GetAcitivies?member_id="+app.id+"&conType=totalpoint&deviceid="+gtech_token,
			dataType : "json",
			success : function(a, b, c) {
					app.total_points=a[0].total_point;
					$("#un_barkod").empty();
					$("#un_barkod").append(app.user_name+ "("+app.total_points+")");					
			},
			error : function(a, b, c) {
				$("#device_info").append('hata aldı '+ '<br />');

				console.log("err a ", a);
				console.log("err b ", b);
				console.log("err c ", c);
				console.log("err c ", c);
			}
		});
		
		//if(app.name==null)
		{
		$.ajax({			
			url : app.url+"GetMember?member_id="+app.id,
			dataType : "json",
			success : function(a, b, c) {
				{
				  app.identityno=a[0].identityno;
				  app.name=a[0].name;
				  app.surname=a[0].surname;
				  app.birthdate=a[0].birthdate;
				  app.Birth_place=a[0].Birth_place;
				  app.address_type=a[0].address_type;
				  app.address_text=a[0].address_text;
				  app.city_id=a[0].city_id;
				  app.allow_email=a[0].allow_email;
				  app.allow_sms=a[0].allow_sms;
				  app.mobile=a[0].mobile;
				  app.work_phone=a[0].work_phone;
				  app.home_phone=a[0].home_phone;
				  app.fax=a[0].fax;
				  app.email=a[0].email;
				  app.user_name ="Merhaba : " + a[0].name + " " + a[0].surname;
				  				  
				 }
				//else
				//  $("#device_info").append('Kullanıcı tanımınız yapılmamıştır. Lütfen yöneticinize danışınız ');
			},
			error : function(a, b, c) {
				$("#device_info").append('hata aldı '+ '<br />');

				console.log("err a ", a);
				console.log("err b ", b);
				console.log("err c ", c);
				console.log("err c ", c);
			}
		});
		}
	},
    check_campains : function(){
    	
        $.ajax({
            url : app.url+"GetCampains?member_id="+app.id+"&deviceid="+gtech_token,
            dataType : "json",
            success : function(a, b, c) {
                console.log("kampanyalar");
                isThereNewCampain=false;
                for (var i = 0; i < a.length; i++) {
                    if ((a[i].isread=="0") || (a[i].isread=="null"))
                    {
                        isThereNewCampain=true;
                        if (a[i].company_id=="2") // aeropostale
                          icon2=true;
                        if (a[i].company_id=="3") //bananerepuvlic
                          icon3=true;
                        if (a[i].company_id=="22") //gap
                          icon22=true;                        
                        if (a[i].company_id=="27") //mark spencer
                          icon27=true;                        
                    }
                    
            // aeropostale
            if (icon2)
            {
                    console.log($("#icon2").attr('src'));
                    $("#icon2").attr("src","img/company_icons/2_.jpg");
            }
            
            //bananerepuvlic
            if (icon3)
            {
                    console.log($("#icon3").attr('src'));
                    $("#icon3").attr("src","img/company_icons/3_.jpg");
            }
            //gap
            if (icon22)
            {
                    console.log($("#icon22").attr('src'));
                    $("#icon22").attr("src","img/company_icons/22_.jpg");
            }                         
            //mark spencer
            if (icon27)
            {
                    console.log($("#icon27").attr('src'));
                    $("#icon27").attr("src","img/company_icons/27_.jpg");
            }
        
        
            if (isThereNewCampain)
            {
                console.log($("#img_msg").attr('src'));
                $("#img_msg").attr("src","img/menu_icons/3_Message_y.png");
                
                console.log($("#img_camp").attr('src'));
                $("#img_camp").attr("src","img/menu_icons/5_Campaign_y.png");
        
                console.log($("#img_msg1").attr('src'));
                $("#img_msg1").attr("src","img/menu_icons/3_Message_y.png");
        
                console.log($("#img_camp1").attr('src'));
                $("#img_camp1").attr("src","img/menu_icons/5_Campaign_y.png");
        
        
                console.log($("#img_msg3").attr('src'));
                $("#img_msg3").attr("src","img/menu_icons/3_Message_y.png");
        
                console.log($("#img_camp3").attr('src'));
                $("#img_camp3").attr("src","img/menu_icons/5_Campaign_y.png");
        
                
                console.log($("#img_msg5").attr('src'));
                $("#img_msg5").attr("src","img/menu_icons/3_Message_y.png");
        
                console.log($("#img_camp5").attr('src'));
                $("#img_camp5").attr("src","img/menu_icons/5_Campaign_y.png");
        
        
                console.log($("#img_msg6").attr('src'));
                $("#img_msg6").attr("src","img/menu_icons/3_Message_y.png");
        
                console.log($("#img_camp6").attr('src'));
                $("#img_camp6").attr("src","img/menu_icons/5_Campaign_y.png");
        
            }
            else
            {       
                console.log($("#img_msg").attr('src'));
                $("#img_msg").attr("src","img/menu_icons/3_Message.png");
        
                console.log($("#img_camp").attr('src'));
                $("#img_camp").attr("src","img/menu_icons/5_Campaign.png");
        
        
                console.log($("#img_msg1").attr('src'));
                $("#img_msg1").attr("src","img/menu_icons/3_Message.png");
        
                console.log($("#img_camp1").attr('src'));
                $("#img_camp1").attr("src","img/menu_icons/5_Campaign.png");
        
        
                console.log($("#img_msg3").attr('src'));
                $("#img_msg3").attr("src","img/menu_icons/3_Message.png");
        
                console.log($("#img_camp3").attr('src'));
                $("#img_camp3").attr("src","img/menu_icons/5_Campaign.png");
        
                
                console.log($("#img_msg5").attr('src'));
                $("#img_msg5").attr("src","img/menu_icons/3_Message.png");
        
                console.log($("#img_camp5").attr('src'));
                $("#img_camp5").attr("src","img/menu_icons/5_Campaign.png");
        
        
                console.log($("#img_msg6").attr('src'));
                $("#img_msg6").attr("src","img/menu_icons/3_Message.png");
        
                console.log($("#img_camp6").attr('src'));
                $("#img_camp6").attr("src","img/menu_icons/5_Campaign.png");
        
            }
            };
            },
            error : function(a, b, c) {
                console.log("err a ", a);
                console.log("err b ", b);
                console.log("err c ", c);
                console.log("err c ", c);
            }
        });  
        
        
        $.ajax({			
			url : app.url+"Inquery?conn_type=checkInquery&memberid="+app.id,
			dataType : "json",
			success : function(a, b, c) {
				console.log("isunreadInquery: " +  a.isunreadInquery);
                    if ((a.isunreadInquery=="0") || (a.isunreadInquery=="null"))
                    {
                   		console.log($("#img_inq").attr('src'));
                		$("#img_inq").attr("src","img/menu_icons/8_anket.png");

                   		console.log($("#img_inq1").attr('src'));
                		$("#img_inq1").attr("src","img/menu_icons/8_anket.png");

                   		console.log($("#img_inq2").attr('src'));
                		$("#img_inq2").attr("src","img/menu_icons/8_anket.png");

                   		console.log($("#img_inq3").attr('src'));
                		$("#img_inq3").attr("src","img/menu_icons/8_anket.png");

                   		console.log($("#img_inq4").attr('src'));
                		$("#img_inq4").attr("src","img/menu_icons/8_anket.png");

                   		console.log($("#img_inq5").attr('src'));
                		$("#img_inq5").attr("src","img/menu_icons/8_anket.png");

                   		console.log($("#img_inq6").attr('src'));
                		$("#img_inq6").attr("src","img/menu_icons/8_anket.png");

                   		console.log($("#img_inq7").attr('src'));
                		$("#img_inq7").attr("src","img/menu_icons/8_anket.png");

                   		console.log($("#img_inq8").attr('src'));
                		$("#img_inq8").attr("src","img/menu_icons/8_anket.png");

                   		console.log($("#img_inq9").attr('src'));
                		$("#img_inq9").attr("src","img/menu_icons/8_anket.png");

                   		console.log($("#img_inq10").attr('src'));
                		$("#img_inq10").attr("src","img/menu_icons/8_anket.png");
					}
					else
                    {
                   		console.log($("#img_inq").attr('src'));
                		$("#img_inq").attr("src","img/menu_icons/8_anket_y.png");

                   		console.log($("#img_inq1").attr('src'));
                		$("#img_inq1").attr("src","img/menu_icons/8_anket_y.png");

                   		console.log($("#img_inq2").attr('src'));
                		$("#img_inq2").attr("src","img/menu_icons/8_anket_y.png");

                   		console.log($("#img_inq3").attr('src'));
                		$("#img_inq3").attr("src","img/menu_icons/8_anket_y.png");

                   		console.log($("#img_inq4").attr('src'));
                		$("#img_inq4").attr("src","img/menu_icons/8_anket_y.png");

                   		console.log($("#img_inq5").attr('src'));
                		$("#img_inq5").attr("src","img/menu_icons/8_anket_y.png");

                   		console.log($("#img_inq6").attr('src'));
                		$("#img_inq6").attr("src","img/menu_icons/8_anket_y.png");

                   		console.log($("#img_inq7").attr('src'));
                		$("#img_inq7").attr("src","img/menu_icons/8_anket_y.png");

                   		console.log($("#img_inq8").attr('src'));
                		$("#img_inq8").attr("src","img/menu_icons/8_anket_y.png");

                   		console.log($("#img_inq9").attr('src'));
                		$("#img_inq9").attr("src","img/menu_icons/8_anket_y.png");

                   		console.log($("#img_inq10").attr('src'));
                		$("#img_inq10").attr("src","img/menu_icons/8_anket_y.png");
					}
										
					
			},
			error : function(a, b, c) {
				console.log("err a ", a);
				console.log("err b ", b);
				console.log("err c ", c);
				console.log("err c ", c);
			}
		});   
    },  	
	insertfunc : function() {
		console.log("save func");
		var result= $("#sel_personels_yeni option:selected").val();
		var v_sel_company_yeni= $("#sel_company_yeni option:selected").val();
		var v_sel_activity_yeni= $("#sel_activity_yeni option:selected").val();
		var v_sel_activity_type_yeni= $("#sel_activity_type_yeni option:selected").val();
		var v_sel_activity_status_yeni= $("#sel_activity_status_yeni option:selected").val();
		var desc= $("#userDesc_yeni").val();
		//if(app.status==null)
		{
		$.ajax({			
			url : app.url+"GetMyActivities?android_id="+app.uuid+"&jsonType=1&con_type=insertactivity"+
			"&temp_status_id="+v_sel_activity_status_yeni+
			"&temp_assignto="+result + "&desc=" + desc +
			"&temp_activity_type_id="+v_sel_activity_yeni +
			"&temp_activity_property_id="+v_sel_activity_type_yeni +
			"&temp_company_id="+v_sel_company_yeni,
			dataType : "json",
			success : function(a, b, c) {
			app.kaydettimi=a;			
			$.mobile.changePage($('#benim'));
			app.getProducts2();
			},
			error : function(a, b, c) {
				console.log("err a ", a);
				console.log("err b ", b);
				console.log("err c ", c);
				console.log("err c ", c);
			}
		});
		}		
	},	
	savefunc : function() {
		console.log("save func");
		var result= $("#sel_personels option:selected").val();
		var result2= $("#sel_status option:selected").val();
		var desc= $("#userDesc").val();
		
		        app.name = $("#txt_isim").val();
		        app.surname= $("#txt_soyisim").val();
		        app.identityno=$("#tx_tckn").val();
		        app.birthdate=$("#txt_dogumtarihi").val();
		        //app.birth_place=$("#txt_dogumyeri").val();
				app.mobile=$("#txt_cep_tel").val();
				app.email=$("#txt_email").val();
				app.address_text=$("#txt_adres").val();

				if ($('#chk_mail').is(":checked"))
					app.allow_email=1;
				else
					app.allow_email=0;
				
				if ($('#chk_sms').is(":checked"))
					app.allow_sms=1;
				else
					app.allow_sms=0;
		
		app.user_name ="Merhaba : " +app.name  + " "+app.surname;
		//identityno=1234567890&name=selim&surname=göktaş&birthdate=1999&Birth_place=istanbul&address_type=1&address_text=adres&city_id=34&allow_email=0&allow_sms=1&mobile=5362798531&work_phone=536123456&home_phone=5363213232&fax=5363213232&email=selimgoktas@gtech.com.tr
		{
		$.ajax({
			url : app.url+"/GetMember?member_id="+app.id+
			"&conn_type=update&identityno="+app.identityno+"&name="+app.name+"&surname="+app.surname+"&birthdate="+app.birthdate+
			"&Birth_place="+app.birth_place+"&address_type="+app.address_type+"&address_text="+app.address_text+
			"&city_id="+app.city_id+"&allow_email="+app.allow_email+
			"&allow_sms="+app.allow_sms+"&mobile="+app.mobile+
			"&work_phone="+app.work_phone+"&home_phone="+
			app.home_phone+"&fax="+app.fax+"&email="+app.email ,
			dataType : "json",
			success : function(a, b, c) {
				console.log( "başarılı" );
			$.mobile.changePage($('#barkod'));
			},
			error : function(a, b, c) {
				console.log("err a ", a);
				console.log("err b ", b);
				console.log("err c ", c);
				console.log("err c ", c);
			}
		});
		}				
	},
	loginguest : function() {
        $.mobile.changePage("#g_campaign");    
        is_guest = true;
    },
    loginfnc : function() {
        is_guest = false;
        console.log("login form");
        var username = $("#username").val();
        var password = $("#password").val();
        $.ajax({            
            url : app.url+"GetMember?username="+username+"&password="+password+ "&deviceid="+gtech_token,
            dataType : "json",
            success : function(a, b, c) {         
           // $.mobile.changePage("#login");
                if (a != null && a.length > 0) {
                    if (a[0].status == 'ok') {                    	
                    	app.id = a[0].member_id;                    	
                    	app.user_name="Merhaba : " + a[0].name + " " + a[0].surname ;
						app.user_id= a[0].member_id;						
                    	
                    	console.log('sex : ' +a[0].sex);
                    	if (a[0].sex=='men')
                    	  $("#img_ret").attr("src","img/men.jpg");
                    	if (a[0].sex=='woman')
                    	  $("#img_ret").attr("src","img/woman.jpg");
                    	                    	
                        app.first_init();
                        app.check_campains();
                        app.fnc_Barkod();
                        //$.mobile.changePage("#choose_company");                        
                        $.mobile.changePage("#barkod");                        
                    }else{
                        alert("Lütfen kullanıcı adı ve şifrenizi doğru giriniz!");
                        $('#username').removeAttr('value');
                        $('#password').removeAttr('value'); 
                    }
               }else{
                    alert("Kullanıcı adı bulunamadı!");
                    $('#username').removeAttr('value');
                    $('#password').removeAttr('value'); 
               }
            },
            error : function(a, b, c) {
                console.log("err a ", a);
                console.log("err b ", b);
                console.log("err c ", c);
                console.log("err c ", c);
            }
        });             
    },
	openCamera : function() {
		var onCamSuccess = function(imageData) {
			/* No action required */
		};

		var onCamFail = function(error) {
			/* No action required */
			//alert('Kamera kullanılamıyor (' + error.code + ')');
		};

		var cameraPopoverHandle = navigator.camera.getPicture(onCamSuccess, onCamFail, {
			quality : 25,
			allowEdit : false,
			sourceType : Camera.PictureSourceType.CAMERA,
			destinationType : Camera.DestinationType.DATA_URL,
			encodingType : Camera.EncodingType.JPEG,
			cameraDirection : Camera.Direction.FRONT,
			targetWidth : 80,
			targetHeight : 80,
			saveToPhotoAlbum : false
		});
	},

	detectCurrentLocation : function() {
        var onGeoSuccess = function(position) {
            console.log(position);
        
            var location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            
            google.maps.visualRefresh = true;

            var mapOptions = {
                zoom : 13,
                center : location,
                rotateControl : false,
                streetViewControl : false,
                mapTypeControl : false,
                draggable : true,
                mapTypeId : google.maps.MapTypeId.ROADMAP
            };
            var map_name = "map";
            if (is_guest) {
                map_name = "guest_map";
            };
            var map = new google.maps.Map(document.getElementById(map_name), mapOptions);
            //     current location manuel change default image
            var image = {
                url : 'img/aaa.gif',
                size : new google.maps.Size(38, 38),
                //size : new google.maps.Size(10, 10),
                origin : new google.maps.Point(0, 0),
                // The anchor for this image is the base of the flagpole at 0,32.
                anchor : new google.maps.Point(19, 19)
                //anchor : new google.maps.Point(5, 5)
            };
            var currentLocationMarker = new google.maps.Marker({
                position : location,
                map : map,
                bounds : false,
                title : 'Buradasınız',
                icon : image,
                //shape : shape,
                optimized : false
                //animation : google.maps.Animation.BOUNCE
            });
//      current location add label and listener
            setCurrentLocationMessage(currentLocationMarker);
            function setCurrentLocationMessage(marker) {
              var message = "<div>Buradasınız</div>";
              var infowindow = new google.maps.InfoWindow({
                content: message
              });
            
              google.maps.event.addListener(marker, 'click', function() {
                infowindow.open(map, marker);
              });
            }
//      end current location add label and listener

//      start manuel position
        createMaker(map);
//end manuel position
        
        };

        var onGeoFail = function(error) {
            console.log(error);
        };
        
        navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoFail, {
            enableHighAccuracy : true
        });
    },
    mapLoaded : function() {
        console.log("mapLoaded");
        app.detectCurrentLocation();
    }
        
};



function createMaker(map){

            
            for (var i=0; i < posArray.length; i++) {
                var latitude = posArray[i].latitude;
                var longitude = posArray[i].longitude;
                var title = posArray[i].title;
                var address = posArray[i].address;
                var img_url = posArray[i].img_url;
                
                var aeropostaleZorluCenter = new google.maps.LatLng(latitude, longitude);
                var zorluCenterMarker = new google.maps.Marker({
                position : aeropostaleZorluCenter,
                map : map,
                bounds : false,
                title : title,
                icon : img_url,
                //shape : shape,
                optimized : false
                //animation : google.maps.Animation.BOUNCE
                });
                createMarker(zorluCenterMarker,address);
                function createMarker(marker,message) {
                    var infowindow = new google.maps.InfoWindow({
                        content: message
                    });
                    google.maps.event.addListener(marker, 'click', function() {
                        infowindow.open(map, marker);
                    });
                }
            };
            
            
};
