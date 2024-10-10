const {fileRead, fileWrite} = require('./fileManager');
const {checkDate, checkName} = require('./dataValidation');


// Main function to handle reading, validating, and writing data
async function processEvents() {
    try {
        // Read data from events.json
        const events = await fileRead('events.json');
        
        // Filter events with valid dates
        const validEvents = events.filter(event => checkDate(event.date));

        // Add a validName property to each valid event
        validEvents.forEach(event => {
            event.validName = checkName(event.name);
        });

        // Write the filtered events with the new validName property to newEvents.json
        await fileWrite('newEvents.json', validEvents);
        
        console.log('Events successfully processed and written to newEvents.json');
    } catch (error) {
        console.error('Error processing events:', error);
    }
}

processEvents();