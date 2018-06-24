export default {
 projects: [
    {
        name: "Audio As An Interface",
        type: [2],
        tags: ["Swift", "DSP", "XCode", "Cocoapods", "Front End", "Research",],
        details: "<p> Audio UI is a Swift iOS experiment in Ultrasound based gesture recognition on iOS. The research is based on a paper by <a href='https://www.microsoft.com/en-us/research/publication/ultrasound-based-gesture-recognition-2/'>Microsoft Research </a>" +
         "The simple idea behind this experiment is utilise the inbuilt speaker and microphone on mobile devices to allow hands free interaction.</p>" +
         "<p>An ultrasonic tone ~20-22kHz is emitted by the phone's speaker. This tone will reflect off the user's hand. This reflected sound will be affected by a Doppler Shift.</p>" +
         "<p>DSP is achieved using a combination of the fantastic <a href='https://github.com/stsievert/swix'>SWIX</a> Matrix Math/Numpy port  and the Accelerate framework from Apple. The incoming audio from the microphone is buffered and an FFT is applied using the vDSP_fft function." + 
         " The Fourier Transform results are used to determine the gesture based on the shifts away from the fundamental frequency of the tone.",
        cardImage: "/static/img/audiointerface.png",
        images: ["/static/img/audiointerface2.gif"],
        github: "https://github.com/tothepoweroftom/AudioUI/",
        link: "",
    },
    {
        name: "3d Printing Desktop App",
        type: [1],
        tags: ["Vue", "Bootstrap", "Electron", "Desktop App", "Client",  "python", "node js", "serial", "arduino"],
        details: "<p>A freelance project to build a desktop application for London based startup Additive Flow Ltd, a 3d printing company." +
                  " I was asked to help build the front end and work on the serial communcations with the printing machines.</p>" + 
                  "<p> A front end application was built using Vue and Electron. The Node.js serialport module was used for serial communications." + 
                " </p>",
        cardImage: "/static/img/additiveflow.png",
        images: [],
        github: "",
        link: ""
    },
    {
        name: "MintCoin",
        type: [1],
        tags: ["Vue", "Bootstrap", "Web App", "blockchain"],
        details: "<p>We rig a desktop mint plant to an office-only cryptocurrency so that the value of the currency is tied to the health of the plant. You can give the plant water, or take some leaves for your mint tea. Either action will be logged in the blockchain ledger, and have an effect on the value of the currency. The idea is to make the plant autonomously tied to the micro-economy, with no need for an owner, and to incentivize our collective care and conscious harvesting of it through financial devices." +
                " </p>"  +
                "<p>Project involved a web app developed in Vue.js, which acted as a front end to the blockchain written in Ethereum. Users could buy leaves for tea by paying the mint plant's wallet through the app. </p>"  ,              
        cardImage: "/static/img/mintcoin.jpg",
        images: ["/static/img/mintcoin2.png"],
        github: "",
        link: ""
    },
    {
        name: "CryptoMusic",
        type: [1,3],
        tags: ["Vue", "Bootstrap", "Web App", "Creative", "Web Audio", "Tonejs", "p5js"],
        details: "<p>Crypto Music is a research project by Tom Power undertaken while at MOBGEN:Lab. The aim of this project is to create an art project from Bitcoin transactions. The website blockchain.com provides an open api websocket to listen to real time bitcoin transactions.</p>" +
                    "<p> Each transaction triggers a new particle system in the visualisation and a new note in the audio. p5js and delaunayjs are being used for the visualisation and the wonderful tonejs for the audio.</p>",
        images: [],
        cardImage: "/static/img/cryptomusic.png",

        github: "https://github.com/tothepoweroftom/crypto-music",
        link: "https://tothepoweroftom.github.io/cryptomusicsite/#/"
    },
    {
        name: "MOBGEN:Lab Website",
        type: [1],
        tags: ["Vue", "Bootstrap", "Website", "Full Stack"],
        details: "<p>I built the website for my team at MOBGEN:Lab to showcase the projects we worked on. It consisted of building a frontend app in Vue.js which rendered content supplied from a backend server." +
                "</p><p>I chose Vue because it was perfect for such a project. Dynamic content can be handled easy. The background of the website contains a rotating 360 image of the workplace, which is rendered using three.js</p>",
        images: ["/static/img/labwebsite2.png"],
        cardImage: "/static/img/labwebsite.png",
        github: "",
        link: "https://tompowermobgen.bitbucket.io"
    },
    {
        name: "XY Synth",
        type: [1, 3],
        tags: ["HTML", "Bootstrap", "Website", "Creative", "WebAudio", "Tonejs", "p5js", "physics"],
        details: "<p>The XY Synth is a sonic implementation of the XY Model from Condensed Matter Physics. Featured on the Google Chrome Experiments website!! The XY Model consists of a square 2d lattice of atomic spins. Each atom can have a spin which lies in any direction on the unit circle. A Metropolis Monte-Carlo algorithm is used to propagate the system forward. This algorithm sweeps through the system to decided how to line up the atomic spin vectors. </p>" +
                    "<p>The sliders give control over the Temperature, Interaction Term and the external field of the system. The visualisation gives an indication of the various possible states of the system; Domains of similar spin can be seen forming. Huge worms which wind their way across the screen. Vortices of spin like eddies of the surface of water can appear.</p>" +
                    "<p>The corresponding music is designed to accompany the visuals. The distortion of the drone is related to the temperature. The Harmonicity and modulation index of the FM synth are related to the interaction term. The modulation depth is mapped to the external magnetic field.</p>",
        cardImage: "/static/img/xysynth.png",
        images: ["/static/img/xysynth2.png", "/static/img/xysynth3.png"],

        github: "https://github.com/tothepoweroftom/xysynth",
        link: "https://experiments.withgoogle.com/xy-synth"
    },
    {
        name: "Magnetic Music",
        type: [1, 3],
        tags: ["HTML", "Bootstrap", "Website", "Creative", "WebAudio", "Tonejs", "p5js", "physics"],
        details: "<p>This is a web audio experiment built with p5js and Tonejs, that takes a model from physics, The Ising Model, and creates music from the properties of the model</p>"+
                    "<p> The Ising Model is a mathematical model of ferromagnetism. Electrons within a magnet can have a spin up or a spin down. The model governs how these spins interact under different circumstances.</p>",
        cardImage: "/static/img/magneticmusic.png",
        images: [],

        github: "https://github.com/tothepoweroftom/MagneticMusic",
        link: "https://tothepoweroftom.github.io/MagneticMusic/"
    },
    {
        name: "Music From The Atom",
        type: [1, 3],
        tags: ["HTML", "Bootstrap", "Website", "Creative", "WebAudio", "Tonejs", "p5js", "physics"],
        details: "<p>An musical experiment using Tone.js and p5.js. This was my Master's project in University. I built a Cloud Chamber, which is a subatomic article detector, with my bare hands. I then recorded a long video of particles decaying the chamber. They leave faint trails in the vapour, much like airplanes do in the sky. These trails were analysed using a computer vision system developed in Javascript with p5.js. Their position was mapped to a grid.</p>",
        cardImage: "/static/img/musicfromtheatom.png",
        images: [],

        github: "https://github.com/tothepoweroftom/musicfromtheatom",
        link: "https://tothepoweroftom.github.io/musicfromtheatom/"
    },

    {
        name: "Trained By Machines",
        type: [1],
        tags: ["HTML", "Bootstrap", "Website", "Creative", "WebAudio", "Tonejs", "p5js", "physics"],
        details: "<p>Trained by Machines is a short film and website, speculating about future scenarios between man and machine. The website was built to recreate the emotion reconditioning program from the short film.</p>",
        cardImage: "/static/img/trained.png",
        images: ["/static/img/trained2.png", "/static/img/trained3.png"],

        github: "",
        link: "https://mobgen.com/trainedbymachines"
    },

    {
        name: "Arcadis",
        type: [1],
        tags: ["Vue", "Client", "Framework 7", "Mobile PWA App"],
        details: "<p> Built a PWA app for the portfolio survey team within Arcadis. A PWA Vue app was developed which interacted with Arcadis data to improve their workflows. Framework 7 was used to provide a native-like look and feel to the application.</p>",
        cardImage: "/static/img/arcadis.jpg",
        images: [],
        github: "",
        link: ""
    },
    {
        name: "Vodafone Ziggo",
        type: [1],
        tags: ["Vue", "Client", "d3js", "Mobile PWA App"],
        details: "<p> Built a POC web app for Vodafone Ziggo for their IOT Smart Home department. The app featured d3js which was used for data visualisation relating to energy consumption. </p>",
        cardImage: "/static/img/vodafone.png",
        images: [],
        github: "",
        link: ""
    },
    {
        name: "Daily Futures",
        type: [2],
        tags: ["Swift", "DSP", "XCode", "Front End", "Research", "Machine Learning"],
        details: "<p>Daily Futures is an experment with Machine Learning on iOS. A Text Generation model trained in Keras is imported into iOS for inference. Seed words then seed the model to generate text within the app. </p>",
        cardImage: "/static/img/dailyfuture.png",
        images: ["/static/img/daily.png", "/static/img/daily2.png", ],
        github: "https://github.com/tothepoweroftom/FictionNewsGenerator",
        link: "",
    },
    {
        name: "Artificial Poetry",
        type: [2],
        tags: ["Swift", "DSP", "XCode", "Front End", "Research", "Machine Learning"],
        details: "<p>Poems are generated by a LSTM running on Metal and Accelerate. Code is borrowed from Infinite Monkeys. </p> " + 
                    " <p> Neural Network is an LSTM in keras trained on a Haiku database for 10 hours. The network is reconstructed on the device using BraincoreiOS. From here a seed sentence starts the process of text generation based on the weights that the network has learned from the training data. The result is the reconstruction of a phrases from the haiku database. </p>",
        cardImage: "/static/img/artificial.png",
        images: ["/static/img/artificial1.png", "/static/img/artificial2.png", ],
        github: "https://github.com/tothepoweroftom/ArtificialLove",
        link: "",
    },


 ]



}