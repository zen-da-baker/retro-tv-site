const main = document.getElementById('main');
const channelUp = document.getElementById('channelUp');
const channelDown = document.getElementById('channelDown');

const embed = "https://www.youtube.com/embed/";

const dbz = "ySvIneBa1uM?si=PIZ1c9og1Qh2O-ls";
const JFKSpeech = "TEKaoWKnxNs?si=pKeEjd8PcGtIO1Sa";
const drumCorp = "PECUpJuUeAQ?si=oS_nvs0B-YCALIyw";
const starWars = "XHk5kCIiGoM?si=N1ITv6luJSUPvjUO";
const halo = "AEVz0KyQDt8?si=AcWgyy9HKSe42v3C";
const fireEmblem = "YVp5Ov3cneI?si=48YZWb-8c5EBlIIi";
const pokemon = "OF_yVimd5Hs?si=zKfeVvkNuh3JgP-O";

const channels = [dbz, JFKSpeech, drumCorp, starWars, halo, fireEmblem, pokemon];

let i = 0;

function increaseChannel() {
        
    if (i >= channels.length - 1) {
        i = 0;
    } else {
        i++;
    }

    app();    
}

function decreaseChannel() {

    if (i <= 0) {
        i = channels.length - 1;
    } else {
        i--;
    }

    app();
}

function app() {

    console.log('channel: ' + i);

    main.innerHTML = `
            <iframe width="100%" height="100%" src="${embed + channels[i]}" 
                title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen>
            </iframe>`

}