// portofolio
var dataPortofolio = [
    {
        "image": "p_1_i_1.png",
        "title": "Android For Beginner",
        "desc": "Java(Android)",
        "url": "portofolio/p_1.html"
    },
    {
        "image": "p_2_i_1.png",
        "title": "MyOwnWay",
        "desc": "Java(Android)",
        "url": "portofolio/p_2.html"
    },
    {
        "image": "p_3_i_1.png",
        "title": "Patrol Check",
        "desc": "Java(Android), PHP(API)",
        "url": "portofolio/p_3.html"
    },
    {
        "image": "p_4_i_1.png",
        "title": "Daron Labs",
        "desc": "Kotlin(Android), Laravel(API)",
        "url": "portofolio/p_4.html"
    },
    {
        "image": "p_5_i_1.png",
        "title": "CRM Semen Padang",
        "desc": "Kotlin(Android)",
        "url": "portofolio/p_5.html"
    },
    {
        "image": "p_6_i_1.png",
        "title": "SmartTop(Patrol Check V2)",
        "desc": "Kotlin(Android), Laravel(API)",
        "url": "portofolio/p_6.html"
    },
    {
        "image": "p_7_i_1.png",
        "title": "Web SmartTop(Patrol Check V2)",
        "desc": "CI3(Web), Laravel(API)",
        "url": "portofolio/p_7.html"
    },
    {
        "image": "p_8_i_1.png",
        "title": "KAO Distributor Advisor",
        "desc": "Java(Android), Laravel(API)",
        "url": "portofolio/p_8.html"
    },
    {
        "image": "p_9_i_1.png",
        "title": "Github Library(Android)",
        "desc": "Java(Android), Koltin(Android), Jitpack.IO",
        "url": "portofolio/p_9.html"
    },
    {
        "image": "p_10_i_1.png",
        "title": "KAO Kims",
        "desc": "Java(Android)",
        "url": "portofolio/p_10.html"
    }
];

var i = 0;
for (i = 0; i < dataPortofolio.length; i++) {
    document.getElementById("portfolios").innerHTML += `


                <!-- Post -->
                <article class="news-item box">
                  <div class="news-item__image-wrap overlay overlay--45" style="height:330px;">
                    <a class="news-item__link" href="single-post.html"></a>
                    <img class="cover lazyload" src="assets/assets/protofolio/`+ dataPortofolio[i]['image'] + `" alt="" />
                  </div>
                  <div class="news-item__caption">
                    <h2 class="title title--h4">`+ dataPortofolio[i]['title'] + `</h2>
                    <p>`+ dataPortofolio[i]['desc'] + `&nbsp;
            <a target="_blank" href="`+ dataPortofolio[i]['url'] + `"><i>ReadMore...</i></a>

              </p>
                  </div>
                </article>
        `;
    //<a class="news-item__link" href="`+ dataPortofolio[i]['url'] + `"><i>ReadMore...</i></a>
}

var dataPendidikan = [
    {
        "school": "SMK Kartika 1-2 Padang",
        "time": "2012 — 2015 Padang, Indonesia",
        "desc": "Lulusan SMK Kartika Jurusan Teknik Komputer dan Jaringan."
    },
    {
        "school": "D3 Teknik Komputer Politeknik Negeri Padang",
        "time": "2016 — 2019 Padang, Indonesia",
        "desc": "Lulusan D3 Teknik Komputer mendalami dunia Programming terutama platform Mobile."
    }
];

var k = 0;
for (k = 0; k < dataPendidikan.length; k++) {
    document.getElementById("pendidikan").innerHTML += `
        <article class="timeline__item">
            <h5 class="title title--h5 timeline__title">`+ dataPendidikan[k]['school'] + `</h5>
            <span class="timeline__period">`+ dataPendidikan[k]['time'] + `</span>
            <p class="timeline__description">`+ dataPendidikan[k]['desc'] + `</p>
        </article>
    `;
}

