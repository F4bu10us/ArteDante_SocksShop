    $('#hoverBox1').mouseover(() => {
            $('#hoverBox1')
                .css({
                    'zIndex' : 1,
                    'border' : '0.1vw solid black',
                    'position': 'relative'
                });
            $('#socksForm')
                .css({
                    'display' : 'flex',
                    'flexDirection' : 'column',
                    'alignItems' : 'center',
            })
    }).mouseleave(() => {
        $('#hoverBox1')
            .css({
               'position' : 'static',
                'border' : 'none'
            });
        $('#socksForm')
            .css({
                'display' : 'none',
            })
    });