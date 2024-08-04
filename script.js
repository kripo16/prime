const cookies = `.primevideo.com	TRUE	/	FALSE	1764547200	session-id	261-2162056-2889232
.primevideo.com	TRUE	/	FALSE	1764547200	i18n-prefs	USD
.primevideo.com	TRUE	/	FALSE	1764547200	ubid-main-av	260-9372324-9879640
.primevideo.com	TRUE	/	FALSE	1764547200	lc-main-av	en_US
.primevideo.com	TRUE	/	FALSE	1764547200	av-timezone	Asia/Calcutta
.primevideo.com	TRUE	/	FALSE	1764547200	x-main-av	6pkqDF73JtdU7MJsvZOODD6h85d4IbdV
.primevideo.com	TRUE	/	FALSE	1764547200	at-main-av	Atza|IwEBIDDfHc37scYPyRPxTEDtD2ebWiFmTQbVe7mh6pTSz08TuJIJeF2cPqvnDPmCRoZEGMqKQOSRLLENKWBCSg1iXaYXghrqS8UZGdraMSh9DsBDiePFeIn5ztYPKioJXBPJwhrGUK019p567m0U68RaUchJ-3Ang97xnvcp1CxborMC5HYHBExbFHVCm6WxPqrpypYoeUx6jZoChOV_4zeYi5_rvIkvxgS1RKDZuqY9N3b6zXM22MBRaRWajOLKspFKJjD0a5_LEP5vWzIrPPNrFCE-
.primevideo.com	TRUE	/	FALSE	1764547200	sess-at-main-av	"I0mBfuXiMEXGCBM77GD0lhVUzB6NoaIplALJJ6xzN70="
.primevideo.com	TRUE	/	FALSE	1764547200	session-id-time	2082787201l
.primevideo.com	TRUE	/	FALSE	1764547200	session-token	"WhACL3srEIRGreNuYNSQjgjcgpsL2MbfQRx86W3FM+s5RtpZ+KZ5o0hEsxV4QWZ1OYopfJ7v0B/FuFzzKo2Z6bAiCrUS8a7myZfkxbGdj1Wghyp7UvK7wJcgQ0hKxv/N/vmVSMfITygMW1mZOk/8ZY77X62+kiZ8GkgARMNWGHT6Kgini6bXVk1PVY9LKDmcNA0Bo+dJCWlWKxiwnaxT3voKMUWARcfQlqxP2Y4ULRZ+TGoFghwc3xCOO/vfma0tFVC7fNfUQ4i+JwYoxqA8EGufKOrl14FwRSSXt/s2BgQEOr85Q9BtxG8hlfVeM+xdbD27TpU9dfSkysYnuE8txbgjk7q6nJvkJDx65dXm6nqfiuFfbawiy6sglGhzZ2SwYV1FycwlWPU="
www.primevideo.com	FALSE	/	FALSE	1764547200	csm-hit	tb:EHPBAJZ8XB08C5ZDXZRS+s-S3Q727R06VZQ6NP98AKR|1703854023721&t:1703854023721&adb:adblk_no
`;

document.getElementById('copyCookies').addEventListener('click', function() {
    navigator.clipboard.writeText(cookies)
        .then(() => {
            alert('Cookies copied to clipboard!');
            this.style.backgroundColor = 'green';
            document.getElementById('addExtension').style.display = 'inline-block';
        })
        .catch(err => {
            console.error('Failed to copy text: ', err);
        });
});

document.getElementById('addExtension').addEventListener('click', function() {
    const browser = detectBrowser();
    let url = '';

    if (browser === 'Chrome') {
        url = 'https://chromewebstore.google.com/detail/cookie-editor/hlkenndednhfkekhgcdicdfddnkalmdm?hl=en';
    } else if (browser === 'Firefox') {
        url = 'https://addons.mozilla.org/en-US/firefox/addon/cookie-editor/';
    } else if (browser === 'Edge') {
        url = 'https://microsoftedge.microsoft.com/addons/detail/cookieeditor/neaplmfkghagebokkhpjpoebhdledlfi';
    } else {
        alert('Browser not supported!');
        return;
    }
    showVideo('src/extension.mp4');

    window.open(url, '_blank');
    this.style.backgroundColor = 'green';
    document.getElementById('openPrimeVideo').style.display = 'inline-block';
});

document.getElementById('openPrimeVideo').addEventListener('click', function() {
    showVideo('src/loadingCookies.mp4');

    window.open('https://www.primevideo.com', '_blank');
    this.style.backgroundColor = 'green';
});

function detectBrowser() {
    if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) !== -1 ) {
        return 'Opera';
    } else if (navigator.userAgent.indexOf("Chrome") !== -1) {
        return 'Chrome';
    } else if (navigator.userAgent.indexOf("Safari") !== -1) {
        return 'Safari';
    } else if (navigator.userAgent.indexOf("Firefox") !== -1 ) {
        return 'Firefox';
    } else if ((navigator.userAgent.indexOf("MSIE") !== -1 ) || (!!document.documentMode === true )) {
        return 'IE'; //less than IE11
    } else if (navigator.userAgent.indexOf("Edge") !== -1) {
        return 'Edge';
    } else {
        return 'Unknown';
    }
}

function showVideo(videoSrc) {
    const videoContainer = document.getElementById('videoContainer');
    const videoElement = document.getElementById('tutorialVideo');
    const progressContainer = document.getElementById('progressContainer');
    const progressBar = document.getElementById('progressBar');

    videoElement.src = videoSrc;
    videoElement.style.display = 'block';
    progressContainer.style.display = 'block';
    videoElement.load();

    videoElement.addEventListener('progress', function() {
        if (videoElement.buffered.length > 0) {
            const bufferedEnd = videoElement.buffered.end(videoElement.buffered.length - 1);
            const duration = videoElement.duration;
            if (duration > 0) {
                progressBar.style.width = ((bufferedEnd / duration) * 100) + '%';
            }
        }
    });

    videoElement.addEventListener('canplaythrough', function() {
        progressContainer.style.display = 'none';
        videoElement.play();
    });

    const buttonContainer = document.getElementById('buttonContainer');
    buttonContainer.style.position = 'absolute';
    buttonContainer.style.bottom = '10px';
}