var dataKerja = [
    {
        "place": "Karyawan Magang Di IMASTUDIO",
        "time": "01/02/2019 — 31/04/2019 (Jakarta, Indonesia)",
        "desc": "[Intership] Belajar sekaligus mengajar sebagain Trainer Android dan Web, menggunakan bahasa JAVA dan beberapa framework PHP seperti Laravel dan CI."
    },
    {
        "place": "Developer Android dan Web di @SBMPTN.ID",
        "time": "05/05/2019 — 22/09/2019 (Padang, Indonesia)",
        "desc": "[Base On Project] Membantu pengembangan disalah satu startup di Padang yaitu SBMPTN.ID sebagai Android dan Web Developer, untuk pengembangan sistem berbasis Android dan Web."
    },
    {
        "place": "Developer Android AJOOJEK",
        "time": "23/09/2019 — 30/10/2019 (Padang, Indonesia)",
        "desc": "[Intership] Magang di AJOOJEK sebagai developer Android menggunakan bahasa JAVA/KOTLIN."
    },
    {
        "place": "Developer Android PT Sinergi Informatika Semen Indonesia(PT.SISI)",
        "time": "18/11/2019 — 18/02/2020 (Jakarta, Indonesia)",
        "desc": "[Base On Project] Bekerja di PT.SISI sebagai developer Android menggunakan KOTLIN, mendevelop aplikasi yang dipakai oleh seluruh Distributor Semen di Indonesia."
    },
    {
        "place": "Developer Android PT Intishaka Global Solusindo",
        "time": "01/04/2020 — Sekarang (Jakarta, Indonesia)",
        "desc": "Bekerja di PT Intishaka sebagai developer Android menggunakan Java, menghandle beberapa project, membuat library sendiri, membuat code generator sendiri, untuk mempermudah proses development."
    }
];

var j = 0;
for (j = 0; j < dataKerja.length; j++) {
    document.getElementById("kerja").innerHTML += `
        <article class="timeline__item">
            <h5 class="title title--h5 timeline__title">`+ dataKerja[j]['place'] + `</h5>
            <span class="timeline__period">`+ dataKerja[j]['time'] + `</span>
            <p class="timeline__description">`+ dataKerja[j]['desc'] + `</p>
        </article>
    `;
}
var dataSkills = [
    {
        "col": [
            {
                "title": "Java Mobile"
            },
            {
                "title": "Kotlin Mobile"
            },
            {
                "title": "CodeIgnither 3(CI3)"
            },
            {
                "title": "Node JS"
            }
        ]
    },
    {
        "col": [
            {
                "title": "PHP"
            },
            {
                "title": "Laravel"
            },
            {
                "title": "Lumen"
            },
            {
                "title": "JavaSript"
            }
        ]
    }, {

        "col": [
            {
                "title": "Git"
            },
            {
                "title": "HTML"
            },
            {
                "title": "MySql"
            },
            {
                "title": "C/C++"
            }
        ]
    },
    {

        "col": [
            {
                "title": "Restfull API(PHP, Lavavel, Node JS, Lumen, CI)"
            },
            {
                "title": "Flutter"
            },
            {
                "title": "CSS/CSS3"
            }
        ],
    }
]
for (let i = 0; i < dataSkills.length; i++) {
    const element = dataSkills[i];

    document.getElementById("mySkillsRow").innerHTML += `
        <div class="row" id="mySkillsRow_`+ i + `">
        
        </div>
        <br>
    `;
    element['col'].forEach(d => {

        // document.getElementById("mySkillsRow_" + i).innerHTML += `
        //         <div class="col">
        //         <!-- Progress -->
        //         <div class="progress">
        //             <div class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0"
        //             aria-valuemax="100" style="width: 100%; z-index: 2;">
        //             <div class="progress-text">
        //                 <span>`+ d['title'] + `</span>
        //                 <span></span>
        //             </div>
        //             </div>
        //             <div class="progress-text">
        //             <span>`+ d['title'] + `</span>
        //             </div>
        //         </div>
        //         </div>
        // `;

        document.getElementById("mySkillsRow_" + i).innerHTML += `
                <div class="col">
                <!-- Progress -->
                <div class="progress">
                    <div class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0"
                    aria-valuemax="100" style="width: 100%; z-index: 2;">
                    <div class="progress-text">
                        <span>`+ d['title'] + `</span>
                        <span></span>
                    </div>
                    </div>
                </div>
                </div>
        `;
    });
}
