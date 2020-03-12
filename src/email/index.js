const sendMail = msg => {
    let data_js = {
        access_token: 'vyo24vczfjdrslvcij4v6xxf',
        subject: 'Contacto',
        text: msg
    };

    const toParams = data_js => {
        let data = [];

        for (var key in data_js) {
            data.push(
                encodeURIComponent(key) + '=' + encodeURIComponent(data_js[key])
            );
        }

        return data.join('&');
    };

    const params = toParams(data_js);

    const init = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: params
    };

    return fetch('https://postmail.invotes.com/send', init);
};

export default sendMail;
