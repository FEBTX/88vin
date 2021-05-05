"use strict";
var precacheConfig = [
        ["/index.html", "d9ffa1b5748ee2c798136b897666efe7"],
        ["/static/css/main.cd43fbb3.css", "ae3507aacca9d165cd336f935a7404ee"],
        ["/static/js/0.c3517d18.chunk.js", "a2a73cd565a4a7bb104b955ac589af4a"],
        ["/static/js/1.04dd50d2.chunk.js", "d1f46b7ebd613a2769c27b82a3bfcea2"],
        ["/static/js/10.bcc3e04d.chunk.js", "e40f8c5baaa84330716aa36e16b7d88c"],
        ["/static/js/11.de5336c0.chunk.js", "50744d361e27a68c2c2b92ee21e7c8a3"],
        ["/static/js/12.9f12aa48.chunk.js", "cd742d4f4e4338a68ec716f6a051ea8e"],
        ["/static/js/13.e8fdf3db.chunk.js", "cd5b4841b5504d64a2aeb35c2fea9288"],
        ["/static/js/14.1bd6e2f2.chunk.js", "830e26b0672f57e6f8030b1c7ceb58a9"],
        ["/static/js/15.86c51d71.chunk.js", "9337f8c530eaf9777dfae039fed8bade"],
        ["/static/js/16.0b18d8b0.chunk.js", "ec34b9aff03eb47a555e4613b7c16d0c"],
        ["/static/js/17.e8ff3e88.chunk.js", "3ef09f61fbd1993c891581f6289ad9b3"],
        ["/static/js/18.d4544174.chunk.js", "255019f04895b6c72f3f3465c966e539"],
        ["/static/js/19.900af12c.chunk.js", "eee69d88cbeca9588f8f2dfbed2d5081"],
        ["/static/js/2.2f78813d.chunk.js", "2b1a3fa15eab3584e749e848f21eafbc"],
        ["/static/js/20.dd32fad5.chunk.js", "31c2c44260731c8e32637c7c896c6113"],
        ["/static/js/21.a1bded13.chunk.js", "c18319f880265ef690b4679d3a3b7457"],
        ["/static/js/22.b6b0480b.chunk.js", "44d654faf0c4586539199c21a65a8c4f"],
        ["/static/js/23.6ef6bc75.chunk.js", "3f47298e1615346eafd60f2cceee03b5"],
        ["/static/js/24.add41e99.chunk.js", "5e78fc6a718ae202498d7e16d9083336"],
        ["/static/js/25.7a8cbb07.chunk.js", "8e756ff45828a1fbb4864b48256badb8"],
        ["/static/js/26.2ec73188.chunk.js", "3373397d1425fad6d832eb0c2dcb6584"],
        ["/static/js/27.3b6c862a.chunk.js", "9a9d6d9e69f56c8e2a5532ac3c5423c8"],
        ["/static/js/28.3725efe5.chunk.js", "861a1cbe88976e343117e4c88b582ca9"],
        ["/static/js/29.1e773c74.chunk.js", "bbfc34e47b6456ae617aa6d4fcfbc5d0"],
        ["/static/js/3.3146b072.chunk.js", "8a184dd692e1571a5df0fc353c2ddb2b"],
        ["/static/js/30.fcd61633.chunk.js", "923b1d056cca4fbbf10a0f63e59718a1"],
        ["/static/js/31.846030cd.chunk.js", "03fb2c0ccabfe5d5d8d7ddaa161f7fbd"],
        ["/static/js/32.acd8936d.chunk.js", "02cb5aac9fe45d3c46e3a5bffec78e6e"],
        ["/static/js/33.095cd4b6.chunk.js", "94e48f3e7fd699e2ed71d53e3c769102"],
        ["/static/js/34.1173c2d0.chunk.js", "d596a6a93e047aeafb28255bd784df29"],
        ["/static/js/35.37bf70f6.chunk.js", "fb05f506c8107b6617befcbb905a96b4"],
        ["/static/js/36.7ce833ae.chunk.js", "5b796b5c3c073635a3812e2cc72ee97d"],
        ["/static/js/37.1f2726eb.chunk.js", "ede281425411b05345bfbe9f032555a3"],
        ["/static/js/38.dd278868.chunk.js", "7b4dbd72c49d1da438fbe1bc047f79fd"],
        ["/static/js/39.6c3852eb.chunk.js", "1523c88f0feea29c4c397c02e1dbc472"],
        ["/static/js/4.94fdee91.chunk.js", "57bf47c3f8639dfc5a213767f8291915"],
        ["/static/js/5.7723cee9.chunk.js", "37f055a17c694aa3159dc254a2f3f3d9"],
        ["/static/js/6.e5dbbfa3.chunk.js", "b92f11a49ca2e0442512abd898772e33"],
        ["/static/js/7.b1091acb.chunk.js", "63eabf1d5663615232ac427037d8ad70"],
        ["/static/js/8.2c1f0858.chunk.js", "429c19ea4bd53cd8c88fcddd2d7c1909"],
        ["/static/js/9.80b32f27.chunk.js", "7e6ae1b7fe090ce4dfda61db9a34ea09"],
        ["/static/media/88vin.d5008e7b.png", "d5008e7b5d053dbcfc8da367bb8824c0"],
        ["/static/media/EventJackpot.ceb7882a.png", "ceb7882a7b03d2e9c3545782c3d41cd8"],
        ["/static/media/EventTournament-pk-tlmn.cf146266.png", "cf14626645e922382df0207ad182d468"],
        ["/static/media/EventTournament-sl.f5237ef8.png", "f5237ef8bd1d8c0cb01a7a9e24d9dedb"],
        ["/static/media/EventTournament.ae2648a9.png", "ae2648a90340f648731e6865edd243ba"],
        ["/static/media/MiniGameBC.c1b714d8.png", "c1b714d81e37dfd8d28017a6f43b9204"],
        ["/static/media/MiniGameBC_Event.e0e9266b.png", "e0e9266b9fb1a2beaf64b211c345fbc8"],
        ["/static/media/MiniGameCT.73b82314.png", "73b8231436f0538646c19e9afde8128c"],
        ["/static/media/MiniGameCT_Event.c95a5c2e.png", "c95a5c2eef11980b63f552e937cd3534"],
        ["/static/media/MiniGameLW.d2d84695.png", "d2d846957ec410eba674d7a02d7f7a8a"],
        ["/static/media/MiniGameMP.65a2f8e0.png", "65a2f8e0d94b06ca734dc49d42383a45"],
        ["/static/media/MiniGameMP_Event.32ea04b2.png", "32ea04b23b8cd4063ab375c0043c66c3"],
        ["/static/media/MiniGamePS.9288429c.png", "9288429cbe69d9bb91aa5ae9e5b7ea29"],
        ["/static/media/MiniGameTX.34bcd1c3.png", "34bcd1c359705d8a6d837da0d0231f32"],
        ["/static/media/MiniGameTX_Event.0838c48e.png", "0838c48ed7f5e758b0001d24d0a9b804"],
        ["/static/media/MiniGameXS.d658de09.png", "d658de09865f530ba05d7e20dca61bdf"],
        ["/static/media/MultiSlot.6114a058.png", "6114a058ceb5556c227e28a724141788"],
        ["/static/media/MultiSlotPlayLG.bcfc5fa0.png", "bcfc5fa0ebc72cc4eb1326bc6e4a80d8"],
        ["/static/media/MultiSlotPlaySM.73fd291c.png", "73fd291ca093c7fad4061f11c158699d"],
        ["/static/media/Roboto-Black.05c437fb.eot", "05c437fb92bca08ac18aa7a96d4b1d80"],
        ["/static/media/Roboto-Black.281d17f6.woff", "281d17f6edc3d9f1b93aac0b78ede708"],
        ["/static/media/Roboto-Black.7c594126.svg", "7c594126510c727d288566e708199069"],
        ["/static/media/Roboto-Black.893fe146.ttf", "893fe14628bd7ac498d550e96367e1be"],
        ["/static/media/Roboto-Bold.261c6193.eot", "261c61936b688786f2f329e815214c1b"],
        ["/static/media/Roboto-Bold.31b267f8.svg", "31b267f87b05902ee27ea3fd0be6f3e8"],
        ["/static/media/Roboto-Bold.d329cc8b.ttf", "d329cc8b34667f114a95422aaad1b063"],
        ["/static/media/Roboto-Bold.f331d254.woff", "f331d254b3699e86fd410f9f4d42ccd5"],
        ["/static/media/Roboto.5dd4336f.woff", "5dd4336f899c164b2e7c49e0f7d16896"],
        ["/static/media/Roboto.9113a9f3.svg", "9113a9f397816dabc0144091a1086fd2"],
        ["/static/media/Roboto.a28928ed.eot", "a28928edbd1711773bad9e1eadfb785f"],
        ["/static/media/Roboto.ac3f799d.ttf", "ac3f799d5bbaf5196fab15ab8de8431c"],
        ["/static/media/VipWheel.2e3bbd22.png", "2e3bbd229047b5c91a8ec3d65b72c23b"],
        ["/static/media/asset.42369b9c.png", "42369b9c74d5711ea8c1fb66fa285848"],
        ["/static/media/asset.5ad1489b.png", "5ad1489bb5e12f909b37a30693613b18"],
        ["/static/media/assets.42369b9c.png", "42369b9c74d5711ea8c1fb66fa285848"],
        ["/static/media/background-vip-wheel.a3dcf82a.jpg", "a3dcf82a33431231036f2a12664365f8"],
        ["/static/media/background.6f606d02.png", "6f606d0291160bf4031383ebdd5fa9d5"],
        ["/static/media/background.79f3b335.jpg", "79f3b335b95dc97860f822c10c6fd8c8"],
        ["/static/media/background.908880d4.jpg", "908880d4138865e041b9be51a12afcb5"],
        ["/static/media/ball-pb.a54a44e8.svg", "a54a44e89684bb54b1b1b05816e5bcc5"],
        ["/static/media/ball-pb.f9d118f3.svg", "f9d118f3e40d14aa442d9f3401ebd649"],
        ["/static/media/ball.d65098ba.svg", "d65098bad8b1211394267b90b17686c3"],
        ["/static/media/bg-jp-tournament.a83eafe5.png", "a83eafe5bb726b4d7c2bd00f5fb67479"],
        ["/static/media/bg-line.c7830354.jpg", "c78303540594e28f1a19ca822358a3c0"],
        ["/static/media/bg-s.2c43e171.jpg", "2c43e171bc411422f572c3da15e4b949"],
        ["/static/media/bg-t.73c18dc8.jpg", "73c18dc82fd16119e9ecae0f63717acf"],
        ["/static/media/bg-viptour-pop.6ffba758.png", "6ffba758ad054b11c9dffcb489c5944f"],
        ["/static/media/bg.2efceeeb.jpg", "2efceeebe9ad06b0a9c5bba2d52f7ba5"],
        ["/static/media/bg.c1610337.jpg", "c161033744f5372c78619907daccfc04"],
        ["/static/media/bg.cfc20a13.jpg", "cfc20a13d4ef3623d854b2f29041aeed"],
        ["/static/media/bg.d2279b3e.jpg", "d2279b3e8e0ca24fb4119061255afb49"],
        ["/static/media/bg.fe91a313.jpg", "fe91a3131f2c2eda5192ea8b35228347"],
        ["/static/media/bg_list.07a41026.png", "07a41026900cad66d48018251782106c"],
        ["/static/media/bg_popup2.0529f5d3.png", "0529f5d3573882602142e5847f3d7fe2"],
        ["/static/media/bg_popup3.4b0fbe3f.png", "4b0fbe3f026ab3274b17e8472e7a3095"],
        ["/static/media/bg_vip.9c53f521.png", "9c53f521f6f95cbf69ea25fcd80f02ce"],
        ["/static/media/bgactive.6a5d404c.png", "6a5d404cd65aaa6980caead1751e6d04"],
        ["/static/media/bgtop-info.73063318.png", "730633182912ce23043ee31509856b64"],
        ["/static/media/bgviptour-2.16ea246d.jpg", "16ea246d0154c038fc270a26cbe6f3c9"],
        ["/static/media/bgviptour.adba4caf.jpg", "adba4cafc220f56a2c4e83d182071397"],
        ["/static/media/bgviptour0-2-s.5d7d8202.png", "5d7d82021a86c12d8da26a5c0232ba3a"],
        ["/static/media/bgviptour0-2.1a299a51.png", "1a299a51aa41c17b2628a1c115e1bfa2"],
        ["/static/media/bgviptour0-s.cfe707c7.png", "cfe707c7b14e1215115e3c095be8caf6"],
        ["/static/media/bgviptour0.8a6cf852.png", "8a6cf8526f723b5454feec6d71dd1116"],
        ["/static/media/bgviptour1-2-s.c77f0687.png", "c77f06873969f21cc8c42a7d8d8f5e19"],
        ["/static/media/bgviptour1-2.15909211.png", "15909211eb124985b73c21866e8dcba0"],
        ["/static/media/bgviptour1-s.65f7c676.png", "65f7c67678094a087c3ffe247d34d561"],
        ["/static/media/bgviptour1.f14324d6.png", "f14324d6588a13105af0a4a642dc393b"],
        ["/static/media/bgviptour2-2-s.013d9a29.png", "013d9a298ee3289077b67361ed636dcb"],
        ["/static/media/bgviptour2-2-t.663f692d.png", "663f692d0e4a426d66c38447a49ac76e"],
        ["/static/media/bgviptour2-2.7e6abb73.jpg", "7e6abb73bb593916506b80d9c9ad52ec"],
        ["/static/media/bgviptour2-s.a84bc70f.png", "a84bc70ffa5730072d0220354ad82fd6"],
        ["/static/media/bgviptour2-t.38eaa95b.png", "38eaa95b64c2083e2e707e37b1235ddf"],
        ["/static/media/bgviptour2.792a5a39.jpg", "792a5a3919ff4c113caa0020604f6e1b"],
        ["/static/media/body.db175d76.jpg", "db175d767182a03c9342136e101160f7"],
        ["/static/media/border-3.5362dc97.png", "5362dc971a6191c2f324f682b6188fc7"],
        ["/static/media/bot.837c24a5.png", "837c24a52cacda3cbd4daa9fb17c6440"],
        ["/static/media/choose-tour.f108244d.png", "f108244d58ff166ba61754b759af85ca"],
        ["/static/media/dk.ef5f5cf2.png", "ef5f5cf23cca264a712d77083483ca8a"],
        ["/static/media/effects.587c63d4.png", "587c63d49bcd5c8e2525bb5de6e99eb6"],
        ["/static/media/fa-light-300.1980e028.eot", "1980e02850f8d6c2e02280a60674f547"],
        ["/static/media/fa-light-300.5bdaa858.ttf", "5bdaa8582fd409b4a3fd9f03916de415"],
        ["/static/media/fa-light-300.68c2f74f.woff2", "68c2f74f76d4236722607d6eeb8b105d"],
        ["/static/media/fa-light-300.f056755c.woff", "f056755c8cd097b5f5ffde3e98387631"],
        ["/static/media/fa-solid-900.0f7c8f7d.woff", "0f7c8f7d7cd80287a094702ebaf8019c"],
        ["/static/media/fa-solid-900.16e9dbeb.woff2", "16e9dbeb2afd22d5cf0e7eeb2b2879ae"],
        ["/static/media/fa-solid-900.977e6fae.ttf", "977e6fae30d6f3f1aed9997f1928f70d"],
        ["/static/media/fa-solid-900.98d38a5d.eot", "98d38a5db49c92a68bd3b83b906ee2c9"],
        ["/static/media/fa-solid-900.ff4da5ed.svg", "ff4da5ed81cdfe2b2e68d6dd9978d96e"],
        ["/static/media/firework.93ad0d3b.png", "93ad0d3badadaaab96f3cf2b286644ee"],
        ["/static/media/frame.2503591c.png", "2503591c6339cd0a65cbf2f7f3b1a16e"],
        ["/static/media/frame.e3d1f54b.png", "e3d1f54bf0d4de243485493546e87fad"],
        ["/static/media/fx-lj.1571cc2b.png", "1571cc2b7546d070a2679e9ae5ed54f4"],
        ["/static/media/fxJackpotEvt.b19919ac.png", "b19919ac6540d065cb8e3803e45a7e04"],
        ["/static/media/fxJackpotLighting.8a1cc67c.png", "8a1cc67c6156b41de08831ea61616139"],
        ["/static/media/fxMultislotPlaying.4fdc4909.png", "4fdc4909208816479d7a700659b18340"],
        ["/static/media/g365.90bcc1a3.png", "90bcc1a38be83c79b91e6d8901365c37"],
        ["/static/media/g88.04ff69da.png", "04ff69da5053f0fe91ec173f7aef74ed"],
        ["/static/media/game-category.9dd0685e.png", "9dd0685e4240aa712a8e01b3d5e041be"],
        ["/static/media/game.34abf470.png", "34abf4707e6cf0045889b7b5132fba76"],
        ["/static/media/ic-guide-fill.bcccf869.svg", "bcccf8693f183cd3173260f7250a045d"],
        ["/static/media/ic-guide-fill.cb6f42f4.svg", "cb6f42f4ed33db4b8ee2b0d90c183214"],
        ["/static/media/ic-guide.c3679ff6.svg", "c3679ff62c2392d6e8980dc7607461a0"],
        ["/static/media/ic-history-fill.27b3cb37.svg", "27b3cb3771f02d76e59121e8f50338d6"],
        ["/static/media/ic-history-fill.322b34f7.svg", "322b34f72a5b7cd7d05f2c152286ab4a"],
        ["/static/media/ic-history.d85e42b4.svg", "d85e42b407fc18e1d2d4531c51e534b6"],
        ["/static/media/ic-miniball-pb.ad17d258.svg", "ad17d258b9c2c34f4038e4884ae13156"],
        ["/static/media/ic-miniball-pb.dc6b7ac4.svg", "dc6b7ac444160cfdfbf4de8a7fc741e8"],
        ["/static/media/ic-miniball.3b6b1d74.svg", "3b6b1d742accfb1c2846c6a303044891"],
        ["/static/media/ic-result-fill.b6b24dd7.svg", "b6b24dd777dfdfec9b0e40b58a5a42c7"],
        ["/static/media/ic-result-fill.c64f5457.svg", "c64f5457ea8c6c87989e3c68ea3e6264"],
        ["/static/media/ic-result.59dc2d22.svg", "59dc2d22166f11ae5dd29d3f632df3cc"],
        ["/static/media/ic-stats-fill.18e7cec2.svg", "18e7cec23a9521c0621a7a280342ddeb"],
        ["/static/media/ic-stats-fill.1e575714.svg", "1e575714abe4ebb9df4eab214772afe8"],
        ["/static/media/ic-stats.8dd6d02c.svg", "8dd6d02cc57ef7ffe6654ad9e6483b6a"],
        ["/static/media/ic-ticket-dark.16e496d6.svg", "16e496d67fbdc7ea7ed15e1a0e9c4de5"],
        ["/static/media/ic-ticket-fill.eaa98c38.svg", "eaa98c38cae66ee1ba153178a23c9bd5"],
        ["/static/media/ic-ticket-fill.f22459a5.svg", "f22459a5b5ac1f92d7049ebe2383d51e"],
        ["/static/media/ic-ticket-light.3c50fda4.svg", "3c50fda46a02811963a205d9d9c265a5"],
        ["/static/media/ic-ticket.dc9f09b8.svg", "dc9f09b820540936d8ae3f8d6b45e0c2"],
        ["/static/media/ic-type-1-s.0907555e.png", "0907555eba306fe329a2292943a68ed6"],
        ["/static/media/ic-type-1.81c9ba12.png", "81c9ba12b41ce8ee32cd1f0c67e2f0bb"],
        ["/static/media/ic-type-2-s.bc70bbc3.png", "bc70bbc3f44924e26f371ca9aaedb668"],
        ["/static/media/ic-type-2.3f61a3dd.png", "3f61a3dd66848c54afba796e59f66162"],
        ["/static/media/ic-type-3-s.8b911328.png", "8b9113288e3acb7c371736667e842889"],
        ["/static/media/ic-type-3.c6a87cb8.png", "c6a87cb8147407b41a3ead3300433e80"],
        ["/static/media/icon-ps-ena.40c2400f.png", "40c2400ff3547fa15750e8cc120d90d3"],
        ["/static/media/icon.d9b13f3a.png", "d9b13f3a869c82c3f56ff6174ffd02a9"],
        ["/static/media/input-radio-checked.0edfb545.svg", "0edfb545406b425668b4da99bb76f899"],
        ["/static/media/input-radio-checked.262b8a78.svg", "262b8a78ce24aaf1b86335e24ffdd5f5"],
        ["/static/media/input-radio.a7f83d52.svg", "a7f83d529288714dbe1d523ad8dd052e"],
        ["/static/media/jackpot-bg-shadow.0935ffd6.png", "0935ffd6706ec698e5bc8a0b398caef7"],
        ["/static/media/light-result-bg.6ceb6b43.png", "6ceb6b439d43b66ed10736d7edb06a54"],
        ["/static/media/light.859bf53c.png", "859bf53c9ad43db59a71a3c3d3959e0e"],
        ["/static/media/light1.0912f0ca.png", "0912f0ca39a03ac045e228653c4e3400"],
        ["/static/media/light2.201f6986.png", "201f6986d8359523e4f087fd62f5b7cc"],
        ["/static/media/light3.8c8c648e.png", "8c8c648eb4e845670a02c3a69eb9f508"],
        ["/static/media/logo-usmm-l.ae13c116.png", "ae13c11606938472787f082fff72cd1b"],
        ["/static/media/logo-usmm-l@2x.f7505988.png", "f7505988f8b20e21d2df1c35b74828b2"],
        ["/static/media/logo-usmm.213e4282.png", "213e428267a48e1634eccdee8132083d"],
        ["/static/media/logo-usmm@2x.4c64b042.png", "4c64b042b5cb634263027daae18e8350"],
        ["/static/media/logo-uspb.2e3f1fa5.png", "2e3f1fa563fb9e6c2a88db8c0aff8441"],
        ["/static/media/logo-uspb@2x.65e399d6.png", "65e399d6966624be0d3a63b62f8cd387"],
        ["/static/media/logo365Win.c18e6224.png", "c18e622439514e7ef2dbcfcb8e321de6"],
        ["/static/media/logo365Win@2x.57745d3b.png", "57745d3b2825acc29b03924843c4ad2a"],
        ["/static/media/logoG88.2ac13579.png", "2ac1357909e5a07d6f78183ba7c6a603"],
        ["/static/media/logoG88@2x.ea058fb7.png", "ea058fb7287708dc17eefd0aee587f3f"],
        ["/static/media/logoM88.7612e11f.png", "7612e11f3ff86ec7d2db21b344fd9a66"],
        ["/static/media/logoM88@2x.c4e66b98.png", "c4e66b9876af4809b1959b56f4d09c1a"],
        ["/static/media/logoR88.83d5f286.png", "83d5f2862b81c6d67d0368b6aec2a46f"],
        ["/static/media/logoR88@2x.417265c7.png", "417265c7ceaae0a6dd861474274fc756"],
        ["/static/media/logoV88.96e1190b.png", "96e1190b53e7bdfb049437e5533b2731"],
        ["/static/media/logoV88@2x.a3efd06e.png", "a3efd06ee917b4ba995950fc1cb90c47"],
        ["/static/media/logoW88.7910ec17.png", "7910ec17ed5db0b47e7878754c6bc188"],
        ["/static/media/logoW88@2x.7efddc4a.png", "7efddc4aabd832cee7853c776c04a1cb"],
        ["/static/media/luckywheel.f248b758.png", "f248b7583569327c1dabe41da9f45d29"],
        ["/static/media/lv2.dcc8896a.png", "dcc8896a5b098bc06a9818de65ea15cc"],
        ["/static/media/m-vip.a7f5f0e5.png", "a7f5f0e59d32aa7a6ff6d9b8870fa4fe"],
        ["/static/media/m-vip2.2bdd24e1.png", "2bdd24e1305e01b0f332c93403b6924b"],
        ["/static/media/m1-s.d78bd163.png", "d78bd1634ccd91df675a046f06b06559"],
        ["/static/media/m1-t.013c5df7.png", "013c5df7c3270c006df16d4842339e87"],
        ["/static/media/m1.f110616a.png", "f110616a4324d157fedfb047d287c179"],
        ["/static/media/m11-s.502830be.png", "502830be36346d10b0065914c9ee2623"],
        ["/static/media/m11-t.6657fa01.png", "6657fa01487aa2ac70b6c599ccf98645"],
        ["/static/media/m11.2dc230cb.png", "2dc230cb780ec5723ddcee342a0d03fd"],
        ["/static/media/m2-s.b9c35d88.png", "b9c35d8869ad34ec5c82cb57b03cacfa"],
        ["/static/media/m2-t.05063441.png", "05063441487da8de077c605d478a0d36"],
        ["/static/media/m2.18f49020.png", "18f49020ca63956a8545db04631baf6d"],
        ["/static/media/m22-s.a83934c6.png", "a83934c6bf21a7561bfd8055c9261fb1"],
        ["/static/media/m22-t.200200bf.png", "200200bff70fbf5985d40c8e44ef40c9"],
        ["/static/media/m22.66e47bdf.png", "66e47bdffe40650543086283f725e9e6"],
        ["/static/media/m3-s.7b531942.png", "7b5319427e7d474875068bf9f497c1e3"],
        ["/static/media/m3-t.60c5b240.png", "60c5b2400b6b01dfc449e9029c66e5e5"],
        ["/static/media/m3.4b281b4c.png", "4b281b4c67accf85efa878fe41617aaf"],
        ["/static/media/m33-s.92c45731.png", "92c45731eb80ff8f368db7373551618c"],
        ["/static/media/m33-t.ce558533.png", "ce558533a67efdada8ae97dc4d3ac408"],
        ["/static/media/m33.569df8a7.png", "569df8a7e94a635c82272608a80527bd"],
        ["/static/media/m365.6a90c26b.png", "6a90c26b6c5c731d82d5bddd6e649d21"],
        ["/static/media/m4.7caec107.png", "7caec1079867c55739c317d7387afc52"],
        ["/static/media/m44.a1d28b34.png", "a1d28b340cdf9584a6860ec0725d5c5b"],
        ["/static/media/m5.1a23448a.png", "1a23448a2d30a2714d24133aa5f502c4"],
        ["/static/media/m55.96c22b0e.png", "96c22b0ecf37fec5152c80455b37d999"],
        ["/static/media/m6.283996b2.png", "283996b2ec12d5d6e7f9278e3dfa4834"],
        ["/static/media/m66.d130c53d.png", "d130c53d9fa24061741e387f5aa763bd"],
        ["/static/media/m7.45e2ae5b.png", "45e2ae5bf6042f32e1f56289e5340865"],
        ["/static/media/m77.45e6ea6f.png", "45e6ea6f60799a6188916772e8719b82"],
        ["/static/media/m88.5bfcdc8e.png", "5bfcdc8ebd055fcc24514d072c617e53"],
        ["/static/media/name-tour-sam.c01b29b9.png", "c01b29b946a4510393f22853bc16cb8b"],
        ["/static/media/name-tour-tlmn.5ba890d2.png", "5ba890d2232497cf660666df310897fd"],
        ["/static/media/onback.d05f4db5.png", "d05f4db5cd25ccf9aa96d119f5d25656"],
        ["/static/media/pattern-jackpot-bg.6d3c5867.svg", "6d3c58674fc5b06181f05d08935a2fb3"],
        ["/static/media/pattern-star-jackpot-1.3cdf6609.svg", "3cdf660945dfa12f3e12a8177ce19863"],
        ["/static/media/pattern-star-jackpot-2.002dc914.svg", "002dc9147a762ef1fa262a8772419a22"],
        ["/static/media/popup-tour-tlmn.202b4d82.png", "202b4d821d58d3864d5af9498b34f20d"],
        ["/static/media/portal.06bf416f.png", "06bf416ff869e91fe77d76bb1b226543"],
        ["/static/media/r365.063cfb20.png", "063cfb2081d04382c8f6dfc81500c7ae"],
        ["/static/media/r88.cc7a2925.png", "cc7a29258f5cf5aa33b1838de928ebdf"],
        ["/static/media/t1.ca01e8e6.png", "ca01e8e69ea0626432b764ba045717a2"],
        ["/static/media/text_2.a8f0afcb.png", "a8f0afcb7f61699ce5438cbf7899eb4f"],
        ["/static/media/ticket-bottom.8a24f90a.svg", "8a24f90a91480d65c9f13f44cd66b1e0"],
        ["/static/media/ticket-top.1e8e238f.svg", "1e8e238f544061684183a8f7b0fb6844"],
        ["/static/media/ticket-top.3a15cfcc.svg", "3a15cfccf5d630e45c775833c311656a"],
        ["/static/media/title-ranking-vip.172461a7.png", "172461a795189ec0ceb01ec369558ad1"],
        ["/static/media/title-ranking.f4d14347.png", "f4d14347df9a0a8d61997b7d76932e3f"],
        ["/static/media/ui.092e07b8.png", "092e07b8b8186a5129372799c11ba9da"],
        ["/static/media/v88.c12123e2.png", "c12123e2dcb6655833613f01442ff7ad"],
        ["/static/media/verify.d48e9a26.png", "d48e9a262c0aa2d94c9efdacc3f9c650"],
        ["/static/media/viptour-head.d0e855ef.png", "d0e855efac79dac1d033d302074e0c5a"],
        ["/static/media/viptour-tlmn.8b296edd.png", "8b296edd8006904c741d1ddff28f1ece"],
        ["/static/media/w365.c85c56eb.png", "c85c56ebfcc684a803e2dc8c580fa688"],
        ["/static/media/w88.e87ef2c7.png", "e87ef2c7fc6b4e55865727b0b229fef7"]
    ],
    cacheName = "sw-precache-v3-sw-precache-webpack-plugin-" + (self.registration ? self.registration.scope : ""),
    ignoreUrlParametersMatching = [/^utm_/],
    addDirectoryIndex = function(a, e) {
        var c = new URL(a);
        return "/" === c.pathname.slice(-1) && (c.pathname += e), c.toString()
    },
    cleanResponse = function(e) {
        return e.redirected ? ("body" in e ? Promise.resolve(e.body) : e.blob()).then(function(a) {
            return new Response(a, {
                headers: e.headers,
                status: e.status,
                statusText: e.statusText
            })
        }) : Promise.resolve(e)
    },
    createCacheKey = function(a, e, c, d) {
        var t = new URL(a);
        return d && t.pathname.match(d) || (t.search += (t.search ? "&" : "") + encodeURIComponent(e) + "=" + encodeURIComponent(c)), t.toString()
    },
    isPathWhitelisted = function(a, e) {
        if (0 === a.length) return !0;
        var c = new URL(e).pathname;
        return a.some(function(a) {
            return c.match(a)
        })
    },
    stripIgnoredUrlParameters = function(a, c) {
        var e = new URL(a);
        return e.hash = "", e.search = e.search.slice(1).split("&").map(function(a) {
            return a.split("=")
        }).filter(function(e) {
            return c.every(function(a) {
                return !a.test(e[0])
            })
        }).map(function(a) {
            return a.join("=")
        }).join("&"), e.toString()
    },
    hashParamName = "_sw-precache",
    urlsToCacheKeys = new Map(precacheConfig.map(function(a) {
        var e = a[0],
            c = a[1],
            d = new URL(e, self.location),
            t = createCacheKey(d, hashParamName, c, /\.\w{8}\./);
        return [d.toString(), t]
    }));

