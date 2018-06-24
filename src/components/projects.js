export default {
 projects: [
    {
        name: "Audio As An Interface",
        type: 2,
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
        type: 1,
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









 ]



}