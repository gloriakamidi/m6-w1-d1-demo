const Laptop = require("./laptop"); //we're bringing in the files
const Tablet = require("./tablet");

const gadget = { Laptop, Tablet };

// add module.export here
module.exports ={
    createGadget(type, attributes) {
        const GadgetType = gadget[type];
        return new GadgetType(attributes);
    }
};
