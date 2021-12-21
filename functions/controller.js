const admin = require("firebase-admin");
const serviceAccount = require("./permissions.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

module.exports = {

    async createItem(req, res) {
        try {
            await db.collection('items').doc('/' + req.body.id + '/')
                .create({ item: req.body.item });
            return res.status(200).send();
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    },

    async getItem(req, res) {
        try {

            const document = db.collection('items').doc(req.params.item_id);

            let item = await document.get();
            let response = item.data();

            return res.status(200).send(response);
        } catch (error) {

            console.log(error);
            return res.status(500).send(error);
        }
    },

    async updateItem(req, res) {
        try {
            const document = db.collection('items').doc(req.params.item_id);

            await document.update({
                item: req.body.item
            });

            return res.status(200).send();
        } catch (error) {

            console.log(error);
            return res.status(500).send(error);
        }
    },

    async deleteItem(req, res) {
        try {
            const document = db.collection('items').doc(req.params.item_id);
            
            await document.delete();
            
            return res.status(200).send();
        } catch (error) {
            
            console.log(error);
            return res.status(500).send(error);
        }
    }
}   