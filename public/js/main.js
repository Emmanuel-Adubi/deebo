//<!-- Menu Toggle Script -->

$("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleclassName("toggled");
});

//popover
$(function () {
    $('[data-toggle="popover"]').popover()
});
$('.popover-dismiss').popover({
    trigger: 'focus'
});

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict';

    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByclassNameName('needs-validation');

        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classNameList.add('was-validated');
            }, false);
        });
    }, false);
})();


//anchor stuff
(function ($, window) {
    var adjustAnchor = function () {

        var $anchor = $(':target'),
            fixedElementHeight = 130;

        if ($anchor.length > 0) {

            $('html, body')
                .stop()
                .animate({
                    scrollTop: $anchor.offset().top - fixedElementHeight
                }, 200);

        }

    };

    $(window).on('hashchange load', function () {
        adjustAnchor();
        remove_hash();
    });

})(jQuery, window);
//query param stuff
var url = window.location.to;


function remove_hash() {

    var uri = window.location.toString();
    var index = uri.indexOf("#");
    if (index > 0) {
        var clean_uri = uri.substring(0, index);
        window.history.replaceState({}, document.title, clean_uri);
    }
}

function removeURLParameter(url, parameter) {
    //prefer to use l.search if you have a location/link object

    var hash = window.location.hash;
    var urlparts = url.split('?');
    if (urlparts.length >= 2) {

        var prefix = encodeURIComponent(parameter) + '=';
        var pars = urlparts[1].split(/[&;]/g);

        //reverse iteration as may be destructive
        for (var i = pars.length; i-- > 0;) {
            //idiom for string.startsWith
            if (pars[i].lastIndexOf(prefix, 0) !== -1) {
                pars.splice(i, 1);
            }
        }
        if (pars != "") {
            url = urlparts[0] + '?' + pars.join('&') + hash;
        } else {
            url = urlparts[0] + hash
        }
        return url.replace("?&", "?").replace("&&", "&");
    } else {
        return url;
    }
}

window.history.replaceState(null, null, removeURLParameter(url, 'rsp'));
$('document').ready(function () {

    //close alert box in 10secs
    setTimeout(function () { $(".message-box").alert('close'); }, '10000');
});

// Listen for click on toggle checkbox
$('#select-all').click(function (event) {
    if (this.checked) {
        // Iterate each checkbox
        $(':checkbox').each(function () {
            this.checked = true;
        });
    } else {
        $(':checkbox').each(function () {
            this.checked = false;
        });
    }
});




//manage cookies
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function getNCookie(cname) {
    return decodeURIComponent(getCookie(cname));
}
function wipeCookie() {
    var now = new Date();
    now.setMonth(now.getMonth() - 1);
    var allcookies = document.cookie;

    // Get all the cookies pairs in an array
    cookiearray = allcookies.split(' ; ');
    // Now take key value pair out of this array
    for (var i = 0; i < cookiearray.length; i++) {
        cookievalue = cookiearray[i];
        document.cookie = cookiearray[i] + cookievalue;
        document.cookie = "expires=" + now.toUTCString() + " ; ";
        document.write(" Setting Cookies : " + " name=" + cookievalue);
    }
}

function writeCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires + ";path=/";
}


function readCookie() {
    var allcookies = document.cookie;
    //document.write(" All Cookies : " + allcookies );
    // Get all the cookies pairs in an array
    cookiearray = allcookies.split(' ; ');
    // Now take key value pair out of this array
    for (var i = 0; i < cookiearray.length; i++) {
        name = cookiearray[i].split(' =')[0];
        value = cookiearray[i].split(' =')[1];
        document.writeln(" Key " + i + " : " + name + " = " + value + "<br />");
    }
}

function writeAnsCookie(a_set_t, qstn, ans, exdays) {
    if (getCookie(a_set_t) != "") {
        var a_set = getCookie(a_set_t);

    }

    var a_array = [];
    if (a_set != undefined) {
        a_array = a_set.split(',')
        a_array[qstn] = ans;
        a_set = a_array.join(',');
    } else {
        a_array = [];
        a_array[qstn] = ans;
        a_set = a_array.join(',');
    }
    writeCookie(a_set_t, a_set, exdays);
    $('.q_map_btn_' + qstn).removeclassName('btn-outline-secondary');
    $('.q_map_btn_' + qstn).addclassName('btn-primary');
}


