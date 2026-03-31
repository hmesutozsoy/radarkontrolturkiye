// Known fixed radar & EDS locations in Turkey
// Compiled from publicly reported EGM data and news sources
// © OpenStreetMap contributors (ODbL) for coordinates
// Run fetch_radars.py to get the full OSM dataset and merge/replace this

const RADAR_DATA = [
  // ═══ İSTANBUL ═══
  // D-100 (E-5)
  {lat:41.0275,lng:28.7219,type:"radar",maxspeed:82,city:"İstanbul",road:"D-100",desc:"Avcılar"},
  {lat:41.0422,lng:28.8102,type:"radar",maxspeed:82,city:"İstanbul",road:"D-100",desc:"Bakırköy"},
  {lat:41.0533,lng:28.8647,type:"radar",maxspeed:82,city:"İstanbul",road:"D-100",desc:"Zeytinburnu"},
  {lat:41.0662,lng:28.9485,type:"radar",maxspeed:50,city:"İstanbul",road:"D-100",desc:"Zincirlikuyu"},
  {lat:41.0171,lng:29.0592,type:"radar",maxspeed:82,city:"İstanbul",road:"D-100",desc:"Kadıköy"},
  {lat:40.9911,lng:29.1208,type:"radar",maxspeed:82,city:"İstanbul",road:"D-100",desc:"Maltepe"},
  {lat:40.9689,lng:29.1888,type:"radar",maxspeed:82,city:"İstanbul",road:"D-100",desc:"Pendik"},
  // TEM (E-80)
  {lat:41.0989,lng:28.7955,type:"corridor",maxspeed:120,city:"İstanbul",road:"TEM",desc:"Mahmutbey-İstoç"},
  {lat:41.0855,lng:28.8462,type:"corridor",maxspeed:120,city:"İstanbul",road:"TEM",desc:"Mahmutbey"},
  {lat:41.0908,lng:29.0073,type:"radar",maxspeed:120,city:"İstanbul",road:"TEM",desc:"FSM Köprüsü Kuzey"},
  {lat:41.0720,lng:29.0280,type:"corridor",maxspeed:90,city:"İstanbul",road:"TEM",desc:"FSM Köprüsü"},
  {lat:41.0211,lng:29.1133,type:"corridor",maxspeed:120,city:"İstanbul",road:"TEM",desc:"Çamlıca-Ataşehir"},
  {lat:41.0048,lng:29.1342,type:"radar",maxspeed:120,city:"İstanbul",road:"TEM",desc:"Ataşehir"},
  // Kuzey Marmara Otoyolu
  {lat:41.1752,lng:28.5814,type:"radar",maxspeed:120,city:"İstanbul",road:"KMO",desc:"Arnavutköy"},
  {lat:41.2205,lng:28.6845,type:"radar",maxspeed:120,city:"İstanbul",road:"KMO",desc:"Eyüpsultan"},
  {lat:41.2013,lng:28.7721,type:"radar",maxspeed:120,city:"İstanbul",road:"KMO",desc:"Sarıyer Batı"},
  {lat:41.1488,lng:29.0521,type:"radar",maxspeed:120,city:"İstanbul",road:"KMO",desc:"Beykoz"},
  {lat:41.1195,lng:29.2107,type:"radar",maxspeed:120,city:"İstanbul",road:"KMO",desc:"Şile yolu"},
  {lat:41.0842,lng:29.3021,type:"radar",maxspeed:120,city:"İstanbul",road:"KMO",desc:"Çekmeköy"},
  {lat:41.0508,lng:29.3692,type:"radar",maxspeed:120,city:"İstanbul",road:"KMO",desc:"Sultanbeyli"},
  // Şehir içi EDS
  {lat:41.0731,lng:28.8122,type:"control",maxspeed:50,city:"İstanbul",road:"Basın Ekspres",desc:"Basın Ekspres Yolu"},
  {lat:41.0506,lng:28.9486,type:"control",maxspeed:50,city:"İstanbul",road:"",desc:"Halıcıoğlu"},
  {lat:41.1833,lng:29.2276,type:"control",maxspeed:50,city:"İstanbul",road:"",desc:"Riva Kavşağı"},
  {lat:41.0836,lng:28.9367,type:"control",maxspeed:50,city:"İstanbul",road:"",desc:"Alibeyköy"},
  // Beylikdüzü-Avcılar corridor
  {lat:41.0108,lng:28.6412,type:"corridor",maxspeed:82,city:"İstanbul",road:"D-100",desc:"Beylikdüzü-Avcılar"},

  // ═══ ANKARA ═══
  // Çevreyolu
  {lat:39.9821,lng:32.6188,type:"radar",maxspeed:110,city:"Ankara",road:"Çevreyolu",desc:"Eskişehir Kavşağı"},
  {lat:39.9912,lng:32.7105,type:"corridor",maxspeed:110,city:"Ankara",road:"Çevreyolu",desc:"Eskişehir Kavşağı-İvedik"},
  {lat:40.0023,lng:32.7598,type:"radar",maxspeed:110,city:"Ankara",road:"Çevreyolu",desc:"İvedik"},
  {lat:40.0541,lng:32.8214,type:"radar",maxspeed:110,city:"Ankara",road:"Çevreyolu",desc:"Keçiören Kavşağı"},
  {lat:40.0210,lng:32.9412,type:"radar",maxspeed:110,city:"Ankara",road:"Çevreyolu",desc:"Mamak Kavşağı"},
  // Konya Yolu
  {lat:39.9012,lng:32.8188,type:"corridor",maxspeed:82,city:"Ankara",road:"Konya Yolu",desc:"Balgat-Gölbaşı"},
  {lat:39.8545,lng:32.7832,type:"radar",maxspeed:82,city:"Ankara",road:"Konya Yolu",desc:"Gölbaşı"},
  // Mevlana Bulvarı
  {lat:39.9288,lng:32.8031,type:"control",maxspeed:50,city:"Ankara",road:"Mevlana Bulvarı",desc:"Mevlana Bulvarı EDS"},
  // Kuzey Ankara
  {lat:40.0112,lng:32.8801,type:"radar",maxspeed:82,city:"Ankara",road:"Protokol Yolu",desc:"Kuzey Ankara Protokol Yolu"},
  // Samsun Yolu
  {lat:40.0342,lng:32.9555,type:"radar",maxspeed:110,city:"Ankara",road:"Samsun Yolu",desc:"Çubuk çıkışı"},
  // Esenboğa Yolu
  {lat:40.0812,lng:32.9211,type:"radar",maxspeed:120,city:"Ankara",road:"Esenboğa Yolu",desc:"Havalimanı yolu"},
  {lat:40.1103,lng:32.9408,type:"radar",maxspeed:120,city:"Ankara",road:"Esenboğa Yolu",desc:"Esenboğa"},

  // ═══ İZMİR ═══
  // O-30 Çevreyolu
  {lat:38.3912,lng:27.0545,type:"radar",maxspeed:110,city:"İzmir",road:"O-30",desc:"Balçova"},
  {lat:38.4201,lng:27.0178,type:"radar",maxspeed:110,city:"İzmir",road:"O-30",desc:"Narlıdere"},
  {lat:38.4455,lng:26.9832,type:"radar",maxspeed:110,city:"İzmir",road:"O-30",desc:"Güzelbahçe"},
  {lat:38.4521,lng:27.1055,type:"radar",maxspeed:110,city:"İzmir",road:"O-30",desc:"Bornova çıkışı"},
  {lat:38.4632,lng:27.1488,type:"radar",maxspeed:110,city:"İzmir",road:"O-30",desc:"Bornova"},
  {lat:38.4801,lng:27.1892,type:"radar",maxspeed:110,city:"İzmir",road:"O-30",desc:"Kemalpaşa çıkışı"},
  {lat:38.5055,lng:27.2211,type:"radar",maxspeed:110,city:"İzmir",road:"O-30",desc:"Işıkkent"},
  // Menemen-Aliağa
  {lat:38.6112,lng:27.0645,type:"corridor",maxspeed:110,city:"İzmir",road:"Çevreyolu",desc:"Menemen Çevreyolu"},
  {lat:38.6523,lng:27.0412,type:"corridor",maxspeed:110,city:"İzmir",road:"",desc:"Menemen-Aliağa"},
  {lat:38.7241,lng:27.0105,type:"corridor",maxspeed:110,city:"İzmir",road:"",desc:"Aliağa"},
  {lat:38.7812,lng:26.9821,type:"corridor",maxspeed:110,city:"İzmir",road:"",desc:"Aliağa Petkim"},
  // D-550
  {lat:38.2512,lng:27.1411,type:"radar",maxspeed:90,city:"İzmir",road:"D-550",desc:"Menderes"},
  {lat:38.1832,lng:27.0988,type:"radar",maxspeed:90,city:"İzmir",road:"D-550",desc:"Gümüldür"},
  // Konak Tüneli
  {lat:38.4188,lng:27.1288,type:"corridor",maxspeed:70,city:"İzmir",road:"",desc:"Konak Tüneli-Altınyol"},

  // ═══ KONYA ═══
  {lat:37.9812,lng:32.4588,type:"radar",maxspeed:110,city:"Konya",road:"O-21",desc:"Ankara Çevreyolu Girişi"},
  {lat:37.9545,lng:32.4211,type:"radar",maxspeed:110,city:"Konya",road:"O-21",desc:"Selçuklu"},
  {lat:37.9288,lng:32.3988,type:"radar",maxspeed:110,city:"Konya",road:"O-21",desc:"Selçuklu Kavşağı"},
  {lat:37.9112,lng:32.3801,type:"corridor",maxspeed:110,city:"Konya",road:"O-21",desc:"Selçuklu Hız Koridoru 1"},
  {lat:37.8955,lng:32.3614,type:"corridor",maxspeed:110,city:"Konya",road:"O-21",desc:"Selçuklu Hız Koridoru 2"},
  {lat:37.8145,lng:32.5412,type:"radar",maxspeed:90,city:"Konya",road:"D-330",desc:"Konya-Karaman Meram çıkışı"},
  {lat:37.7821,lng:32.5888,type:"radar",maxspeed:90,city:"Konya",road:"D-330",desc:"Konya-Karaman"},
  {lat:37.7501,lng:32.6345,type:"radar",maxspeed:90,city:"Konya",road:"D-330",desc:"Karaman yolu"},
  {lat:37.8888,lng:32.0145,type:"radar",maxspeed:90,city:"Konya",road:"D-715",desc:"Afyon yolu Kadınhanı"},
  {lat:37.9345,lng:31.8812,type:"radar",maxspeed:90,city:"Konya",road:"D-715",desc:"Afyon yolu"},
  {lat:37.8345,lng:31.9112,type:"radar",maxspeed:90,city:"Konya",road:"",desc:"Beyşehir Yolu Ilgın"},
  // EDS
  {lat:37.8688,lng:32.4888,type:"control",maxspeed:50,city:"Konya",road:"",desc:"Zafer-Alaaddin Bulvarı"},
  {lat:37.8812,lng:32.4501,type:"corridor",maxspeed:50,city:"Konya",road:"",desc:"YHT Garı-Yazır Kampüsü"},

  // ═══ ANTALYA ═══
  {lat:36.9212,lng:30.6488,type:"radar",maxspeed:110,city:"Antalya",road:"D-400",desc:"Antalya-Kemer"},
  {lat:36.8801,lng:30.7121,type:"radar",maxspeed:82,city:"Antalya",road:"Çevreyolu",desc:"Antalya Çevreyolu"},
  {lat:36.8545,lng:30.7801,type:"radar",maxspeed:82,city:"Antalya",road:"D-400",desc:"Antalya-Alanya yolu"},
  {lat:36.7812,lng:31.0145,type:"radar",maxspeed:90,city:"Antalya",road:"D-400",desc:"Side yakını"},
  {lat:36.5488,lng:31.9888,type:"radar",maxspeed:90,city:"Antalya",road:"D-400",desc:"Alanya"},

  // ═══ BURSA ═══
  {lat:40.2312,lng:28.8601,type:"radar",maxspeed:120,city:"Bursa",road:"Otoyol",desc:"Bursa-İstanbul Otoyolu"},
  {lat:40.2655,lng:28.9412,type:"radar",maxspeed:120,city:"Bursa",road:"Otoyol",desc:"Orhangazi"},
  {lat:40.2108,lng:28.9888,type:"radar",maxspeed:82,city:"Bursa",road:"Çevreyolu",desc:"Bursa Çevreyolu"},
  {lat:40.1801,lng:29.0412,type:"radar",maxspeed:82,city:"Bursa",road:"",desc:"Mudanya yolu"},

  // ═══ KOCAELİ ═══
  {lat:40.7412,lng:29.4288,type:"radar",maxspeed:120,city:"Kocaeli",road:"TEM",desc:"Gebze"},
  {lat:40.7655,lng:29.5101,type:"radar",maxspeed:120,city:"Kocaeli",road:"TEM",desc:"Darıca-Çayırova"},
  {lat:40.7801,lng:29.6288,type:"radar",maxspeed:120,city:"Kocaeli",road:"TEM",desc:"Dilovası"},
  {lat:40.7588,lng:29.7412,type:"corridor",maxspeed:120,city:"Kocaeli",road:"TEM",desc:"Körfez Hız Koridoru"},
  {lat:40.7345,lng:29.8801,type:"radar",maxspeed:120,city:"Kocaeli",road:"TEM",desc:"Derince"},
  {lat:40.7212,lng:29.9201,type:"radar",maxspeed:120,city:"Kocaeli",road:"TEM",desc:"İzmit Batı"},
  {lat:40.7001,lng:29.9888,type:"radar",maxspeed:120,city:"Kocaeli",road:"TEM",desc:"İzmit Doğu"},
  {lat:40.7112,lng:30.0412,type:"radar",maxspeed:120,city:"Kocaeli",road:"TEM",desc:"Kartepe çıkışı"},
  // D-100
  {lat:40.7188,lng:29.4501,type:"radar",maxspeed:82,city:"Kocaeli",road:"D-100",desc:"Gebze D-100"},
  {lat:40.7088,lng:29.6012,type:"radar",maxspeed:82,city:"Kocaeli",road:"D-100",desc:"Dilovası D-100"},

  // ═══ SAKARYA ═══
  {lat:40.7145,lng:30.3212,type:"radar",maxspeed:120,city:"Sakarya",road:"TEM",desc:"Adapazarı Batı"},
  {lat:40.7288,lng:30.4101,type:"radar",maxspeed:120,city:"Sakarya",road:"TEM",desc:"Adapazarı"},
  {lat:40.7412,lng:30.5288,type:"radar",maxspeed:120,city:"Sakarya",road:"TEM",desc:"Akyazı çıkışı"},

  // ═══ BOLU ═══
  {lat:40.7212,lng:31.5288,type:"radar",maxspeed:120,city:"Bolu",road:"Otoyol",desc:"Bolu Dağı Tüneli Batı"},
  {lat:40.7345,lng:31.6101,type:"radar",maxspeed:120,city:"Bolu",road:"Otoyol",desc:"Bolu Dağı Tüneli Doğu"},
  {lat:40.7088,lng:31.4412,type:"radar",maxspeed:120,city:"Bolu",road:"Otoyol",desc:"Bolu Batı"},
  {lat:40.7501,lng:31.7801,type:"radar",maxspeed:120,city:"Bolu",road:"Otoyol",desc:"Bolu Doğu"},

  // ═══ DÜZCE ═══
  {lat:40.8212,lng:31.0888,type:"radar",maxspeed:120,city:"Düzce",road:"Otoyol",desc:"Kaynaşlı"},
  {lat:40.8412,lng:31.1601,type:"radar",maxspeed:120,city:"Düzce",road:"Otoyol",desc:"Düzce"},

  // ═══ TEKİRDAĞ ═══
  {lat:41.1088,lng:27.7812,type:"radar",maxspeed:110,city:"Tekirdağ",road:"D-110",desc:"Çorlu"},
  {lat:41.0812,lng:27.6501,type:"corridor",maxspeed:110,city:"Tekirdağ",road:"D-110",desc:"Marmaraereğlisi-Değirmenaltı"},
  {lat:41.0545,lng:27.5288,type:"radar",maxspeed:90,city:"Tekirdağ",road:"",desc:"Tekirdağ-Malkara"},

  // ═══ GAZİANTEP ═══
  {lat:37.0812,lng:37.3101,type:"radar",maxspeed:110,city:"Gaziantep",road:"Otoyol",desc:"Gaziantep Çevreyolu"},
  {lat:37.0545,lng:37.2412,type:"radar",maxspeed:82,city:"Gaziantep",road:"",desc:"Gaziantep-Nizip"},

  // ═══ ADANA ═══
  {lat:37.0212,lng:35.2801,type:"radar",maxspeed:110,city:"Adana",road:"O-21",desc:"Adana Çevreyolu"},
  {lat:37.0088,lng:35.3501,type:"radar",maxspeed:82,city:"Adana",road:"D-400",desc:"Adana-Ceyhan"},
  {lat:36.9888,lng:35.1288,type:"radar",maxspeed:82,city:"Adana",road:"",desc:"Adana-Mersin"},

  // ═══ MERSİN ═══
  {lat:36.8012,lng:34.5812,type:"radar",maxspeed:82,city:"Mersin",road:"D-400",desc:"Mersin Çevreyolu"},
  {lat:36.8345,lng:34.6501,type:"radar",maxspeed:110,city:"Mersin",road:"Otoyol",desc:"Tarsus Otoyolu"},

  // ═══ ESKİŞEHİR ═══
  {lat:39.7812,lng:30.4888,type:"radar",maxspeed:82,city:"Eskişehir",road:"",desc:"Eskişehir Çevreyolu"},
  {lat:39.8101,lng:30.5412,type:"radar",maxspeed:110,city:"Eskişehir",road:"",desc:"Ankara yolu"},

  // ═══ SAMSUN ═══
  {lat:41.2888,lng:36.3012,type:"radar",maxspeed:82,city:"Samsun",road:"D-010",desc:"Samsun Çevreyolu"},

  // ═══ TRABZON ═══
  {lat:41.0012,lng:39.6888,type:"radar",maxspeed:82,city:"Trabzon",road:"",desc:"Trabzon sahil yolu"},

  // ═══ AFYONKARAHISAR ═══
  {lat:38.7501,lng:30.5412,type:"radar",maxspeed:90,city:"Afyonkarahisar",road:"",desc:"Seydiler"},
  {lat:38.6212,lng:30.4101,type:"radar",maxspeed:90,city:"Afyonkarahisar",road:"",desc:"Çay"},
  {lat:38.5545,lng:30.3288,type:"radar",maxspeed:90,city:"Afyonkarahisar",road:"",desc:"Sultandağı"},
  {lat:38.4888,lng:30.2601,type:"radar",maxspeed:90,city:"Afyonkarahisar",road:"",desc:"Denizli yolu"},
];
