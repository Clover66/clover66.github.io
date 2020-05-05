$(document).ready(function () {
    let th = 1;
    $('link[id=dark]')[0].disabled = true;
    $('#ch_theam').click(function () {
        if (th == 0) {
            console.log('Светлая тема')
            $('link[id=light]')[0].disabled = false;
            $('link[id=dark]')[0].disabled = true;
            th = 1;
        }
        else {
            console.log('Темная тема')
            $('link[id=light]')[0].disabled = true;
            $('link[id=dark]')[0].disabled = false;
            th = 0;
        }
    });
});
