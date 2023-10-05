const mysql = require('../mysql');
const fs = require('fs');
const https = require('https');
const axios = require('axios');
const randexp = require('randexp');


exports.oAuthGerencianet = async (req, res, next) => {
    try {
        const cert = fs.readFileSync('prod282386.p12');
        const credentials = process.env.CLIENT_ID + ':' + process.env.CLIENT_SECRET;
        const auth = Buffer.from(credentials).toString('base64');
        const agent = https.Agent({
            pfx: cert,
            passphrase: ''
        });
        const data = JSON.stringify({ "grant_type": "client_credentials" });

        res.locals.agent = agent

        const config = {
            method: 'POST',
            url: 'https://api-pix.gerencianet.com.br/oauth/token',
            headers: {
                Authorization: 'Basic ' + auth,
                'Content-Type': 'application/json'
            },
            httpsAgent: agent,
            data: data
        }

        axios(config)
            .then(response => {
                res.locals.accessToken = response.data.access_token;
                console.log('Auth', response.data);
                next();
            })
            .catch(erro => {
                console.log(error);
                return res.status(500).send({ error: error });
            })

    } catch (error) {
        return res.status(500).send({ error: error });
    }
}


exports.getQrCode = async (req, res, next) => {
    try {
        const locId = res.locals.billing.loc.id;
        const config = {
            method: 'GET',
            url: `https://api-pix.gerencianet.com.br/v2/loc/${locId}/qrcode`,
            headers: {
                Authorization: 'Bearer ' + res.locals.accessToken,
                'Content-Type': 'application/json'
            },
            httpsAgent: res.locals.agent
        }

        axios(config)
            .then(response => {
                imgQrCode = decodeBase64Image(response.data.imagemQrcode);
                fs.writeFileSync(`qrcodes/pix-billing-${locId}.jpg`, imgQrCode.data)
                console.log('QrCode', response.data);
                next();
            })
            .catch(erro => {
                console.log(error);
                return res.status(500).send({ error: error });
            })
    } catch (error) {
        return res.status(500).send({ error: error });
    }
}

