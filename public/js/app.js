import getSessions, * as template from './SessionRepository.js';

function render() {
    var list = document.querySelector('#sessions');
    if (!list) return;
    list.innerHTML = template.sessionTemplate(data.listItems);
};


var data = {
    listItems: []
};

getSessions()
    .then((sessions) => {
        console.log('promises!')
        data.listItems = sessions;
        render();
    });
