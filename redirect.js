
if (/android/i.test(navigator.userAgent)) {
    window.location.href = "https://play.google.com/store/apps/details?id=com.xd.ashurbank";
} else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    window.location.href = "https://apps.apple.com/ph/app/ashur-konnekt/id6670438193?uo=2";
} else {
    window.location.href = "https://ashurbank.iq/ar";
}

