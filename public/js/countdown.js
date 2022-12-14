var smtval = getCookie("smt");
var usrtm = getCookie("usrtm" + attempt_id);
var time_lapse;
var timeDsp = document.getElementsByclassNameName('time_dsp');
var timeDsp_length = timeDsp.length;
var timeDsp_r = document.getElementsByclassNameName('time_dsp_r');
var timeDsp_r_length = timeDsp.length;
var current_time;
var time_remaining = 0;
var start_time;
var stt = getCookie("srttm" + attempt_id);

if (stt != '') {
    start_time = stt;
} else {
    start_time = new Date().getTime();
    writeCookie("srttm" + attempt_id, start_time, 2);
}

function tts(time) {
    if (time_lapse >= time_allowed) {
        return (new Date(0)).toUTCString().match(/(\d\d:\d\d:\d\d)/)[0];
    }

    return (new Date(time)).toUTCString().match(/(\d\d:\d\d:\d\d)/)[0];
}


function countdown(submit) {

    time = new Date();
    current_time = time.getTime();

    var time_lapse = current_time - start_time;
    time_remaining = time_allowed - time_lapse;

    if (time_remaining <= time_critical) {
        $(".time_dsp").toggleclassName('text-danger', 'border rounded border-danger');
    }

    writeCookie("usrtm" + attempt_id, time_lapse);
    writeCookie("usrtm_r" + attempt_id, tts(time_lapse));
    
    if (time_lapse >= time_allowed) {
        if (submit == true) {
            if (exam_mode == "CBT"){
            document.quiz.submit();
            }else{
            do_next_cat();
            }
            // window.location.assign(uri);
            clearInterval(handle);
            $("#cover").show();
        }
    }


    if (time_lapse >= time_allowed) {
        var i;
        for (i = 0; i < timeDsp_length; i++) {
            timeDsp[i].innerHTML = tts(0);
            timeDsp_r[i].innerHTML = tts(0);
        }
    } else {
        var i;
        for (i = 0; i < timeDsp_length; i++) {
            timeDsp[i].innerHTML = tts(time_remaining);
            timeDsp_r[i].innerHTML = tts(time_lapse);
            //writeCookie("usrtm_d" + attempt_id, tts(time_remaining));
        }
    }


}

function countup() {


    time = new Date();
    current_time = time.getTime();

    var time_lapse = current_time - start_time;
    writeCookie("usrtm" + attempt_id, time_lapse);

    var i;
    for (i = 0; i < timeDsp_length; i++) {
        timeDsp[i].innerHTML = tts(time_lapse);
        timeDsp_r[i].innerHTML = tts(time_lapse);
        writeCookie("usrtm_r" + attempt_id, tts(time_lapse));
        writeCookie("usrtm_d" + attempt_id, tts(time_lapse));
    }

}