function click_option_again(a_set_t, qstn, ans, exdays) {
    //event.preventDefault();
    writeAnsCookie(a_set_t, qstn, ans, 1);
    var ele = document.getElementById(ans + "q" + qstn);
    ele.click();
    ele.checked = true;
    //$("#" + ans + "q" + qstn).click();
}
//
$(document).ready(function(){
    $("#search-box").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#student-list tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });

function do_next_cat() {  
    $(document).ready(function () {
    console.log("time_up ");
    $("#cover").show();
    clearInterval(handle);
    
    $.post(base_path+"includes/do_cat.php", {
        attempt: attempt_id,
        time_spent: getCookie("usrtm" + attempt_id),
        time_spent_alt: getCookie("usrtm_r" + attempt_id)
    },
    function (data, statu) {
        if (statu == "success") {
            
            //console.log(data);
            if (data == "" || data == null) {
                $('#loader_msg').attr("className", "text-danger h5");
                $('#loader_msg').html('Something went wrong: Please reload this page...');
            }
            try {
                var response = JSON.parse(data);
                var status = response['status'];
                if (status === "success") {
                    $('#loader_msg').attr("className", "text-success h5");
                    $('#loader_msg').html(response['msg']);

                    if (response['show_score']  == true){
                        window.location.assign(base_path+"scores.php?attempt="+attempt_id);
                    }else{
                        window.location.reload();
                    }
                } else {
                    $('#loader_msg').attr("className", "text-danger h5");
                    $('#loader_msg').html(response['msg']);
                }
            }
            catch (e) {
                $("#loader_msg").html(data);
            }
        } else {
            $("#loader_msg").html("Something went wrong, please try again");
        }
    });
    });
}

  //ck editor
var ck_conf_main = {
    allowedContent: true,
    toolbarGroups: [
        { name: 'document', groups: ['mode', 'document', 'doctools'] },
        { name: 'tools', groups: ['tools'] },
        { name: 'clipboard', groups: ['clipboard', 'undo'] },
        { name: 'editing', groups: ['find', 'selection', 'spellchecker', 'editing'] },
        { name: 'links', groups: ['links'] },
        { name: 'forms', groups: ['forms'] },
        { name: 'insert', groups: ['insert'] },
        { name: 'others', groups: ['others'] },
        { name: 'about', groups: ['about'] },
        '/',
        { name: 'basicstyles', groups: ['basicstyles', 'cleanup'] },
        { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi', 'paragraph'] },
        { name: 'styles', groups: ['styles'] },
        { name: 'colors', groups: ['colors'] },
        { name: 'wiris', groups: ['ckeditor_wiris_formulaEditor', 'ckeditor_wiris_formulaEditorChemistry', 'ckeditor_wiris_CAS'] }
    ],


};

var ck_conf_mini = {
    allowedContent: true,
    toolbarGroups: [
        { name: 'document', groups: ['mode', 'document', 'doctools'] },
        { name: 'tools', groups: ['tools'] },
        { name: 'clipboard', groups: ['clipboard', 'undo'] },
        { name: 'links', groups: ['links'] },
        { name: 'forms', groups: ['forms'] },
        { name: 'others', groups: ['others'] },
        { name: 'basicstyles', groups: ['basicstyles', 'cleanup'] },
        { name: 'insert', groups: ['insert'] },
        { name: 'editing', groups: ['find', 'selection', 'spellchecker', 'editing'] },
        { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi', 'paragraph'] },
        { name: 'styles', groups: ['styles'] },
        { name: 'about', groups: ['about'] },
        { name: 'colors', groups: ['colors'] },
        { name: 'wiris', groups: ['ckeditor_wiris_formulaEditor', 'ckeditor_wiris_formulaEditorChemistry', 'ckeditor_wiris_CAS'] }
    ],

};

CKEDITOR.replace('Q', ck_conf_main);
CKEDITOR.replace('EX', ck_conf_main);
CKEDITOR.replace('A', ck_conf_mini);
CKEDITOR.replace('B', ck_conf_mini);
CKEDITOR.replace('C', ck_conf_mini);
CKEDITOR.replace('D', ck_conf_mini);
CKEDITOR.replace('E', ck_conf_mini);
