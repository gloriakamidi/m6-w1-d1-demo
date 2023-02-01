const Laptop = function ({ram, ssd, name}) {
    this.ram = ram || 0;
    this.ssd = ssd || 0; // les || means default
    this.name = name || "";
};

module.exports = Laptop;