function setOfCachedUrls(a) {
    return a.keys().then(function(a) {
        return a.map(function(a) {
            return a.url
        })
    }).then(function(a) {
        return new Set(a)
    })
}
self.addEventListener("install", function(a) {
    a.waitUntil(caches.open(cacheName).then(function(d) {
        return setOfCachedUrls(d).then(function(c) {
            return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(e) {
                if (!c.has(e)) {
                    var a = new Request(e, {
                        credentials: "same-origin"
                    });
                    return fetch(a).then(function(a) {
                        if (!a.ok) throw new Error("Request for " + e + " returned a response with status " + a.status);
                        return cleanResponse(a).then(function(a) {
                            return d.put(e, a)
                        })
                    })
                }
            }))
        })
    }).then(function() {
        return self.skipWaiting()
    }))
}), self.addEventListener("activate", function(a) {
    var c = new Set(urlsToCacheKeys.values());
    a.waitUntil(caches.open(cacheName).then(function(e) {
        return e.keys().then(function(a) {
            return Promise.all(a.map(function(a) {
                if (!c.has(a.url)) return e.delete(a)
            }))
        })
    }).then(function() {
        return self.clients.claim()
    }))
}), self.addEventListener("fetch", function(e) {
    if ("GET" === e.request.method) {
        var a, c = stripIgnoredUrlParameters(e.request.url, ignoreUrlParametersMatching),
            d = "index.html";
        (a = urlsToCacheKeys.has(c)) || (c = addDirectoryIndex(c, d), a = urlsToCacheKeys.has(c));
        var t = "/index.html";
        !a && "navigate" === e.request.mode && isPathWhitelisted(["^(?!\\/__).*"], e.request.url) && (c = new URL(t, self.location).toString(), a = urlsToCacheKeys.has(c)), a && e.respondWith(caches.open(cacheName).then(function(a) {
            return a.match(urlsToCacheKeys.get(c)).then(function(a) {
                if (a) return a;
                throw Error("The cached response that was expected is missing.")
            })
        }).catch(function(a) {
            return console.warn('Couldn\'t serve response for "%s" from cache: %O', e.request.url, a), fetch(e.request)
        }))
    }
});