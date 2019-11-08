/**
 * @name app
 * @author Aélion
 * @version 1.0.0
 * @abstract Entry point
 */

// Load the class definition
const Client = require('./src/models/Client');

// Create (instanciate) a new Client
const benji1 = new Client()
    .setName('Benjamin')
    .setEMail('benji1@chezlui.com')
    .setPhone('0000000000');
// Usurpation d'identité
benji1.setName('Lupin');
console.log(benji1.sayHello());


// Est-ce-que ce client est actif ?
console.log(benji1.getStatut());

const acheteur = new Client()
    .setName('Le Concurrent');

benji1.setConcurrent(acheteur);
console.log(benji1.sayHello());