module.exports = function printReceipt(itemList) {
    var output = '***<store earning no money>Receipt ***\n';
    var total_amount = 0;
    var prev_item = '';
    var count = 0;

    itemList.forEach(item => {
        if (item.Barcode === prev_item.Barcode || count === 0) {
            count ++;
        } else {
            total_amount = total_amount + (prev_item.Price*count);
            output += 'Name: ' + prev_item.Name +', Quantity: ' + count +' ' + prev_item.Unit + 's, Unit price: ' + prev_item.Price.toFixed(2) + ' (yuan), Subtotal: ' + (prev_item.Price*count).toFixed(2) + ' (yuan)\n';
            count = 1;
        }
        prev_item = item;
    });
    total_amount = total_amount + (prev_item.Price*count);
    output += 'Name: ' + prev_item.Name +', Quantity: ' + count +', Unit price: ' + prev_item.Price.toFixed(2) + ' (yuan), Subtotal: ' + (prev_item.Price*count).toFixed(2) + ' (yuan)\n' +
              '----------------------\n'+
              'Total: ' + total_amount.toFixed(2) + ' (yuan)\n' +
              '**********************\n';
    return output;
};