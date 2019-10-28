let menuOpened = false;
window.onload = () => {
    menuSize();
    $('#menu_button').click(() => {
            if(menuOpened){
                swapToMenuDesktop();
                $('#menu_button')
                    .css({
                        'position': 'static',
                        "border": "none",
                        "padding": "0",
                    });
            }else {
                swapToCrossDesktop();
            }
    });

    $("article, footer").click(() => {
        if(menuOpened){
            swapToMenuDesktop()
        }
    });
    if($('#progressImg').length)progressBarVert();
};
window.onresize = () => {
        if(menuOpened){
            crossSize();
        }else{
            menuSize();
        }
    if($('#progressImg').length)progressBarVert();
};

function swapToMenuDesktop() {
    $('#menu_button').attr('src', 'assets/menu.png')
    .css(
            {
                "border": "none",
                "padding": "0"
            });
    menuSize();
    $('#dropdownContent').css('display', 'none');
    menuOpened = false;
}

function swapToCrossDesktop() {
    $('#menu_button').attr('src', 'assets/cross.svg')
    .css(
            {
                "border": "0.01vw solid",
                "padding": "0.3vw"
            });
    crossSize();
    $('#dropdownContent').css(
        {
            "display" : "flex",
            "flexDirection" : "column",
        }
    );
    menuOpened = true;
}

function menuSize() {
    if(window.innerWidth>1500) $('#menu_button').css('width', '1.8vw');
    else if(window.innerWidth>1024) $('#menu_button').css('width', '2.5vw');
    else if(window.innerWidth>512) $('#menu_button').css('width', '4vw');
    else $('#menu_button').css('width', '6vw');
}
function crossSize() {
    if(window.innerWidth>1500) {
        $('#menu_button').css({
            'width': '1.2vw',
            'position': 'static',
            "border": "0.01vw solid",
            "padding": "0.3vw"
        });
        $('#dropdownContent').css(
            {
                "alignItems": "flex-start",
                "justifyContent": "flex-start"
            }
        );
    }
    else if(window.innerWidth>1024) {
        $('#menu_button').css({
            'width': '1.8vw',
            'position': 'static',
            "border": "0.01vw solid",
            "padding": "0.3vw"
        });
        $('#dropdownContent').css(
            {
                "alignItems": "flex-start",
                "justifyContent": "flex-start"
            }
        );
    }
    else if(window.innerWidth>512) {
        $('#menu_button')
            .css({
                'width': '13vw',
                'position': 'absolute',
                'zIndex': '2',
                "border": "0.01vw solid",
                "padding": "1vw",
                'right': '2vw',
                'top': '1vw'
            });
        $('#dropdownContent').css(
            {
                "alignItems": "center",
                "justifyContent": "center"
            }
        );
    }
    else{ $('#menu_button').css({
            'width': '15vw',
            'position': 'absolute',
            'zIndex': '2',
            "border": "0.01vw solid",
            "padding": "1vw",
            'right': '2vw',
            'top': '1vw',
        });
        $('#dropdownContent').css(
            {
                "alignItems": "center",
                "justifyContent": "center"
            }
        );
    }
}
function progressBarVert() {
    if($('#orders').length){
        if(window.innerWidth>1024){
            $('#progressImg').attr('src', 'assets/firstProgress.png');
        }else{
            $('#progressImg').attr('src', 'assets/firstProgressVert.png');
        }
    } else if($('#payment').length){
        if(window.innerWidth>1024){
            $('#progressImg').attr('src', 'assets/secondProgress.png');
        }else{
            $('#progressImg').attr('src', 'assets/secondProgressVert.png');
        }
    }else if($('#thanks').length){
        if(window.innerWidth>1024){
            $('#progressImg').attr('src', 'assets/thirdProgress.png');
        }else{
            $('#progressImg').attr('src', 'assets/thirdProgressVert.png');
        }
    }

}

