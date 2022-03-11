const APP_ID ='b23801c70c564e239465b0bbb5c6928a'
const CHANNEL = 'main'
const TOKEN = '006b23801c70c564e239465b0bbb5c6928aIADfCWBbMLyHTVahU/4PJ35p3NMWEitPVBJHRuii+1ZfQmTNKL8AAAAAEAAJCiqYpqMsYgEAAQCpoyxi'
let UID;


const client = AgoraRTC.createClient({mode:'rtc', codec:'vp8'})

let localTracks = []
let remoteUsers = {}

let joinAndDisplayLocalStream = async () => {
   UID = await client.join(APP_ID, CHANNEL, TOKEN, null)

   localTracks = await AgoraRTC.createMicrophoneAndCameraTracks()

   let player = `    <div class="video-container" id="user-container-${UID}">
                        <div class="username-wrapper"><span class="user-name">My Name:</span></div>
                        <div class="video-player" id="user-${UID}"></div>
                    </div>`
    document.getElementById('video-streams').insertAdjacentHTML('beforeend', player)

    localTracks[1].play(`user-${UID}`)


    await client.publish([localTracks[0], localTracks[1]])
}

joinAndDisplayLocalStream()