$(function () {

    let colors = ['red', 'orange', 'gold', 'blue', 'green', 'purple'];

    $('#btnSubmit').prop('disabled', true);
    $("#btnBox").keyup(function () {
        if ($('#btnBox').val() == 0) {
            $('#btnSubmit').prop('disabled', true);
        } else {
            $('#btnSubmit').prop('disabled', false);
        }
    })

    $(document).ready(function () {
        $('<div></div>').css({
            // 'background-color': 'blue',
            // 'height': '100px',
            // 'width': '100px',
            'margin-top': '10px'
        }).insertAfter('#form');
    })

    $('#btnSubmit').on('click', function (e) {
        e.preventDefault();
        var str = $("#btnBox").val();
        $(str).append($('div'));
        // alert(str);
        // let h2 = $("<h2></h2>");
        // h2.append(str);
        // $("div").append(h2);
        // h2.on("mouseover", function(){
        //     h2.css({
        //         'background-color': 'red',
        //         'border-radius': '5px'
        //     })
        // })
        // h2.on("mouseleave", function(){
        //     h2.css({
        //         'background-color': 'white',
        //         'border-radius': '0px'
        //     })
        // })
        let ul = $("<ul></ul>");
        let li = $("<li></li>");
        ul.append(li)
        li.append(str);
        $("div").append(ul);
        li.on("click", function () {
            const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
            const r = randomBetween(0, 255);
            const g = randomBetween(0, 255);
            const b = randomBetween(0, 255);
            const rgb = `rgb(${r},${g},${b})`
            li.css({
                'color': rgb
            })

            li.on('dblclick', function() {
                li.remove();
            })


        })

        
    });

























    // let li = $('<li></li>');
    // li.append(str);
    // $("ul").append(li);

    // // li.click(funtion() {
    // //     li.css("color,'rgb(${randomNumber1}, , ,)')
    // // })

    // li.dblclick(function() {
    //     li.remove();
    // })

});

