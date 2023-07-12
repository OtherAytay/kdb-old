function initializeCreate() {
    ReactDOM.render(general(), document.getElementById('general'))
}


function general() {

    return React.createElement(
        'div',
        {class: 'card border-general'},
        React.createElement(
            'h4',
            {class: 'card-header text-center text-general'},
            "General"
        ),
        React.createElement(
            'div',
            {class: 'card-body'},
            
        )
    )
}