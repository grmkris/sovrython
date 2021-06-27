const LightningInvoiceStorage = artifacts.require('LightningInvoiceStorage');
const Web3 = require('web3');


contract('LightningInvoiceStorage', (accounts) => {
    it('should store lightning invoices', async () => {
        const lightningInvoiceStorage = await LightningInvoiceStorage.deployed();
        // Set value of example lightning invoice
        const invoice = "lnbc1pwr3fk2pp5zh36fav42ngkxfzywag42y06e03drpcujg38mq5gzkftdhp3phhsdqqcqzysvq8mgc5782mje6x0hgqd70pc83aa52g8pmpnc0j9x4pa3hrz3csp0ezl477f06ee4qmt4plcmmsftypy727w9zn06h9h6cz4n02t9qcp0c74yt";
        await lightningInvoiceStorage.addNewInvoice(invoice, { from: accounts[0], value: 1000});
        await lightningInvoiceStorage.addNewInvoice(invoice, { from: accounts[0], value: 1000 });
        await lightningInvoiceStorage.addNewInvoice(invoice, { from: accounts[0], value: 1000 });
        await lightningInvoiceStorage.addNewInvoice(invoice, { from: accounts[0], value: 1000 });
        await lightningInvoiceStorage.addNewInvoice(invoice, { from: accounts[0], value: 1000 });
        await lightningInvoiceStorage.addNewInvoice(invoice, { from: accounts[0], value: 1000 });
    });
        // Get stored value
        const storedData = await lightningInvoiceStorage.getInvoices();

        const etherInContract =  await lightningInvoiceStorage.getContractBalance();
        console.log("etherInContract: " + etherInContract)
        console.log(storedData)
        assert.equal(storedData[0], "lnbc1pwr3fk2pp5zh36fav42ngkxfzywag42y06e03drpcujg38mq5gzkftdhp3phhsdqqcqzysvq8mgc5782mje6x0hgqd70pc83aa52g8pmpnc0j9x4pa3hrz3csp0ezl477f06ee4qmt4plcmmsftypy727w9zn06h9h6cz4n02t9qcp0c74yt", 'The value lnbc1pwr3fk2pp5zh36fav42ngkxfzywag42y06e03drpcujg38mq5gzkftdhp3phhsdqqcqzysvq8mgc5782mje6x0hgqd70pc83aa52g8pmpnc0j9x4pa3hrz3csp0ezl477f06ee4qmt4plcmmsftypy727w9zn06h9h6cz4n02t9qcp0c74yt was not stored.');
        assert.equal(storedData[1], "lnbc1pwr3fk2pp5zh36fav42ngkxfzywag42y06e03drpcujg38mq5gzkftdhp3phhsdqqcqzysvq8mgc5782mje6x0hgqd70pc83aa52g8pmpnc0j9x4pa3hrz3csp0ezl477f06ee4qmt4plcmmsftypy727w9zn06h9h6cz4n02t9qcp0c74yt", 'The value lnbc1pwr3fk2pp5zh36fav42ngkxfzywag42y06e03drpcujg38mq5gzkftdhp3phhsdqqcqzysvq8mgc5782mje6x0hgqd70pc83aa52g8pmpnc0j9x4pa3hrz3csp0ezl477f06ee4qmt4plcmmsftypy727w9zn06h9h6cz4n02t9qcp0c74yt was not stored.');
        assert.equal(storedData[2], "lnbc1pwr3fk2pp5zh36fav42ngkxfzywag42y06e03drpcujg38mq5gzkftdhp3phhsdqqcqzysvq8mgc5782mje6x0hgqd70pc83aa52g8pmpnc0j9x4pa3hrz3csp0ezl477f06ee4qmt4plcmmsftypy727w9zn06h9h6cz4n02t9qcp0c74yt", 'The value lnbc1pwr3fk2pp5zh36fav42ngkxfzywag42y06e03drpcujg38mq5gzkftdhp3phhsdqqcqzysvq8mgc5782mje6x0hgqd70pc83aa52g8pmpnc0j9x4pa3hrz3csp0ezl477f06ee4qmt4plcmmsftypy727w9zn06h9h6cz4n02t9qcp0c74yt was not stored.');
    });
});